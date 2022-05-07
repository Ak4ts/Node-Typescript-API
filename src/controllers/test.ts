import { Response, Request } from "express"
import tr from "googletrans"

class trad{
  async trad(req: Request, res: Response){

    tr(
      "Hi there. How was the flight, girl. I waited in line. a row of chairs",
      {
        to: "pt",
        from: "en",
      }
    ).then((resp) => {
      return res.json({ resp });
    });
  }
}

export default new trad()