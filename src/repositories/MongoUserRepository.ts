import User from "../models/User";
import IUserRepository from "./IUserRepository";
import MongoRepository from "./MongoRepository";

export default class MongoUserRepository
  extends MongoRepository<User>
  implements IUserRepository
{
  async findByName(name: string): Promise<User[]> {
    throw new Error("not implemented");
  }
}
