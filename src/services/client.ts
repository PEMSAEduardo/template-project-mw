import path from 'path'
import { loadPackageDefinition, credentials } from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from './interfaces/main';
import { DbServiceClient } from './interfaces/db/DbService';
import {readFileSync} from 'fs'


export class Client {
    private FILES = [
        './main.proto',
    ];
    private grpcObj: ProtoGrpcType;
    private client: DbServiceClient;

    constructor(address: string) {
        
        const packageDefinition = protoLoader.loadSync(this.FILES.map(file => path.resolve(__dirname, file)));
        this.grpcObj = loadPackageDefinition(packageDefinition) as unknown as ProtoGrpcType;
        
        const credentialsToConnect = credentials.createSsl(
            readFileSync(path.join(__dirname,'../certs/ca.crt')),
            readFileSync(path.join(__dirname,'../certs/client.key')),
            readFileSync(path.join(__dirname,'../certs/client.crt'))
        );
        

    
        this.client = new this.grpcObj.db.DbService(address, credentialsToConnect);
    }
    
    get getClient(){
        return this.client;
    }
}
