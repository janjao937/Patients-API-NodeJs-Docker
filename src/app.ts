import express, { Application } from "express";
import ip from "ip";
import cors from "cors";
import { Code } from "./enum/code.enum";
import { HttpResponse } from "./domain/response";
import { Status } from "./enum/status.enum";

export class App {

    private readonly app: Application;
    private readonly APPLICATION_RUNNING = `application is running on:`;
    private readonly ROUTE_NOT_FOUND = "Route does not exit on this server";

    constructor(private readonly port: (string | number) = process.env.SERVER_PORT || 3000) {
        this.app = express();
        this.middleware();
        this.routes();
    }

    listen(): void {
        this.app.listen(this.port);
        console.log(`${this.APPLICATION_RUNNING} ${ip.address()}:${this.port}`);
    }
    middleware():void{
        this.app.use(cors({origin:"*"}));
        this.app.use(express.json());
    }
    routes():void {
        this.app.use("/patiens",(req,res)=>{});
        this.app.get("/",(req,res) => {res.status(Code.OK).send(new HttpResponse(Code.OK,Status.OK,"Welcome to Patients API"))});
        this.app.all("*",(req,res) => {res.status(Code.NOT_FOUND).send(new HttpResponse(Code.NOT_FOUND,Status.NOT_FOUND,this.ROUTE_NOT_FOUND))});
    }
}