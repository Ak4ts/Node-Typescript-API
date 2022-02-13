import { Request, Response, NextFunction } from "express";
const jwt = require("jsonwebtoken");

class UserMiddleware {

  public async verifyToken(req: Request | any, res: Response, next: NextFunction): Promise<Response | any> {

    const token: string = req.body.token || req.query.token || req.headers["x-access-token"];
    if(!token) return res.status(403).send("A token is required for authentication");
    try {
      const decoded = jwt.verify(token, "aW0gaGFwcHkgdG9kYXk=");
      req.user = decoded;
    } catch (err) {
      return res.status(401).send("Invalid Token");
    }
    next()
  }
}

export default new UserMiddleware()
