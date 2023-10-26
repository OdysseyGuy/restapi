export default class Course {
  code: string;
  name: string;
  credits: number;
  description: string;

  constructor(
    code: string,
    name: string,
    credits: number,
    description: string
  ) {
    this.code = code;
    this.name = name;
    this.credits = credits;
    this.description = description;
  }

  getCode(): string {
    return this.code;
  }

  setCode(code: string): boolean {
    if (/^[A-Z0-9]+/.test(code)) {
      this.code = code;
      return true;
    }
    return false;
  }

  getName(): string {
    return this.name;
  }

  setName(name: string): boolean {
    if (/^[a-zA-Z\s-]+/.test(name)) {
      this.name = name;
    }
    return true;
  }

  getCredits(): number {
    return this.credits;
  }

  setCredits(credits: number): boolean {
    if (credits > 0 && credits < 3) {
      this.credits = credits;
      return true;
    }
    return false;
  }
}
