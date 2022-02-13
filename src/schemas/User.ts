import { Schema, model, Document } from "mongoose";

interface UserInterface extends Document {
  email?: string;
  name?: string;
  password?: string;
  token?: string;
  _id?: string;
}

export const UserSchema = new Schema({ 
  email: String,
  name: String,
  password: String,
  token: String,
}, {
  timestamps: true
})

export default model<UserInterface>('User', UserSchema)