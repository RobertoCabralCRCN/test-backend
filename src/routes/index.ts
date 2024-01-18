import { Router } from "express";
import { pokemonsRoutes } from "./pokemons.routes";
import { importPokemons } from "./importPokemons.routes";

const router = Router();
router.use("/pokemons", pokemonsRoutes);
router.use("/import", importPokemons);

export { router };
