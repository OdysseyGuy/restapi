import Course from "../models/Course";
import IBaseRepository from "./IBaseRepository";

export default interface ICourseRepository extends IBaseRepository<Course> {
  findByCode(code: string): Promise<Course | undefined>;
  findByName(name: string): Promise<Course[]>;
}
