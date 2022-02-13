import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import routes from "./routes";

class App {
  public express: express.Application;

  public constructor() {
    this.express = express();
    this.database()
    this.routes()
  }
  private database(): void {
    mongoose.connect("mongodb://localhost:27017/ts");
  }
  private routes(): void {
    this.express.use(routes)
  }
}

export default new App().express