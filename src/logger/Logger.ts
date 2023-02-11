/**
 * Copyright ©2023 Dana Basken
 */

import {LoggerLevel, LoggerLevelFromString, LoggerLevels} from "../";

export class Logger {

  private static _logger: Logger = new Logger();
  private static _level: LoggerLevel = LoggerLevels.ERROR;
  private static _prefix?: string;

  static start(): void {
    // TODO: replace with Config.get("logger_level");
    Logger.level = process.env.logger_level ? LoggerLevelFromString(process.env.logger_level) : LoggerLevels.TRACE;
  }

  fatal(...args: any[]): void {
    console.error(`${Logger.prefix}[FATAL]`, ...args);
  }

  error(...args: any[]): void {
    if (Logger._level < LoggerLevels.ERROR) { return; }
    console.error(`${Logger.prefix}[ERROR]`, ...args);
  }

  warn(...args: any[]): void {
    if (Logger._level < LoggerLevels.WARN) { return; }
    console.warn(`${Logger.prefix}[WARN]`, ...args);
  }

  info(...args: any[]): void {
    if (Logger._level < LoggerLevels.INFO) { return; }
    console.log(`${Logger.prefix}[INFO]`, ...args);
  }

  debug(...args: any[]): void {
    if (Logger._level < LoggerLevels.DEBUG) { return; }
    console.log(`%c${Logger.prefix}[DEBUG]%c`, "color: #006ee4", "color: inherit", ...args);
  }

  trace(...args: any[]): void {
    if (Logger._level < LoggerLevels.TRACE) { return; }
    console.log(`%c${Logger.prefix}[TRACE]%c`, "color: green", "color: inherit", ...args);
  }

  stacktrace(...args: any[]): void {
    if (Logger._level < LoggerLevels.TRACE) { return; }
    console.trace(`%c${Logger.prefix}[TRACE]%c`, "color: green", "color: inherit", ...args);
  }

  static get prefix(): string {
    return Logger._prefix || "";
  }

  static set prefix(value: string) {
    Logger._prefix = value;
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
