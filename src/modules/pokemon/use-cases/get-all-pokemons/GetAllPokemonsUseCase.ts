import { inject, injectable } from "tsyringe";
import { IPokemonRepository } from "../../repositories/interfaces/PokemonRepository.interface";
import { IGetAllPokemonsResponseDTO } from "./dtos/IGetAllPokemonsResponse.dto";
import { FindManyOptions } from "typeorm";

@injectable()
class GetAllPokemonsUseCase {
  constructor(
    @inject("PokemonRepository") private pokemonRepository: IPokemonRepository
  ) {}

  async execute(
    filters: {
      familyId?: number;
      type1?: string;
      type2?: string;
      evolutionStage?: string;
    },
    pagination: { take?: number; skip?: number }
  ): Promise<IGetAllPokemonsResponseDTO[]> {
    const getAll = await this.pokemonRepository.findAll(filters, pagination);

    return getAll;
  }
}

export { GetAllPokemonsUseCase };
