import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";

async function AuthMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const cookies = req.cookies;
  if (cookies && cookies.Authorization) {
    const secret = process.env.JWT_SECRET;
    try {
      const verificationResponse = jwt.verify(cookies.Authorization, secret) as DataStoredInToken;
      const id = verificationResponse._id;
      const user = await userModel.findById
    } else {

    }
  }
}
