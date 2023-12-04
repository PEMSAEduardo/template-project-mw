import express, {Application} from 'express';
import cors from 'cors';
// import { Client } from '../services/client';
import { DefaultRouter } from '../routes/defaul.route';
import config from '../config/config';
import { Client } from '../services/client';

export default class Server {
    private app: Application;
    private port: string;
    private client: Client;
    
    private apiPaths = {
        default: '/api/default'
    }   

    constructor(){
        this.app = express();
        this.port = config.port;
        this.client = new Client(config.service);
        this.middlewares();
        this.testClient();
        this.routes();
    }

    private middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
    }

    private testClient(){
        const deadline = new Date()
        deadline.setSeconds(deadline.getSeconds() + 5);
        this.client.getClient.waitForReady(deadline, (err) => {
            if(err) {
                console.log(err);
                
                throw 'Error to connect the client';
            }
            console.log('Client connected');
        });
    }

    private routes(){
        const defaultRouter = new DefaultRouter(this.client.getClient);
        this.app.use(this.apiPaths.default, defaultRouter.getRouter());
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`APP Runing in porting ${this.port}`);
        });
    }


}