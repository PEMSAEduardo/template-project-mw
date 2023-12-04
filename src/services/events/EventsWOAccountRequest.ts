// Original file: src/services/events.proto

import type { FilterEvents as _events_FilterEvents, FilterEvents__Output as _events_FilterEvents__Output } from '../events/FilterEvents';
import type { Order as _events_Order, Order__Output as _events_Order__Output } from '../events/Order';

export interface EventsWOAccountRequest {
  'dateStart'?: (string);
  'dateEnd'?: (string);
  'startQuery'?: (string);
  'endQuery'?: (string);
  'filterIsExclude'?: (boolean);
  'filters'?: (_events_FilterEvents)[];
  'order'?: (_events_Order);
}

export interface EventsWOAccountRequest__Output {
  'dateStart'?: (string);
  'dateEnd'?: (string);
  'startQuery'?: (string);
  'endQuery'?: (string);
  'filterIsExclude'?: (boolean);
  'filters'?: (_events_FilterEvents__Output)[];
  'order'?: (_events_Order__Output);
}
