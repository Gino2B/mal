import { Router } from "express";
import * as controllers from "../controllers/anime.js";
import restrict from "../helpers/restrict.js";

const router = Router();
router.get("/anime", controllers.getAnimes);
router.get("/anime/:id", controllers.getAnime);
router.post("/anime", controllers.createAnime);
router.put("/anime/:id", controllers.updateAnime);
router.delete("/anime/:id", controllers.deleteAnime);

export default router;
