// Original file: src/services/events.proto

import type { GroupRequest as _groups_GroupRequest, GroupRequest__Output as _groups_GroupRequest__Output } from '../groups/GroupRequest';
import type { StateAccount as _accounts_StateAccount, StateAccount__Output as _accounts_StateAccount__Output } from '../accounts/StateAccount';
import type { FilterEvents as _events_FilterEvents, FilterEvents__Output as _events_FilterEvents__Output } from '../events/FilterEvents';
import type { Order as _events_Order, Order__Output as _events_Order__Output } from '../events/Order';

export interface EventsGrouprequest {
  'groups'?: (_groups_GroupRequest)[];
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

export interface EventsGrouprequest__Output {
  'groups'?: (_groups_GroupRequest__Output)[];
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
