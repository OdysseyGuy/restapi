import { Collection, Db } from "mongodb";
import IBaseRepository from "./IBaseRepository";

export default class MongoRepository<T> implements IBaseRepository<T> {
  protected _collection: Collection;

  constructor(db: Db, collection: string) {
    this._collection = db.collection(collection);
  }

  async find(id: number): Promise<T | undefined> {
    throw new Error("not implemented");
  }

  async findAll(limit: number, offset: number): Promise<T[]> {
    throw new Error("not implemented");
  }

  async create(data: object): Promise<boolean> { 
    throw new Error("not implemented");
  }

  async update(data: object): Promise<boolean> {
    throw new Error("not implemented");
  }

  async delete(entity: T): Promise<boolean> { 
    throw new Error("not implemented");
  }

  async deleteById(id: number): Promise<boolean> { 
    throw new Error("not implemented");
  }
}
