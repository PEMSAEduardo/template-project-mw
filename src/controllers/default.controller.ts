import { Request, Response } from "express";
import { DbServiceClient } from "../services/interfaces/db/DbService";
import { Data } from "../models/data";

export class DefaultController extends Data{
    

    constructor(client: DbServiceClient){
        super(client);
    }

    async test(req: Request, res: Response){
        try {
            const data = await this.searchGroups({});
            res.json({
                ...data
            })
        } catch (error) {
            res.json({
                msg: 'err'
            })
        }
    }
}