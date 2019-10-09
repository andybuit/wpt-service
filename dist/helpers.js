"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const recipe_1 = require("./entities/recipe");
const user_1 = require("./entities/user");
async function seedDatabase() {
    const defaultUser = await new user_1.UserModel({
        email: "test@github.com",
        nickname: "19majkel94",
        password: "s3cr3tp4ssw0rd"
    }).save();
    await recipe_1.RecipeModel.create([
        {
            title: "Recipe 1",
            description: "Desc 1",
            author: defaultUser._id,
            ratings: [
                { value: 2, user: defaultUser._id },
                { value: 4, user: defaultUser._id },
                { value: 5, user: defaultUser._id },
                { value: 3, user: defaultUser._id },
                { value: 4, user: defaultUser._id }
            ]
        },
        {
            title: "Recipe 2",
            author: defaultUser._id,
            ratings: [
                { value: 2, user: defaultUser },
                { value: 4, user: defaultUser }
            ]
        }
    ]);
    return {
        defaultUser
    };
}
exports.seedDatabase = seedDatabase;
//# sourceMappingURL=helpers.js.map