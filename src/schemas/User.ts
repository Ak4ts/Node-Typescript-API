import { Schema, model, Document } from "mongoose";

interface UserInterface extends Document {
  email?: String;
  nome?: String;
  senha?: String;
}

const UserSchema = new Schema({ 
  email: String,
  nome: String,
  senha: String
}, {
  timestamps: true
})

export default model<UserInterface>('User', UserSchema)