import { container } from "tsyringe";
import { IPokemonRepository } from "../../modules/pokemon/repositories/interfaces/PokemonRepository.interface";
import { PokemonRepository } from "../../modules/pokemon/repositories/implementations/PokemonRepository";

container.registerSingleton<IPokemonRepository>(
  "PokemonRepository",
  PokemonRepository
);
