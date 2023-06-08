/**
 * Copyright ©2023 Dana Basken
 */

import {FirebaseApp, initializeApp} from "firebase/app";
import {Auth, getAuth, signInWithEmailAndPassword, signOut, Unsubscribe, User, GoogleAuthProvider, IdTokenResult, EmailAuthProvider} from "firebase/auth";
import * as FirebaseUI from "firebaseui";
import {English} from "@d4lton/node-common";
import {Logger} from "../logger/Logger";
import {State} from "../state/State";
import {Config} from "../config/Config";

const logger = Logger.logger;

export class Firebase {

  private static _app?: FirebaseApp;
  private static _auth?: Auth;
  private static _ui?: FirebaseUI.auth.AuthUI;
  private static _auth_unsubscribe: Unsubscribe;
  private static _user: User | null;
  private static _token?: IdTokenResult;
  private static _refreshTokenTimeout?: NodeJS.Timeout;

  static async start(): Promise<void> {
    State.set("firebase", "initializing");
    const options = Config.get("firebase");
    Firebase._app = initializeApp(options, `${options.projectId}.${process.env.environment}`);
    Firebase._auth = getAuth(Firebase._app);
    Firebase._auth_unsubscribe = Firebase._auth.onAuthStateChanged(Firebase.onAuthStateChanged);
  }

  static async stop(): Promise<void> {
    Firebase.stopTokenRefresher();
    Firebase._auth_unsubscribe();
  }

  static async onAuthStateChanged(user: User | null): Promise<void> {
    Firebase._user = user;
    await Firebase.refreshToken();
    if (user) {
      Firebase.startTokenRefresher();
    } else {
      Firebase.stopTokenRefresher();
    }
    State.set("user", user);
    State.set("firebase", "initialized");
  }

  static async refreshToken(): Promise<void> {
    if (Firebase._user) {
      Firebase._token = await Firebase._user.getIdTokenResult();
      const ttlMs = new Date(Firebase._token.expirationTime).getTime() - Date.now();
      logger.trace(`token ttl: ${Math.floor(ttlMs / 60000)} minutes`);
    } else {
      Firebase._token = undefined;
    }
    State.set("token", Firebase.token);
  }

  static get auth(): Auth {
    return Firebase._auth;
  }

  static get user(): User | null {
    return Firebase._user;
  }

  static get ui(): any {
    if (!Firebase._ui) {
      Firebase._ui = new FirebaseUI.auth.AuthUI(Firebase.auth);
    }
    return Firebase._ui;
  }

  static get token(): string | undefined {
    return Firebase._token?.token;
  }

  static get tokenQueryParam(): string {
    const token = Firebase.token;
    if (token) {
      return `token=${token}`;
    }
    return "";
  }

  static get bearerToken(): string {
    const token = Firebase.token;
    if (token) {
      return `Bearer ${token}`;
    }
    return "";
  }

  static get role(): string | undefined {
    return Firebase.claims?.role;
  }

  static get claims(): any {
    return Firebase._token?.claims;
  }

  static async signIn(email: string, password: string): Promise<any> {
    if (Firebase._auth) {
      return signInWithEmailAndPassword(Firebase._auth, email, password);
    }
  }

  static signInWithUi(container: string | Element, success?: (authResult: any) => boolean, failure?: (error: FirebaseUI.auth.AuthUIError) => void): void {
    Firebase.ui.start(container, {
      signInOptions: [
        {provider: GoogleAuthProvider.PROVIDER_ID},
        {provider: EmailAuthProvider.PROVIDER_ID, requireDisplayName: false}
      ],
      signInFlow: "popup",
      callbacks: {
        signInSuccessWithAuthResult: success ? success : () => false,
        signInFailure: failure
      }
    });
  }

  static async signOut(): Promise<void> {
    if (Firebase._auth) {
      return signOut(Firebase._auth);
    }
  }

  private static startTokenRefresher(): void {
    Firebase.stopTokenRefresher();
    if (!Firebase._user) { return; }
    Firebase._refreshTokenTimeout = setInterval(async () => {
      await Firebase.refreshToken();
    }, English.ms("1m"));
  }

  private static stopTokenRefresher(): void {
    clearInterval(Firebase._refreshTokenTimeout);
  }

}
