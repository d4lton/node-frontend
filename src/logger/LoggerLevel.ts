/**
 * Copyright ©2023 Dana Basken
 */

export const LoggerLevels: any = {
  "FATAL": 0,
  "ERROR": 10,
  "WARN": 20,
  "INFO": 30,
  "DEBUG": 40,
  "TRACE": 50,
  "ALL": 60
} as const;

export type LoggerLevel = typeof LoggerLevels[keyof typeof LoggerLevels];

export const LoggerLevelName = (type: LoggerLevel) => Object.keys(LoggerLevels)[type];
export const LoggerLevelFromName = (name: keyof typeof LoggerLevels) => LoggerLevels[name];
export const LoggerLevelFromString = (name: string) => LoggerLevels[name];
