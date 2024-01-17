import { Router } from "express";
import { CreatePokemonController } from "../modules/pokemon/use-cases/create-pokemon/CreatePokemonController";
import { GetAllPokemonsController } from "../modules/pokemon/use-cases/get-all-pokemons/GetAllPokemonsController";
import { GetByIdPokemonController } from "../modules/pokemon/use-cases/get-by-id/GetByIdPokemonController";
import { ImportPokemonController } from "../modules/pokemon/use-cases/import-pokemon/ImportPokemonController";

const pokemonsRoutes = Router();
const createPokemonController = new CreatePokemonController();
const getAllPokemonsController = new GetAllPokemonsController();
const getByIdPokemonController = new GetByIdPokemonController();
const importPomenonController = new ImportPokemonController();

pokemonsRoutes.post("/", createPokemonController.handle);
pokemonsRoutes.get("/", getAllPokemonsController.handle);
pokemonsRoutes.get("/:row", getByIdPokemonController.handle);
pokemonsRoutes.post("/import", importPomenonController.handle);

export { pokemonsRoutes };
