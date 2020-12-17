import { Router } from "express";
import { postLink, getLink, hitLink } from "../controllers/links";

const router = Router();

router.post("/links", postLink);

router.get("/links/:code", hitLink);

router.get("/links/:code/stats", getLink);

export default router;
