import { Ref } from "typegoose";
import { User } from "./user";
export declare class Rate {
    value: number;
    date: Date;
    user: Ref<User>;
}
