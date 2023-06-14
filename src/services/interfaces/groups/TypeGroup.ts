// Original file: services/groups.proto

export const TypeGroup = {
  Grupo: 2,
  Dealer: 3,
} as const;

export type TypeGroup =
  | 'Grupo'
  | 2
  | 'Dealer'
  | 3

export type TypeGroup__Output = typeof TypeGroup[keyof typeof TypeGroup]
