import { inject, injectable } from "tsyringe";
import { IPokemonRepository } from "../../repositories/interfaces/PokemonRepository.interface";
import { IGetAllPokemonsResponseDTO } from "./dtos/IGetAllPokemonsResponse.dto";

@injectable()
class GetAllPokemonsUseCase {
  constructor(
    @inject("PokemonRepository") private pokemonRepository: IPokemonRepository
  ) {}

  async execute(): Promise<IGetAllPokemonsResponseDTO[]> {
    const getAll = await this.pokemonRepository.findAll();

    return getAll;
  }
}

export { GetAllPokemonsUseCase };
