// Original file: services/events.proto

export const TypeCode = {
  Evento: 2,
  Alarma: 1,
} as const;

export type TypeCode =
  | 'Evento'
  | 2
  | 'Alarma'
  | 1

export type TypeCode__Output = typeof TypeCode[keyof typeof TypeCode]
