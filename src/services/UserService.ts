import User from "../models/User";
import IUserRepository from "../repositories/IUserRepository";

export default class UserService {
  private userRepo: IUserRepository;

  constructor(userRepo: IUserRepository) {
    this.userRepo = userRepo;
  }

  async findUser(id: number): Promise<User | undefined> {
    return this.userRepo.find(id);
  }

  async findUserByName(name: string): Promise<User[]> {
    return this.userRepo.findByName(name);
  }
}
