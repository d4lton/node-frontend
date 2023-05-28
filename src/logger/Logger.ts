/**
 * Copyright ©2023 Dana Basken
 */

import {LoggerLevel, LoggerLevelFromString, LoggerLevels} from "./LoggerLevel";
import {Config} from "../config/Config";

export class Logger {

  private static _logger: Logger = new Logger();
  private static _level: LoggerLevel = LoggerLevels.ERROR;

  static start(): void {
    Logger.level = LoggerLevelFromString(Config.get("logger.level", "INFO"));
  }

  fatal(...args: any[]): void {
    console.error(...Logger.prefix("FATAL"), ...args);
  }

  error(...args: any[]): void {
    if (Logger._level < LoggerLevels.ERROR) { return; }
    console.error(...Logger.prefix("ERROR"), ...args);
  }

  warn(...args: any[]): void {
    if (Logger._level < LoggerLevels.WARN) { return; }
    console.warn(...Logger.prefix("WARN"), ...args);
  }

  info(...args: any[]): void {
    if (Logger._level < LoggerLevels.INFO) { return; }
    console.log(...Logger.prefix("INFO"), ...args);
  }

  debug(...args: any[]): void {
    if (Logger._level < LoggerLevels.DEBUG) { return; }
    console.log(...Logger.prefix("DEBUG", "#006ee4"), ...args);
  }

  trace(...args: any[]): void {
    if (Logger._level < LoggerLevels.TRACE) { return; }
    console.log(...Logger.prefix("TRACE", "green"), ...args);
  }

  stacktrace(...args: any[]): void {
    if (Logger._level < LoggerLevels.TRACE) { return; }
    console.trace(...Logger.prefix("TRACE", "green"), ...args);
  }

  static prefix(level: string, color?: string): string[] {
    const now = new Date().toLocaleTimeString();
    return color ? [`%c[${now}%c] [${level}]%c`, "color: gray", `color: ${color}`, "color: inherit"] : [`%c[${now}%c] [${level}]`, "color: gray", "color: inherit"];
  }

  static get level(): LoggerLevel {
    return Logger._level;
  }

  static set level(value: LoggerLevel) {
    Logger._level = value;
  }

  static get logger(): any {
    return Logger._logger;
  }

}
