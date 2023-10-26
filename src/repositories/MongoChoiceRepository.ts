import Choice from "../models/Choice";
import IChoiceRepository from "./IChoiceRepository";
import MongoRepository from "./MongoRepository";

export default class MongoChoiceRepository
  extends MongoRepository<Choice>
  implements IChoiceRepository
{
  async findByUserIdAndCourseId(
    userId: number,
    courseId: number
  ): Promise<Choice | undefined> {
    throw new Error("not implemented");
  }

  async findByUserId(userId: number): Promise<Choice[]> {
    throw new Error("not implemented");
  }

  async findByCourseId(courseId: number): Promise<Choice[]> {
    throw new Error("not implmented");
  }
}
