import express, { Response, Request, response } from "express";
import shortId from "shortid";
import { config } from "../config/Constants";
import { UrlModel } from "../schemas/URLModel";

export class URLcontroller {
  public async shorten(req: Request, res: Response): Promise<void> {
    const { originUrl } = req.body;
    const url = await UrlModel.findOne({ originUrl });

    if (url) {
      res.json(url);
      return;
    }
    console.log(originUrl);
    const hash = shortId.generate();
    const shortUrl = `${config.API_URL}/${hash}`;
    const newUrl = await UrlModel.create({ hash, shortUrl, originUrl });
    res.json(newUrl);
  }
  public async redirect(req: Request, res: Response): Promise<void> {
    const { hash } = req.params;
    const url = await UrlModel.findOne({ hash });
    if(url) {
      res.redirect(url.originUrl)
      return
    }

    res.status(400).json({error: "URL not found"})
  }
}
