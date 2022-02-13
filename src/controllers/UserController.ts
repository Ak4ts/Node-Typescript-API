import User from "../schemas/User"
import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken";

class UserController {

  public async index(req: Request, res: Response): Promise<Response>{
    const users = await User.find()
    return res.status(200).json(users)
  }
  public async create(req: Request, res: Response): Promise<Response>{
    const { email } = req.body
    const users = await User.findOne({email})

    if(users) return res.status(409).json({ error: "User Already Exists!"})
    const user = await User.create(req.body)
    return res.status(200).json(user)
  }
  public async login(req: Request, res: Response, next: NextFunction): Promise<Response> {
    const { email, password } = req.body
    const user = await User.findOne({email, password})
    if(!user) return res.status(403).json({ error: "Check if email and password is correct"})
    const token = jwt.sign({ 
        user_id: user._id,
        email 
      },
      "aW0gaGFwcHkgdG9kYXk=",
      {
        expiresIn: "7d",
      }
    );
    user.token = token;
    user.save();
    next()
    return res.status(200)
  }
}


export default new UserController()