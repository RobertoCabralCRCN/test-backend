// modules/pokemons/repositories/fakes/FakePokemonRepository.ts
import { Pokemon } from "../../entities/Pokemon";
import {
  ICreatePokemonDTO,
  IPokemonRepository,
} from "../interfaces/PokemonRepository.interface";

class FakePokemonRepository implements IPokemonRepository {
  async findByPokedexNumber(pokedexNumber: number): Promise<Pokemon> {
    throw new Error("Method not implemented.");
  }
  private pokemons: Pokemon[] = [];

  async createAndSave(data: ICreatePokemonDTO): Promise<Pokemon> {
    const pokemon = new Pokemon();
    Object.assign(pokemon, data);

    this.pokemons.push(pokemon);

    return Promise.resolve(pokemon);
  }

  async findById(row: number): Promise<Pokemon | undefined> {
    return this.pokemons.find((pokemon) => pokemon.row === row);
  }

  async findAll(): Promise<Pokemon[]> {
    return this.pokemons;
  }

  async importFromXlsx(file: Express.Multer.File): Promise<void> {
    await Promise.resolve(this.pokemons);
  }
}

export { FakePokemonRepository };
