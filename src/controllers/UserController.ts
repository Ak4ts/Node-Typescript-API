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


export default new UserController()