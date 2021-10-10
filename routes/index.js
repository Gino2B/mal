import { Router } from "express";
import animeRoutes from "./anime.js";
import usersRoutes from "./users.js";

const router = Router();

router.get("/", (req, res) => res.send("This is the API root!"));

router.use("/", usersRoutes);
router.use("/", animeRoutes);

export default router;
