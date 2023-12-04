import { Request, Response } from "express";

import { Data } from "../models/data";
import { DbServiceClient } from "../services/db/DbService";

export class DefaultController extends Data {


    constructor(client: DbServiceClient) {
        super(client);
    }

    async test(req: Request, res: Response) {
        try {
            const data = await this.getCatalogueAlarms({});
            // const data = await this.searchGroups({
            //     groups: [{ id: 98, type: "Grupo" }],
            //     includeAccounts: true,
            //     includeContacts: true,
            //     includeDeviceZone: true,
            //     includeEmail: true,
            //     includeGeneralData: true,
            //     includePanel: true,
            //     includePartitions: true,
            //     includeSchedule: true,
            //     includeSecurity: true,
            //     includeUsers: true,
            //     includeZones: true,
            // });
            res.json({
                ...data
            })
        } catch (error) {
            console.log(error);

            res.json({
                msg: 'err'
            })
        }
    }
}