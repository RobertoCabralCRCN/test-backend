import { inject, injectable } from "tsyringe";
import { IImportPokemonResponseDTO } from "./dtos/IImportPokemonResponse.dto";
import { IPokemonRepository } from "../../repositories/interfaces/PokemonRepository.interface";
import * as xlsx from "xlsx";

interface IImportPokemon {
  Row: number;
  Name: string;
  "Pokedex Number": number;
  "Img name": string;
  Generation: number;
  "Evolution Stage": string;
  Evolved: number;
  FamilyID: number;
  "Cross Gen": number;
  "Type 1": string;
  "Type 2": string;
  "Weather 1": string;
  "Weather 2": string;
  "STAT TOTAL": number;
  ATK: number;
  DEF: number;
  STA: number;
  Legendary: number;
  Aquireable: number;
  Spawns: number;
  Regional: number;
  Raidable: number;
  Hatchable: number;
  Shiny: number;
  Nest: number;
  New: number;
  "Not-Gettable": number;
  "Future Evolve": number;
  "100% CP @ 40": number;
  "100% CP @ 39": number;
}

@injectable()
class ImportPokemonUseCase {
  constructor(
    @inject("PokemonRepository") private pokemonRepository: IPokemonRepository
  ) {}

  loadPokemons(file: Express.Multer.File): IImportPokemon[] {
    const workbook = xlsx.read(file.buffer, { type: "buffer" });
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];

    const columns = [
      "Row",
      "Name",
      "Pokedex Number",
      "Img name",
      "Generation",
      "Evolution Stage",
      "Evolved",
      "FamilyID",
      "Cross Gen",
      "Type 1",
      "Type 2",
      "Weather 1",
      "Weather 2",
      "STAT TOTAL",
      "ATK",
      "DEF",
      "STA",
      "Legendary",
      "Aquireable",
      "Spawns",
      "Regional",
      "Raidable",
      "Hatchable",
      "Shiny",
      "Nest",
      "New",
      "Not-Gettable",
      "Future Evolve",
      "100% CP @ 40",
      "100% CP @ 39",
    ];

    const data: IImportPokemon[] = xlsx.utils
      .sheet_to_json(sheet, { header: 1, range: 2 })
      .map((row: any) => {
        const pokemon: IImportPokemon = {} as IImportPokemon;

        columns.forEach((col, index) => {
          pokemon[col] = row[index];
        });

        return pokemon;
      });

    return data;
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const pokemons = this.loadPokemons(file);

    for await (const pokemon of pokemons) {
      const data: IImportPokemonResponseDTO = {
        acquireable: pokemon.Aquireable,
        atk: pokemon.ATK,
        cp39: pokemon["100% CP @ 39"],
        cp40: pokemon["100% CP @ 40"],
        created_at: new Date(),
        crossGen: pokemon["Cross Gen"],
        def: pokemon.DEF,
        evolutionStage: pokemon["Evolution Stage"],
        evolved: pokemon.Evolved,
        familyId: pokemon.FamilyID,
        futureEvolve: pokemon["Future Evolve"],
        generation: pokemon.Generation,
        hatchable: pokemon.Hatchable,
        imgName: pokemon["Img name"],
        legendary: pokemon.Legendary,
        name: pokemon.Name,
        nest: pokemon.Nest,
        new: pokemon.New,
        notGettable: pokemon["Not-Gettable"],
        pokedexNumber: pokemon["Pokedex Number"],
        raidable: pokemon.Raidable,
        regional: pokemon.Regional,
        row: pokemon.Row,
        shiny: pokemon.Shiny,
        spawns: pokemon.Spawns,
        sta: pokemon.STA,
        statTotal: pokemon["STAT TOTAL"],
        type1: pokemon["Type 1"],
        type2: pokemon["Type 2"],
        updated_at: new Date(),
        weather1: pokemon["Weather 1"],
        weather2: pokemon["Weather 2"],
      };

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
