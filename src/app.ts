import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import routes from "./routes";

class App {
  public express: express.Application;

  public constructor() {
    this.express = express();

    this.middlewares()
    this.database()
    this.routes()
  }

  private middlewares(): void {
    dotenv.config();
    this.express.use(express.json());
    this.express.use(cors());
  }
  private database(): void {
    mongoose.connect("mongodb+srv://luiz:18250317@cluster0.chesh.mongodb.net/ts").then(() => {
      console.log("Database connectesad");
    }).catch(() => {
      console.log("Failed to connect to Database")
    });
  }
  private routes(): void {
    this.express.use(routes)
  }
}

export default new App().express