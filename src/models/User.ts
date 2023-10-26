import { randomBytes, scrypt, timingSafeEqual } from "crypto";

const hashPassword = async (password: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    // TODO: should we generate a salt everytime?
    const salt = randomBytes(16).toString("hex");
    scrypt(password, salt, 64, (err, derivedKey) => {
      if (err) reject(err);
      resolve(salt + ":" + derivedKey.toString("hex"));
    });
  });
};

const comparePassword = async (
  password: string,
  hash: string
): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    const [salt, key] = hash.split(":");
    const keyBuffer = Buffer.from(key, "hex");
    scrypt(password, salt, 64, (err, derivedKey) => {
      if (err) reject(err);
      resolve(timingSafeEqual(keyBuffer, derivedKey));
    });
  });
};

export default class User {
  /** User name (max 50 characters) */
  private name: string;
  /** User email */
  private email: string;
  /** User password hash */
  private password: string;

  constructor(name: string, email: string, password: string) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  getName(): string {
    return this.name;
  }

  setName(name: string): boolean {
    // name should be alphabetical and less than 50 characters
    if (/^[a-zA-Z\s]+/.test(name) && name.length <= 50) {
      this.name = name;
      return true;
    }
    return false;
  }

  getEmail(): string {
    return this.email;
  }

  setEmail(email: string): boolean {
    // simple regex verification if this is a valid email
    if (/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email)) {
      this.email = email;
      return true;
    }
    return false;
  }

  setPassword(password: string) {
    hashPassword(password)
      .then((hash) => {
        this.password = hash;
      })
      .catch((error) => {
        console.error("Error hashing password:", error);
      });
  }

  verifyPassword(password: string): boolean {
    comparePassword(password, this.password).then((verified) => {
      if (verified) return true;
      else return false;
    });
    return false;
  }
}
