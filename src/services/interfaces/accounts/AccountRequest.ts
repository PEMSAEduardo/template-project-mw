// Original file: services/accounts.proto


export interface AccountRequest {
  'account'?: (number);
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
}

export interface AccountRequest__Output {
  'account'?: (number);
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
}
