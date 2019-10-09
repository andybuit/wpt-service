import { User } from "./entities/user";
export declare function seedDatabase(): Promise<{
    defaultUser: import("typegoose").InstanceType<User>;
}>;
