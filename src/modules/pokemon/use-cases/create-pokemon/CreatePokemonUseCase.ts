import { inject, injectable } from "tsyringe";
import { IPokemonRepository } from "../../repositories/interfaces/PokemonRepository.interface";
import { IPokemonRequestDTO } from "./dtos/IPokemonRequest.dto";
import { IPokemonResponseDTO } from "./dtos/IPokemonResponse.dto";

@injectable()
class CreatePokemonUseCase {
  constructor(
    @inject("PokemonRepository")
    private pokemonRepository: IPokemonRepository
  ) {}

  async execute(data: IPokemonRequestDTO): Promise<IPokemonResponseDTO> {
    const created = await this.pokemonRepository.createAndSave({
      row: data.row,
      name: data.name,
      pokedexNumber: data.pokedexNumber,
      imgName: data.imgName,
      generation: data.generation,
      evolutionStage: data.evolutionStage,
      evolved: data.evolved,
      familyId: data.familyId,
      crossGen: data.crossGen,
      type1: data.type1,
      type2: data.type2,
      weather1: data.weather1,
      weather2: data.weather2,
      statTotal: data.statTotal,
      atk: data.atk,
      def: data.def,
      sta: data.sta,
      legendary: data.legendary,
      acquireable: data.acquireable,
      spawns: data.spawns,
      regional: data.regional,
      raidable: data.raidable,
      hatchable: data.hatchable,
      shiny: data.shiny,
      nest: data.nest,
      new: data.new,
      notGettable: data.notGettable,
      futureEvolve: data.futureEvolve,
      cp40: data.cp40,
      cp39: data.cp39,
    });

    return created;
  }
}

export { CreatePokemonUseCase };
