// Original file: services/groups.proto

import type { GroupRequest as _groups_GroupRequest, GroupRequest__Output as _groups_GroupRequest__Output } from './GroupRequest';
import type { StateAccount as _accounts_StateAccount, StateAccount__Output as _accounts_StateAccount__Output } from '../accounts/StateAccount';

export interface GroupRequestFilter {
  'group'?: (_groups_GroupRequest | null);
  'includeAccounts'?: (boolean);
  'includeZones'?: (boolean);
  'includePartitions'?: (boolean);
  'includeUsers'?: (boolean);
  'includeContacts'?: (boolean);
  'includePanel'?: (boolean);
  'includeSecurity'?: (boolean);
  'includeGeneralData'?: (boolean);
  'includeDeviceZone'?: (boolean);
  'includeEmail'?: (boolean);
  'includeSchedule'?: (boolean);
  'state'?: (_accounts_StateAccount);
}

export interface GroupRequestFilter__Output {
  'group'?: (_groups_GroupRequest__Output);
  'includeAccounts'?: (boolean);
  'includeZones'?: (boolean);
  'includePartitions'?: (boolean);
  'includeUsers'?: (boolean);
  'includeContacts'?: (boolean);
  'includePanel'?: (boolean);
  'includeSecurity'?: (boolean);
  'includeGeneralData'?: (boolean);
  'includeDeviceZone'?: (boolean);
  'includeEmail'?: (boolean);
  'includeSchedule'?: (boolean);
  'state'?: (_accounts_StateAccount__Output);
}
