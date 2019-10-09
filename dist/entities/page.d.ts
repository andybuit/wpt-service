/// <reference types="mongoose" />
import { Typegoose } from "typegoose";
import { ObjectId } from "mongodb";
import { Rule } from "./rule";
export declare class Page extends Typegoose {
    readonly _id: ObjectId;
    url: string;
    rules: Rule[];
}
export declare const PageModel: import("mongoose").Model<import("typegoose").InstanceType<Page>, {}> & Page & typeof Page;
