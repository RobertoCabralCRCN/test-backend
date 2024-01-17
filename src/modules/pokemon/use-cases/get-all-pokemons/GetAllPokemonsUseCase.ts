import { IPokemonRepository } from "../../repositories/interfaces/PokemonRepository.interface";
import { IGetAllPokemonsResponseDTO } from "./dtos/IGetAllPokemonsResponse.dto";

class GetAllPokemonsUseCase {
  constructor(private pokemonRepository: IPokemonRepository) {}

  async execute(): Promise<IGetAllPokemonsResponseDTO[]> {
    const getAll = await this.pokemonRepository.findAll();

    return getAll;
  }
}

export { GetAllPokemonsUseCase };
