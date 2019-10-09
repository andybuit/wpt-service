import { Recipe } from "../../entities/recipe";
export declare class RecipeInput implements Partial<Recipe> {
    title: string;
    description?: string;
}
