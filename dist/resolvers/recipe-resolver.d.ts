/// <reference types="mongoose" />
import { ObjectId } from "mongodb";
import { Recipe } from "../entities/recipe";
import { User } from "../entities/user";
import { RecipeInput } from "./types/recipe-input";
import { RateInput } from "./types/rate-input";
import { Context } from "../app";
export declare class RecipeResolver {
    recipe(recipeId: ObjectId): import("mongoose").DocumentQuery<import("typegoose").InstanceType<Recipe>, import("typegoose").InstanceType<Recipe>, {}>;
    recipes(): Promise<Recipe[]>;
    addRecipe(recipeInput: RecipeInput, { user }: Context): Promise<Recipe>;
    rate(rateInput: RateInput, { user }: Context): Promise<Recipe>;
    author(recipe: Recipe): Promise<User>;
}
