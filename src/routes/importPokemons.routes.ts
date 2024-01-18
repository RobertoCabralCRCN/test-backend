import express from "express";
import { upload } from "../config/upload";
import { ImportPokemonController } from "../modules/pokemon/use-cases/import-pokemon/ImportPokemonController";

const importPokemons = express.Router();
const importPokemonController = new ImportPokemonController();

importPokemons.post("/", upload.single("file"), importPokemonController.handle);

export { importPokemons };
