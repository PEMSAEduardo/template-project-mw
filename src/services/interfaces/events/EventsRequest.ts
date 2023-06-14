// Original file: services/events.proto

import type { StateAccount as _accounts_StateAccount, StateAccount__Output as _accounts_StateAccount__Output } from '../accounts/StateAccount';
import type { FilterEvents as _events_FilterEvents, FilterEvents__Output as _events_FilterEvents__Output } from './FilterEvents';
import type { Order as _events_Order, Order__Output as _events_Order__Output } from './Order';

export interface EventsRequest {
  'accounts'?: (number)[];
  'state'?: (_accounts_StateAccount);
  'dateStart'?: (string);
  'dateEnd'?: (string);
  'startQuery'?: (string);
  'endQuery'?: (string);
  'filterIsExclude'?: (boolean);
  'includeScheduled'?: (boolean);
  'includeComments'?: (boolean);
  'separatePartitions'?: (boolean);
  'filters'?: (_events_FilterEvents)[];
  'order'?: (_events_Order);
}

export interface EventsRequest__Output {
  'accounts'?: (number)[];
  'state'?: (_accounts_StateAccount__Output);
  'dateStart'?: (string);
  'dateEnd'?: (string);
  'startQuery'?: (string);
  'endQuery'?: (string);
  'filterIsExclude'?: (boolean);
  'includeScheduled'?: (boolean);
  'includeComments'?: (boolean);
  'separatePartitions'?: (boolean);
  'filters'?: (_events_FilterEvents__Output)[];
  'order'?: (_events_Order__Output);
}
