import User from "../models/User";
import IBaseRepository from "./IBaseRepository";

export default interface IUserRepository extends IBaseRepository<User> {
  /** Returns users by their names. */
  findByName(name: string): Promise<User[]>;
}
