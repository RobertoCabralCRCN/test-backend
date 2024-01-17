import { Router } from "express";
import { pokemonsRoutes } from "./pokemons.routes";

const router = Router();
router.use("/pokemons", pokemonsRoutes);

export { router };
