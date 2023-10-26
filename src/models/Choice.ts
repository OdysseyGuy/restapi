export default class Choice {
  private userId: number;
  private courseId: number;

  constructor(userId: number, courseId: number) {
    this.userId = userId;
    this.courseId = courseId;
  }

  getUserId(): number {
    return this.userId;
  }

  getCourseId(): number {
    return this.courseId;
  }
}
