import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import routes from "./routes";

class App {
  public express: express.Application;

  public constructor() {
    this.express = express();
  }
}

export default new App().express