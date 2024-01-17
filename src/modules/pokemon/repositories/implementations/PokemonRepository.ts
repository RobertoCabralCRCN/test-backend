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
    const pokemon = this.repository.create();
    return await this.repository.save(pokemon);
  }

  async findById(row: number): Promise<Pokemon> {
    const findedPokemon = await this.repository.findOne(row);
    return findedPokemon;
  }

  async findAll(): Promise<Pokemon[]> {
    return await this.repository.find();
  }

  // async importFromXlsx(file: ): Promise<void> {
  //   // Lógica de importação para o repositório real
  // }
}

export { PokemonRepository };
