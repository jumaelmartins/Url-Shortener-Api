import express, { Response, Request } from "express";
import shortId from "shortid";
import { config } from "../config/Constants";

export class URLcontroller {
  public async shorten(req: Request, res: Response): Promise<void> {
    const { originUrl } = req.body;
    console.log(originUrl);
    const hash = shortId.generate();
    const shortUrl = `${config.API_URL}/${hash}`;
    res.json({ originUrl, hash, shortUrl });
  }
}
