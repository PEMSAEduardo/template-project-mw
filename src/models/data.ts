import { Account__Output } from "../services/interfaces/accounts/Account";
import { AccountRequest } from "../services/interfaces/accounts/AccountRequest";
import { AccountsRequest } from "../services/interfaces/accounts/AccountsRequest";
import { AccountsResponse__Output } from "../services/interfaces/accounts/AccountsResponse";
import { DbServiceClient } from "../services/interfaces/db/DbService";
import { AccountsEventResponse__Output } from "../services/interfaces/events/AccountsEventResponse";
import { AccountsLastEventResponse__Output } from "../services/interfaces/events/AccountsLastEventResponse";
import { EventWOAccountResponse__Output } from "../services/interfaces/events/EventWOAccountResponse";
import { EventsGrouprequest } from "../services/interfaces/events/EventsGrouprequest";
import { EventsRequest } from "../services/interfaces/events/EventsRequest";
import { EventsWOAccountRequest } from "../services/interfaces/events/EventsWOAccountRequest";
import { GroupsEventsResponse__Output } from "../services/interfaces/events/GroupsEventsResponse";
import { GroupsLastEventResponse__Output } from "../services/interfaces/events/GroupsLastEventResponse";
import { LastEventGroupRequest } from "../services/interfaces/events/LastEventGroupRequest";
import { LastEventRequest } from "../services/interfaces/events/LastEventRequest";
import { Group__Output } from "../services/interfaces/groups/Group";
import { GroupRequestFilter } from "../services/interfaces/groups/GroupRequestFilter";
import { ResponseGroups__Output } from "../services/interfaces/groups/ResponseGroups";
import { SearchRequestGroup } from "../services/interfaces/groups/SearchRequestGroup";

export class Data{

    private client: DbServiceClient;

    constructor(client: DbServiceClient){
        this.client = client;
    }

    searchGroups(query: SearchRequestGroup){
        return new Promise<ResponseGroups__Output>((resolve, reject) => {
            this.client.searchGroups(query, (err, data) => {
                if (err) return reject(this.hanldeError(err));
                return resolve(data!);
            })
        });
    }

    searchAccounts(query: AccountsRequest) {
        return new Promise<AccountsResponse__Output>((resolve, reject) => {
            this.client.searchAccounts(query, (err, data) => {
                if (err) return reject(this.hanldeError(err));
                return resolve(data!);
            })
        });
    }

    findOneAccount(query: AccountRequest){
        return new Promise<Account__Output>((resolve, reject) => {
            this.client.findOneAccount(query, (err, data) => {
                if (err) return reject(this.hanldeError(err));
                return resolve(data!);
            })
        });
    }

    findOneGroup(query: GroupRequestFilter) {
        return new Promise<Group__Output>((resolve, reject) => {
            this.client.findOneGroup(query, (err, data) => {
                if (err) return reject(this.hanldeError(err));
                return resolve(data!);
            })
        });
    }

    getEventsFromGroup(query: EventsGrouprequest) {
        return new Promise<GroupsEventsResponse__Output>((resolve, reject) => {
            this.client.getEventsFromGroup(query, (err, data) => {
                if (err) return reject(this.hanldeError(err));
                return resolve(data!);
            })
        });
    }

    getEventsWithAccounts(query: EventsRequest) {
        return new Promise<AccountsEventResponse__Output>((resolve, reject) => {
            this.client.getEventsWithAccounts(query, (err, data) => {
                if (err) return reject(this.hanldeError(err));
                return resolve(data!);
            })
        });
    }

    getEventsWithOutAccounts(query: EventsWOAccountRequest) {
        return new Promise<EventWOAccountResponse__Output>((resolve, reject) => {
            this.client.getEventsWithOutAccounts(query, (err, data) => {
                if (err) return reject(this.hanldeError(err));
                return resolve(data!);
            })
        });
    }

    getLasEventFromAccount(query: LastEventRequest) {
        return new Promise<AccountsLastEventResponse__Output>((resolve, reject) => {
            this.client.getLasEventFromAccount(query, (err, data) => {
                if (err) return reject(this.hanldeError(err));
                return resolve(data!);
            })
        });
    }

    getLastEventFromGroup(query: LastEventGroupRequest) {
        return new Promise<GroupsLastEventResponse__Output>((resolve, reject) => {
            this.client.getLastEventFromGroup(query, (err, data) => {
                if (err) return reject(this.hanldeError(err));
                return resolve(data!);
            })
        });
    }

    private hanldeError(error: any){
        if (error.details) {
            return error.details;
        }
        console.error(error);
        return 'Error no controlado verifica los logs';
    }

}