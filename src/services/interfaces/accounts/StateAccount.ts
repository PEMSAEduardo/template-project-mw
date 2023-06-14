// Original file: services/accounts.proto

export const StateAccount = {
  Todas: 0,
  Activas: 1,
  Inactivas: 2,
} as const;

export type StateAccount =
  | 'Todas'
  | 0
  | 'Activas'
  | 1
  | 'Inactivas'
  | 2

export type StateAccount__Output = typeof StateAccount[keyof typeof StateAccount]
