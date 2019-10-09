/// <reference types="mongoose" />
import { Typegoose } from "typegoose";
import { ObjectId } from "mongodb";
export declare class User extends Typegoose {
    readonly _id: ObjectId;
    email: string;
    nickname?: string;
    password: string;
    emailVerified?: boolean;
}
export declare const UserModel: import("mongoose").Model<import("typegoose").InstanceType<User>, {}> & User & typeof User;
