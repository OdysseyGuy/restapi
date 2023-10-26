import Course from "../models/Course";
import ICourseRepository from "../repositories/ICourseRepository";
import IChoiceRepository from "../repositories/IChoiceRepository";

export default class CourseService {
  private courseRepo: ICourseRepository;
  private choiceRepo: IChoiceRepository;

  constructor(courseRepo: ICourseRepository, choiceRepo: IChoiceRepository) {
    this.courseRepo = courseRepo;
    this.choiceRepo = choiceRepo;
  }

  async findCourse(id: number): Promise<Course | undefined> {
    return this.courseRepo.find(id);
  }

  async findCourseByCode(code: string): Promise<Course | undefined> {
    return this.courseRepo.findByCode(code);
  }

  async findCourseByName(name: string): Promise<Course[]> {
    return this.courseRepo.findByName(name);
  }

  async addUserToCourse(userId: number, courseId: number): Promise<boolean> {
    return this.choiceRepo.create({ userId, courseId });
  }

  async removeUserFromCourse(
    userId: number,
    courseId: number
  ): Promise<boolean> {
    const choice = await this.choiceRepo.findByUserIdAndCourseId(
      userId,
      courseId
    );
    if (choice !== undefined) {
      return this.choiceRepo.delete(choice);
    } else {
      return false;
    }
  }

  async findUsersInCourse(courseId: number): Promise<number[]> {
    const choices = await this.choiceRepo.findByCourseId(courseId);
    return choices.map((choice) => choice.getUserId());
  }

  async findCoursesByUser(userId: number): Promise<number[]> {
    const choices = await this.choiceRepo.findByUserId(userId);
    return choices.map((choice) => choice.getCourseId());
  }
}
