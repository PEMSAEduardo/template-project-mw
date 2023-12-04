// Original file: src/services/main.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Account as _accounts_Account, Account__Output as _accounts_Account__Output } from '../accounts/Account';
import type { AccountRequest as _accounts_AccountRequest, AccountRequest__Output as _accounts_AccountRequest__Output } from '../accounts/AccountRequest';
import type { AccountsEventResponse as _events_AccountsEventResponse, AccountsEventResponse__Output as _events_AccountsEventResponse__Output } from '../events/AccountsEventResponse';
import type { AccountsLastEventResponse as _events_AccountsLastEventResponse, AccountsLastEventResponse__Output as _events_AccountsLastEventResponse__Output } from '../events/AccountsLastEventResponse';
import type { AccountsRequest as _accounts_AccountsRequest, AccountsRequest__Output as _accounts_AccountsRequest__Output } from '../accounts/AccountsRequest';
import type { AccountsResponse as _accounts_AccountsResponse, AccountsResponse__Output as _accounts_AccountsResponse__Output } from '../accounts/AccountsResponse';
import type { EmptyRequest as _db_EmptyRequest, EmptyRequest__Output as _db_EmptyRequest__Output } from '../db/EmptyRequest';
import type { EventWOAccountResponse as _events_EventWOAccountResponse, EventWOAccountResponse__Output as _events_EventWOAccountResponse__Output } from '../events/EventWOAccountResponse';
import type { EventsGrouprequest as _events_EventsGrouprequest, EventsGrouprequest__Output as _events_EventsGrouprequest__Output } from '../events/EventsGrouprequest';
import type { EventsRequest as _events_EventsRequest, EventsRequest__Output as _events_EventsRequest__Output } from '../events/EventsRequest';
import type { EventsWOAccountRequest as _events_EventsWOAccountRequest, EventsWOAccountRequest__Output as _events_EventsWOAccountRequest__Output } from '../events/EventsWOAccountRequest';
import type { Group as _groups_Group, Group__Output as _groups_Group__Output } from '../groups/Group';
import type { GroupRequestFilter as _groups_GroupRequestFilter, GroupRequestFilter__Output as _groups_GroupRequestFilter__Output } from '../groups/GroupRequestFilter';
import type { GroupsEventsResponse as _events_GroupsEventsResponse, GroupsEventsResponse__Output as _events_GroupsEventsResponse__Output } from '../events/GroupsEventsResponse';
import type { GroupsLastEventResponse as _events_GroupsLastEventResponse, GroupsLastEventResponse__Output as _events_GroupsLastEventResponse__Output } from '../events/GroupsLastEventResponse';
import type { LastEventGroupRequest as _events_LastEventGroupRequest, LastEventGroupRequest__Output as _events_LastEventGroupRequest__Output } from '../events/LastEventGroupRequest';
import type { LastEventRequest as _events_LastEventRequest, LastEventRequest__Output as _events_LastEventRequest__Output } from '../events/LastEventRequest';
import type { ResponseAlarms as _catalogue_ResponseAlarms, ResponseAlarms__Output as _catalogue_ResponseAlarms__Output } from '../catalogue/ResponseAlarms';
import type { ResponseEvents as _catalogue_ResponseEvents, ResponseEvents__Output as _catalogue_ResponseEvents__Output } from '../catalogue/ResponseEvents';
import type { ResponseGroups as _groups_ResponseGroups, ResponseGroups__Output as _groups_ResponseGroups__Output } from '../groups/ResponseGroups';
import type { ResponseTest as _db_ResponseTest, ResponseTest__Output as _db_ResponseTest__Output } from '../db/ResponseTest';
import type { SearchRequestGroup as _groups_SearchRequestGroup, SearchRequestGroup__Output as _groups_SearchRequestGroup__Output } from '../groups/SearchRequestGroup';

export interface DbServiceClient extends grpc.Client {
  FindOneAccount(argument: _accounts_AccountRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_accounts_Account__Output>): grpc.ClientUnaryCall;
  FindOneAccount(argument: _accounts_AccountRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_accounts_Account__Output>): grpc.ClientUnaryCall;
  FindOneAccount(argument: _accounts_AccountRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_accounts_Account__Output>): grpc.ClientUnaryCall;
  FindOneAccount(argument: _accounts_AccountRequest, callback: grpc.requestCallback<_accounts_Account__Output>): grpc.ClientUnaryCall;
  findOneAccount(argument: _accounts_AccountRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_accounts_Account__Output>): grpc.ClientUnaryCall;
  findOneAccount(argument: _accounts_AccountRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_accounts_Account__Output>): grpc.ClientUnaryCall;
  findOneAccount(argument: _accounts_AccountRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_accounts_Account__Output>): grpc.ClientUnaryCall;
  findOneAccount(argument: _accounts_AccountRequest, callback: grpc.requestCallback<_accounts_Account__Output>): grpc.ClientUnaryCall;
  
  FindOneGroup(argument: _groups_GroupRequestFilter, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_groups_Group__Output>): grpc.ClientUnaryCall;
  FindOneGroup(argument: _groups_GroupRequestFilter, metadata: grpc.Metadata, callback: grpc.requestCallback<_groups_Group__Output>): grpc.ClientUnaryCall;
  FindOneGroup(argument: _groups_GroupRequestFilter, options: grpc.CallOptions, callback: grpc.requestCallback<_groups_Group__Output>): grpc.ClientUnaryCall;
  FindOneGroup(argument: _groups_GroupRequestFilter, callback: grpc.requestCallback<_groups_Group__Output>): grpc.ClientUnaryCall;
  findOneGroup(argument: _groups_GroupRequestFilter, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_groups_Group__Output>): grpc.ClientUnaryCall;
  findOneGroup(argument: _groups_GroupRequestFilter, metadata: grpc.Metadata, callback: grpc.requestCallback<_groups_Group__Output>): grpc.ClientUnaryCall;
  findOneGroup(argument: _groups_GroupRequestFilter, options: grpc.CallOptions, callback: grpc.requestCallback<_groups_Group__Output>): grpc.ClientUnaryCall;
  findOneGroup(argument: _groups_GroupRequestFilter, callback: grpc.requestCallback<_groups_Group__Output>): grpc.ClientUnaryCall;
  
  GetCatalogueAlarms(argument: _db_EmptyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_catalogue_ResponseAlarms__Output>): grpc.ClientUnaryCall;
  GetCatalogueAlarms(argument: _db_EmptyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_catalogue_ResponseAlarms__Output>): grpc.ClientUnaryCall;
  GetCatalogueAlarms(argument: _db_EmptyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_catalogue_ResponseAlarms__Output>): grpc.ClientUnaryCall;
  GetCatalogueAlarms(argument: _db_EmptyRequest, callback: grpc.requestCallback<_catalogue_ResponseAlarms__Output>): grpc.ClientUnaryCall;
  getCatalogueAlarms(argument: _db_EmptyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_catalogue_ResponseAlarms__Output>): grpc.ClientUnaryCall;
  getCatalogueAlarms(argument: _db_EmptyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_catalogue_ResponseAlarms__Output>): grpc.ClientUnaryCall;
  getCatalogueAlarms(argument: _db_EmptyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_catalogue_ResponseAlarms__Output>): grpc.ClientUnaryCall;
  getCatalogueAlarms(argument: _db_EmptyRequest, callback: grpc.requestCallback<_catalogue_ResponseAlarms__Output>): grpc.ClientUnaryCall;
  
  GetCatalogueEvents(argument: _db_EmptyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_catalogue_ResponseEvents__Output>): grpc.ClientUnaryCall;
  GetCatalogueEvents(argument: _db_EmptyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_catalogue_ResponseEvents__Output>): grpc.ClientUnaryCall;
  GetCatalogueEvents(argument: _db_EmptyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_catalogue_ResponseEvents__Output>): grpc.ClientUnaryCall;
  GetCatalogueEvents(argument: _db_EmptyRequest, callback: grpc.requestCallback<_catalogue_ResponseEvents__Output>): grpc.ClientUnaryCall;
  getCatalogueEvents(argument: _db_EmptyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_catalogue_ResponseEvents__Output>): grpc.ClientUnaryCall;
  getCatalogueEvents(argument: _db_EmptyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_catalogue_ResponseEvents__Output>): grpc.ClientUnaryCall;
  getCatalogueEvents(argument: _db_EmptyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_catalogue_ResponseEvents__Output>): grpc.ClientUnaryCall;
  getCatalogueEvents(argument: _db_EmptyRequest, callback: grpc.requestCallback<_catalogue_ResponseEvents__Output>): grpc.ClientUnaryCall;
  
  GetEventsFromGroup(argument: _events_EventsGrouprequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_events_GroupsEventsResponse__Output>): grpc.ClientUnaryCall;
  GetEventsFromGroup(argument: _events_EventsGrouprequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_events_GroupsEventsResponse__Output>): grpc.ClientUnaryCall;
  GetEventsFromGroup(argument: _events_EventsGrouprequest, options: grpc.CallOptions, callback: grpc.requestCallback<_events_GroupsEventsResponse__Output>): grpc.ClientUnaryCall;
  GetEventsFromGroup(argument: _events_EventsGrouprequest, callback: grpc.requestCallback<_events_GroupsEventsResponse__Output>): grpc.ClientUnaryCall;
  getEventsFromGroup(argument: _events_EventsGrouprequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_events_GroupsEventsResponse__Output>): grpc.ClientUnaryCall;
  getEventsFromGroup(argument: _events_EventsGrouprequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_events_GroupsEventsResponse__Output>): grpc.ClientUnaryCall;
  getEventsFromGroup(argument: _events_EventsGrouprequest, options: grpc.CallOptions, callback: grpc.requestCallback<_events_GroupsEventsResponse__Output>): grpc.ClientUnaryCall;
  getEventsFromGroup(argument: _events_EventsGrouprequest, callback: grpc.requestCallback<_events_GroupsEventsResponse__Output>): grpc.ClientUnaryCall;
  
  GetEventsWithAccounts(argument: _events_EventsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_events_AccountsEventResponse__Output>): grpc.ClientUnaryCall;
  GetEventsWithAccounts(argument: _events_EventsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_events_AccountsEventResponse__Output>): grpc.ClientUnaryCall;
  GetEventsWithAccounts(argument: _events_EventsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_events_AccountsEventResponse__Output>): grpc.ClientUnaryCall;
  GetEventsWithAccounts(argument: _events_EventsRequest, callback: grpc.requestCallback<_events_AccountsEventResponse__Output>): grpc.ClientUnaryCall;
  getEventsWithAccounts(argument: _events_EventsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_events_AccountsEventResponse__Output>): grpc.ClientUnaryCall;
  getEventsWithAccounts(argument: _events_EventsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_events_AccountsEventResponse__Output>): grpc.ClientUnaryCall;
  getEventsWithAccounts(argument: _events_EventsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_events_AccountsEventResponse__Output>): grpc.ClientUnaryCall;
  getEventsWithAccounts(argument: _events_EventsRequest, callback: grpc.requestCallback<_events_AccountsEventResponse__Output>): grpc.ClientUnaryCall;
  
  GetEventsWithOutAccounts(argument: _events_EventsWOAccountRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_events_EventWOAccountResponse__Output>): grpc.ClientUnaryCall;
  GetEventsWithOutAccounts(argument: _events_EventsWOAccountRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_events_EventWOAccountResponse__Output>): grpc.ClientUnaryCall;
  GetEventsWithOutAccounts(argument: _events_EventsWOAccountRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_events_EventWOAccountResponse__Output>): grpc.ClientUnaryCall;
  GetEventsWithOutAccounts(argument: _events_EventsWOAccountRequest, callback: grpc.requestCallback<_events_EventWOAccountResponse__Output>): grpc.ClientUnaryCall;
  getEventsWithOutAccounts(argument: _events_EventsWOAccountRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_events_EventWOAccountResponse__Output>): grpc.ClientUnaryCall;
  getEventsWithOutAccounts(argument: _events_EventsWOAccountRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_events_EventWOAccountResponse__Output>): grpc.ClientUnaryCall;
  getEventsWithOutAccounts(argument: _events_EventsWOAccountRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_events_EventWOAccountResponse__Output>): grpc.ClientUnaryCall;
  getEventsWithOutAccounts(argument: _events_EventsWOAccountRequest, callback: grpc.requestCallback<_events_EventWOAccountResponse__Output>): grpc.ClientUnaryCall;
  
  GetLasEventFromAccount(argument: _events_LastEventRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_events_AccountsLastEventResponse__Output>): grpc.ClientUnaryCall;
  GetLasEventFromAccount(argument: _events_LastEventRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_events_AccountsLastEventResponse__Output>): grpc.ClientUnaryCall;
  GetLasEventFromAccount(argument: _events_LastEventRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_events_AccountsLastEventResponse__Output>): grpc.ClientUnaryCall;
  GetLasEventFromAccount(argument: _events_LastEventRequest, callback: grpc.requestCallback<_events_AccountsLastEventResponse__Output>): grpc.ClientUnaryCall;
  getLasEventFromAccount(argument: _events_LastEventRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_events_AccountsLastEventResponse__Output>): grpc.ClientUnaryCall;
  getLasEventFromAccount(argument: _events_LastEventRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_events_AccountsLastEventResponse__Output>): grpc.ClientUnaryCall;
  getLasEventFromAccount(argument: _events_LastEventRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_events_AccountsLastEventResponse__Output>): grpc.ClientUnaryCall;
  getLasEventFromAccount(argument: _events_LastEventRequest, callback: grpc.requestCallback<_events_AccountsLastEventResponse__Output>): grpc.ClientUnaryCall;
  
  GetLastEventFromGroup(argument: _events_LastEventGroupRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_events_GroupsLastEventResponse__Output>): grpc.ClientUnaryCall;
  GetLastEventFromGroup(argument: _events_LastEventGroupRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_events_GroupsLastEventResponse__Output>): grpc.ClientUnaryCall;
  GetLastEventFromGroup(argument: _events_LastEventGroupRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_events_GroupsLastEventResponse__Output>): grpc.ClientUnaryCall;
  GetLastEventFromGroup(argument: _events_LastEventGroupRequest, callback: grpc.requestCallback<_events_GroupsLastEventResponse__Output>): grpc.ClientUnaryCall;
  getLastEventFromGroup(argument: _events_LastEventGroupRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_events_GroupsLastEventResponse__Output>): grpc.ClientUnaryCall;
  getLastEventFromGroup(argument: _events_LastEventGroupRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_events_GroupsLastEventResponse__Output>): grpc.ClientUnaryCall;
  getLastEventFromGroup(argument: _events_LastEventGroupRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_events_GroupsLastEventResponse__Output>): grpc.ClientUnaryCall;
  getLastEventFromGroup(argument: _events_LastEventGroupRequest, callback: grpc.requestCallback<_events_GroupsLastEventResponse__Output>): grpc.ClientUnaryCall;
  
  SearchAccounts(argument: _accounts_AccountsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_accounts_AccountsResponse__Output>): grpc.ClientUnaryCall;
  SearchAccounts(argument: _accounts_AccountsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_accounts_AccountsResponse__Output>): grpc.ClientUnaryCall;
  SearchAccounts(argument: _accounts_AccountsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_accounts_AccountsResponse__Output>): grpc.ClientUnaryCall;
  SearchAccounts(argument: _accounts_AccountsRequest, callback: grpc.requestCallback<_accounts_AccountsResponse__Output>): grpc.ClientUnaryCall;
  searchAccounts(argument: _accounts_AccountsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_accounts_AccountsResponse__Output>): grpc.ClientUnaryCall;
  searchAccounts(argument: _accounts_AccountsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_accounts_AccountsResponse__Output>): grpc.ClientUnaryCall;
  searchAccounts(argument: _accounts_AccountsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_accounts_AccountsResponse__Output>): grpc.ClientUnaryCall;
  searchAccounts(argument: _accounts_AccountsRequest, callback: grpc.requestCallback<_accounts_AccountsResponse__Output>): grpc.ClientUnaryCall;
  
  SearchGroups(argument: _groups_SearchRequestGroup, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_groups_ResponseGroups__Output>): grpc.ClientUnaryCall;
  SearchGroups(argument: _groups_SearchRequestGroup, metadata: grpc.Metadata, callback: grpc.requestCallback<_groups_ResponseGroups__Output>): grpc.ClientUnaryCall;
  SearchGroups(argument: _groups_SearchRequestGroup, options: grpc.CallOptions, callback: grpc.requestCallback<_groups_ResponseGroups__Output>): grpc.ClientUnaryCall;
  SearchGroups(argument: _groups_SearchRequestGroup, callback: grpc.requestCallback<_groups_ResponseGroups__Output>): grpc.ClientUnaryCall;
  searchGroups(argument: _groups_SearchRequestGroup, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_groups_ResponseGroups__Output>): grpc.ClientUnaryCall;
  searchGroups(argument: _groups_SearchRequestGroup, metadata: grpc.Metadata, callback: grpc.requestCallback<_groups_ResponseGroups__Output>): grpc.ClientUnaryCall;
  searchGroups(argument: _groups_SearchRequestGroup, options: grpc.CallOptions, callback: grpc.requestCallback<_groups_ResponseGroups__Output>): grpc.ClientUnaryCall;
  searchGroups(argument: _groups_SearchRequestGroup, callback: grpc.requestCallback<_groups_ResponseGroups__Output>): grpc.ClientUnaryCall;
  
  Test(argument: _db_EmptyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_db_ResponseTest__Output>): grpc.ClientUnaryCall;
  Test(argument: _db_EmptyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_db_ResponseTest__Output>): grpc.ClientUnaryCall;
  Test(argument: _db_EmptyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_db_ResponseTest__Output>): grpc.ClientUnaryCall;
  Test(argument: _db_EmptyRequest, callback: grpc.requestCallback<_db_ResponseTest__Output>): grpc.ClientUnaryCall;
  test(argument: _db_EmptyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_db_ResponseTest__Output>): grpc.ClientUnaryCall;
  test(argument: _db_EmptyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_db_ResponseTest__Output>): grpc.ClientUnaryCall;
  test(argument: _db_EmptyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_db_ResponseTest__Output>): grpc.ClientUnaryCall;
  test(argument: _db_EmptyRequest, callback: grpc.requestCallback<_db_ResponseTest__Output>): grpc.ClientUnaryCall;
  
}

export interface DbServiceHandlers extends grpc.UntypedServiceImplementation {
  FindOneAccount: grpc.handleUnaryCall<_accounts_AccountRequest__Output, _accounts_Account>;
  
  FindOneGroup: grpc.handleUnaryCall<_groups_GroupRequestFilter__Output, _groups_Group>;
  
  GetCatalogueAlarms: grpc.handleUnaryCall<_db_EmptyRequest__Output, _catalogue_ResponseAlarms>;
  
  GetCatalogueEvents: grpc.handleUnaryCall<_db_EmptyRequest__Output, _catalogue_ResponseEvents>;
  
  GetEventsFromGroup: grpc.handleUnaryCall<_events_EventsGrouprequest__Output, _events_GroupsEventsResponse>;
  
  GetEventsWithAccounts: grpc.handleUnaryCall<_events_EventsRequest__Output, _events_AccountsEventResponse>;
  
  GetEventsWithOutAccounts: grpc.handleUnaryCall<_events_EventsWOAccountRequest__Output, _events_EventWOAccountResponse>;
  
  GetLasEventFromAccount: grpc.handleUnaryCall<_events_LastEventRequest__Output, _events_AccountsLastEventResponse>;
  
  GetLastEventFromGroup: grpc.handleUnaryCall<_events_LastEventGroupRequest__Output, _events_GroupsLastEventResponse>;
  
  SearchAccounts: grpc.handleUnaryCall<_accounts_AccountsRequest__Output, _accounts_AccountsResponse>;
  
  SearchGroups: grpc.handleUnaryCall<_groups_SearchRequestGroup__Output, _groups_ResponseGroups>;
  
  Test: grpc.handleUnaryCall<_db_EmptyRequest__Output, _db_ResponseTest>;
  
}

export interface DbServiceDefinition extends grpc.ServiceDefinition {
  FindOneAccount: MethodDefinition<_accounts_AccountRequest, _accounts_Account, _accounts_AccountRequest__Output, _accounts_Account__Output>
  FindOneGroup: MethodDefinition<_groups_GroupRequestFilter, _groups_Group, _groups_GroupRequestFilter__Output, _groups_Group__Output>
  GetCatalogueAlarms: MethodDefinition<_db_EmptyRequest, _catalogue_ResponseAlarms, _db_EmptyRequest__Output, _catalogue_ResponseAlarms__Output>
  GetCatalogueEvents: MethodDefinition<_db_EmptyRequest, _catalogue_ResponseEvents, _db_EmptyRequest__Output, _catalogue_ResponseEvents__Output>
  GetEventsFromGroup: MethodDefinition<_events_EventsGrouprequest, _events_GroupsEventsResponse, _events_EventsGrouprequest__Output, _events_GroupsEventsResponse__Output>
  GetEventsWithAccounts: MethodDefinition<_events_EventsRequest, _events_AccountsEventResponse, _events_EventsRequest__Output, _events_AccountsEventResponse__Output>
  GetEventsWithOutAccounts: MethodDefinition<_events_EventsWOAccountRequest, _events_EventWOAccountResponse, _events_EventsWOAccountRequest__Output, _events_EventWOAccountResponse__Output>
  GetLasEventFromAccount: MethodDefinition<_events_LastEventRequest, _events_AccountsLastEventResponse, _events_LastEventRequest__Output, _events_AccountsLastEventResponse__Output>
  GetLastEventFromGroup: MethodDefinition<_events_LastEventGroupRequest, _events_GroupsLastEventResponse, _events_LastEventGroupRequest__Output, _events_GroupsLastEventResponse__Output>
  SearchAccounts: MethodDefinition<_accounts_AccountsRequest, _accounts_AccountsResponse, _accounts_AccountsRequest__Output, _accounts_AccountsResponse__Output>
  SearchGroups: MethodDefinition<_groups_SearchRequestGroup, _groups_ResponseGroups, _groups_SearchRequestGroup__Output, _groups_ResponseGroups__Output>
  Test: MethodDefinition<_db_EmptyRequest, _db_ResponseTest, _db_EmptyRequest__Output, _db_ResponseTest__Output>
}
