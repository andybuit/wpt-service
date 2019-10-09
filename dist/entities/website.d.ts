/// <reference types="mongoose" />
import { Typegoose } from "typegoose";
import { ObjectId } from "mongodb";
import { Rule } from "./rule";
export declare class Website extends Typegoose {
    readonly _id: ObjectId;
    url: string;
    rules: Rule[];
}
export declare const WebsiteModel: import("mongoose").Model<import("typegoose").InstanceType<Website>, {}> & Website & typeof Website;
