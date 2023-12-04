import { Router } from "express"

import { DefaultController } from "../controllers/default.controller";
import { DbServiceClient } from "../services/db/DbService";

export class DefaultRouter {
    private router:Router;
    private controller:DefaultController;

    // private client: DbServiceClient;
    
    
    // * Si la ruta utiliza algun servicio para obtener información, enviar el client
    constructor(client: DbServiceClient){
        this.router = Router();
        this.controller = new DefaultController(client);
        this.setupRoutes();
    }

    private setupRoutes(){
        this.router.get('/', this.controller.test.bind(this.controller));
    }

    public getRouter(){
        return this.router;
    }
}