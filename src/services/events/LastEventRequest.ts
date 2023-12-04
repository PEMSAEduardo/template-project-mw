// Original file: src/services/events.proto

import type { StateAccount as _accounts_StateAccount, StateAccount__Output as _accounts_StateAccount__Output } from '../accounts/StateAccount';
import type { FilterEvents as _events_FilterEvents, FilterEvents__Output as _events_FilterEvents__Output } from '../events/FilterEvents';

export interface LastEventRequest {
  'accounts'?: (number)[];
  'state'?: (_accounts_StateAccount);
  'filterIsExclude'?: (boolean);
  'separatePartitions'?: (boolean);
  'filters'?: (_events_FilterEvents)[];
  'dateStart'?: (string);
  'dateEnd'?: (string);
  'startQuery'?: (string);
  'endQuery'?: (string);
}

export interface LastEventRequest__Output {
  'accounts'?: (number)[];
  'state'?: (_accounts_StateAccount__Output);
  'filterIsExclude'?: (boolean);
  'separatePartitions'?: (boolean);
  'filters'?: (_events_FilterEvents__Output)[];
  'dateStart'?: (string);
  'dateEnd'?: (string);
  'startQuery'?: (string);
  'endQuery'?: (string);
}
