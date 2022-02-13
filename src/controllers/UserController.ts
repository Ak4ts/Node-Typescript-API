import User from "../schemas/User"
import { Request, Response} from "express"

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
}

export default new UserController()