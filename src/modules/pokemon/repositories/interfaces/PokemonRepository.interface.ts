import { Pokemon } from "../../entities/Pokemon";

interface ICreatePokemonDTO {
  row: number;
  name: string;
  pokedexNumber: number;
  imgName: string;
  generation: number;
  evolutionStage: string;
  evolved: number;
  familyId: number;
  crossGen: number;
  type1: string;
  type2: string;
  weather1: string;
  weather2: string;
  statTotal: number;
  atk: number;
  def: number;
  sta: number;
  legendary: number;
  acquireable: number;
  spawns: number;
  regional: number;
  raidable: number;
  hatchable: number;
  shiny: number;
  nest: number;
  new: number;
  notGettable: number;
  futureEvolve: number;
  cp40: number;
  cp39: number;
}

interface IPokemonRepository {
  createAndSave(data: ICreatePokemonDTO): Promise<Pokemon>;
  findAll(): Promise<Pokemon[]>;
  findById(row: number): Promise<Pokemon>;
  findByPokedexNumber(pokedexNumber: number): Promise<Pokemon>;
}

export { IPokemonRepository, ICreatePokemonDTO };
