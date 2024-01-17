import { IPokemonRepository } from "../../repositories/interfaces/PokemonRepository.interface";
import { IPokemonRequestDTO } from "./dtos/IPokemonRequest.dto";
import { IPokemonResponseDTO } from "./dtos/IPokemonResponse.dto";

class CreatePokemonUseCase {
  constructor(private pokemonRepository: IPokemonRepository) {}

  async execute(data: IPokemonRequestDTO): Promise<IPokemonResponseDTO> {
    const created = await this.pokemonRepository.createAndSave(data);

    return created;
  }
}

export { CreatePokemonUseCase };
