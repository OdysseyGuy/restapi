import Choice from "../models/Choice";
import CourseSelection from "../models/Choice";
import IBaseRepository from "./IBaseRepository";

export default interface IChoiceRepository
  extends IBaseRepository<CourseSelection> {
  /** Returns the choice of the given user and course. */
  findByUserIdAndCourseId(
    userId: number,
    courseId: number
  ): Promise<Choice | undefined>;
  /** Returns all the courses choices selected by the user. */
  findByUserId(userId: number): Promise<Choice[]>;
  /** Returns all users selected the given course. */
  findByCourseId(courseId: number): Promise<Choice[]>;
}
