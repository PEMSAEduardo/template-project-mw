import { Router } from "express"
import { DbServiceClient } from '../services/interfaces/db/DbService';
import { DefaultController } from "../controllers/default.controller";

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