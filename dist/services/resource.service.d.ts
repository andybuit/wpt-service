import { Typegoose, ModelType } from "typegoose";
export declare class ResourceServiceFactory {
    create<T extends Typegoose>(RsourceModeCls: ModelType<T>): ResourceService<T>;
}
export declare class ResourceService<T extends Typegoose> {
    protected RsourceModeCls: ModelType<T>;
    constructor(RsourceModeCls: ModelType<T>);
    getOne(id: string): Promise<T | undefined>;
    getAll(skip?: number, limit?: number): Promise<T[]>;
    save(r: T): Promise<T>;
}
