import { inject, injectable } from "tsyringe";
import { IPokemonRepository } from "../repositories/interfaces/PokemonRepository.interface";
import fs from "fs";
import { read as xlsxRead, utils } from "xlsx";
import { IImportPokemonResponseDTO } from "./dtos/IImportPokemonResponse.dto";

interface IImportPokemon {
  data: IImportPokemonResponseDTO;
}

@injectable()
class ImportPokemonUseCase {
  constructor(
    @inject("PokemonRepository") private pokemonRepository: IPokemonRepository
  ) {}

  async loadPokemons(
    file: Express.Multer.File
  ): Promise<IImportPokemonResponseDTO[]> {
    return new Promise((resolve, reject) => {
      const data = fs.readFileSync(file.path);
      const pokemons: IImportPokemon[] = [];

      const parseFile = xlsxRead(data, { cellDates: true });

      const [sheetName] = parseFile.SheetNames;
      const worksheet = parseFile.Sheets[sheetName];

      const rows = utils.sheet_to_json<IImportPokemonResponseDTO>(worksheet, {
        header: 1,
        defval: null,
      });

      rows.forEach((row: any) => {
        const [
          pokedexNumber,
          name,
          rowNumber,
          imgName,
          generation,
          evolutionStage,
          evolved,
          familyId,
          crossGen,
          type1,
          type2,
          weather1,
          weather2,
          statTotal,
          atk,
          def,
          sta,
          legendary,
          acquireable,
          spawns,
          regional,
          raidable,
          hatchable,
          shiny,
          nest,
          newPokemon,
          notGettable,
          futureEvolve,
          cp40,
          cp39,
          created_at,
          updated_at,
        ] = row;

        pokemons.push({
          data: {
            row: rowNumber,
            pokedexNumber,
            name,
            imgName,
            generation,
            evolutionStage,
            evolved,
            familyId,
            crossGen,
            type1,
            type2,
            weather1,
            weather2,
            statTotal,
            atk,
            def,
            sta,
            legendary,
            acquireable,
            spawns,
            regional,
            raidable,
            hatchable,
            shiny,
            nest,
            new: newPokemon,
            notGettable,
            futureEvolve,
            cp40,
            cp39,
            created_at,
            updated_at,
          },
        });
      });

      fs.promises
        .unlink(file.path)
        .then(() => resolve(pokemons.map((pokemon) => pokemon.data)))
        .catch((err) => reject(err));
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const pokemons = await this.loadPokemons(file);

    for (const pokemon of pokemons) {
      const data: IImportPokemonResponseDTO = pokemon;

      const existingPokemon = await this.pokemonRepository.findByPokedexNumber(
        data.pokedexNumber
      );

      if (!existingPokemon) {
        await this.pokemonRepository.createAndSave(data);
      }
    }
  }
}

export { ImportPokemonUseCase };
