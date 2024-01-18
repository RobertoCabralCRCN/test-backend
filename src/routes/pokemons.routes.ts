import { Router } from "express";
import { CreatePokemonController } from "../modules/pokemon/use-cases/create-pokemon/CreatePokemonController";
import { GetAllPokemonsController } from "../modules/pokemon/use-cases/get-all-pokemons/GetAllPokemonsController";
import { GetByIdPokemonController } from "../modules/pokemon/use-cases/get-by-id/GetByIdPokemonController";

const pokemonsRoutes = Router();
const createPokemonController = new CreatePokemonController();
const getAllPokemonsController = new GetAllPokemonsController();
const getByIdPokemonController = new GetByIdPokemonController();

pokemonsRoutes.post("/", createPokemonController.handle);
pokemonsRoutes.get("/", getAllPokemonsController.handle);
pokemonsRoutes.get("/:row", getByIdPokemonController.handle);

export { pokemonsRoutes };
