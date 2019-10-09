import { Rate } from "../entities/rate";
import { User } from "../entities/user";
export declare class RateResolver {
    user(rate: Rate): Promise<User>;
}
