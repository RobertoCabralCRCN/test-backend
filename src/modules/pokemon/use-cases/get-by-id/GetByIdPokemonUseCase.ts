import { IPokemonRepository } from "../../repositories/interfaces/PokemonRepository.interface";
import { IGetByIdPokemonRequestDTO } from "./dtos/IGetByIdPokemonRequest.dto";
import { GetByIdPokemonResponseDTO } from "./dtos/IGetByIdPokemonResponse.dto";

class GetByIdPokemonUseCase {
  constructor(private pokemonRepository: IPokemonRepository) {}

  async execute(
    input: IGetByIdPokemonRequestDTO
  ): Promise<GetByIdPokemonResponseDTO> {
    const findedPokemon = await this.pokemonRepository.findById(input.row);

    return findedPokemon;
  }
}

export { GetByIdPokemonUseCase };
