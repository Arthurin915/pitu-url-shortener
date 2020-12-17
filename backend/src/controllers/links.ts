import { Request, Response } from "express";
import { Link } from "../models/link";
import linksRepository from "../models/linksRepository";

const generateCode = () => {
  const codeSize = 5;
  let text = "";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvxwyz0123456789";
  for (let i = 0; i < codeSize; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

export const postLink = async (req: Request, res: Response) => {
  const link = req.body as Link;
  link.code = generateCode();
  link.hits = 0;
  const result = await linksRepository.add(link);
  if (!result.id) return res.sendStatus(400);
  link.id = result.id;
  res.status(201).json(link);
};

export const getLink = async (req: Request, res: Response) => {
  const code = req.params.code as string;
  const link = await linksRepository.findByCode(code);
  if (!link) res.sendStatus(404);
  else res.status(201).json(link as Link);
};

export const hitLink = (req: Request, res: Response) => {
  const code = req.params.code as string;
  // const link = findLinkByCode(code);
  // if (!link) res.sendStatus(404);
  // else {
  //   link.hits!++;
  //   res.json(link);
  // }
};
