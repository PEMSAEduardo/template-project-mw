// Original file: src/services/events.proto

export const Order = {
  ASC: 1,
  DESC: 2,
} as const;

export type Order =
  | 'ASC'
  | 1
  | 'DESC'
  | 2

export type Order__Output = typeof Order[keyof typeof Order]
