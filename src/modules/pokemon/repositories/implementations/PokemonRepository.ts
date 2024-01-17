// modules/pokemons/repositories/implementations/PokemonRepository.ts
import { Pokemon } from "../../entity/Pokemon";
import {
  ICreatePokemonDTO,
  IPokemonRepository,
} from "../interfaces/PokemonRepository.interface";
import { getRepository, Repository } from "typeorm";

class PokemonRepository implements IPokemonRepository {
  private repository: Repository<Pokemon>;

  constructor() {
    this.repository = getRepository(Pokemon);
  }

  async createAndSave(data: ICreatePokemonDTO): Promise<Pokemon> {
    const createdPokemon = this.repository.create({
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

    return await this.repository.save(createdPokemon);
  }

  async findById(row: number): Promise<Pokemon> {
    const findedPokemon = await this.repository.findOne(row);
    return findedPokemon;
  }

  async findAll(): Promise<Pokemon[]> {
    return await this.repository.find();
  }

  async findByPokedexNumber(pokedexNumber: number): Promise<Pokemon> {
    const findedPokedexNumber = await this.repository.findOne({
      where: { pokedexNumber },
    });

    return findedPokedexNumber;
  }
}

export { PokemonRepository };
