import { Service } from "typedi";
import { Model } from "mongoose";
import { Typegoose, ModelType } from "typegoose";

// we need to use factory as we need separate instance of service for each generic
@Service()
export class ResourceServiceFactory {
  create<T extends Typegoose>(RsourceModeCls: ModelType<T>) {
    return new ResourceService(RsourceModeCls);
  }
}

export class ResourceService<T extends Typegoose> {
  constructor(protected RsourceModeCls: ModelType<T>) {}

  async getOne(id: string): Promise<T | undefined> {
    return await this.RsourceModeCls.findById(id);
  }

  async getAll(skip?: number, limit?: number ): Promise<T[]> {
    return await this.RsourceModeCls.find({}, null, {skip, limit});
  }

  async save(r:  T): Promise<T> {
    return await this.RsourceModeCls.create(r);
  }

}
