import ICourseRepository from "./ICourseRepository";
import Course from "../models/Course";
import MongoRepository from "./MongoRepository";

export default class MongoCourseRepository
  extends MongoRepository<Course>
  implements ICourseRepository
{
  async findByCode(code: string): Promise<Course | undefined> {
    throw new Error("not implemented");
  }

  async findByName(name: string): Promise<Course[]> {
    throw new Error("not implemented");
  }
}
