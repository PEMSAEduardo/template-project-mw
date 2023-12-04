// Original file: src/services/events.proto

import type { TypeCode as _events_TypeCode, TypeCode__Output as _events_TypeCode__Output } from '../events/TypeCode';

export interface FilterEvents {
  'code'?: (string);
  'type'?: (_events_TypeCode);
}

export interface FilterEvents__Output {
  'code'?: (string);
  'type'?: (_events_TypeCode__Output);
}
