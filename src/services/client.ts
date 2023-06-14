import path from 'path'
import { loadPackageDefinition, credentials } from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from './interfaces/main';
import { DbServiceClient } from './interfaces/db/DbService';


export class Client {
    private FILES = [
        './main.proto',
    ];
    private grpcObj: ProtoGrpcType;
    private client: DbServiceClient;

    constructor(address: string) {
        const packageDefinition = protoLoader.loadSync(this.FILES.map(file => path.resolve(__dirname, file)));
        this.grpcObj = loadPackageDefinition(packageDefinition) as unknown as ProtoGrpcType;
        
        
    
        this.client = new this.grpcObj.db.DbService(address, credentials.createInsecure(), {
            'grpc.max_receive_message_length': 512 * 1024 * 1024,
        });
    }
    
    get getClient(){
        return this.client;
    }
}
