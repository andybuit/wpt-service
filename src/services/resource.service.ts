import { Service } from "typedi";
import { ModelType } from "@typegoose/typegoose/lib/types";

// we need to use factory as we need separate instance of service for each generic
@Service()
export class ResourceServiceFactory {
  create<T>(RsourceModeCls: ModelType<T>) {
    return new ResourceService(RsourceModeCls);
  }
}

export class ResourceService<T> {
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
