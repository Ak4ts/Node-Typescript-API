import { Schema, model, Document } from "mongoose";

interface UserInterface extends Document {
  email?: string;
  name?: string;
  password?: string;
  token?: string;
  _id?: string;
}

const UserSchema = new Schema({ 
  email: String,
  nome: String,
  senha: String
}, {
  timestamps: true
})

export default model<UserInterface>('User', UserSchema)