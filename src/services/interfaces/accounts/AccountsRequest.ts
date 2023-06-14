// Original file: services/accounts.proto

import type { StateAccount as _accounts_StateAccount, StateAccount__Output as _accounts_StateAccount__Output } from './StateAccount';

export interface AccountsRequest {
  'accounts'?: (number)[];
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

export interface AccountsRequest__Output {
  'accounts'?: (number)[];
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
