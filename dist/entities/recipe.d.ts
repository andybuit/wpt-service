/// <reference types="mongoose" />
import { Typegoose, Ref } from "typegoose";
import { ObjectId } from "mongodb";
import { Rate } from "./rate";
import { User } from "./user";
export declare class Recipe extends Typegoose {
    readonly _id: ObjectId;
    title: string;
    description?: string;
    ratings: Rate[];
    author: Ref<User>;
}
export declare const RecipeModel: import("mongoose").Model<import("typegoose").InstanceType<Recipe>, {}> & Recipe & typeof Recipe;
