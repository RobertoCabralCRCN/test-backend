// modules/pokemons/repositories/fakes/FakePokemonRepository.ts
import { Pokemon } from "../../entity/Pokemon";
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
    const pokemon = new Pokemon(); // Implemente a lógica de criação conforme necessário
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
    // Lógica de importação para o repositório fake
  }
}

export { FakePokemonRepository };
