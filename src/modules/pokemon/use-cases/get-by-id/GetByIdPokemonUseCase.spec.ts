import "reflect-metadata";
import { FakePokemonRepository } from "../../repositories/fakes/FakePokemonRepository";
import { GetByIdPokemonUseCase } from "./GetByIdPokemonUseCase";

let fakePokemonRepository: FakePokemonRepository;
let getByIdPokemonUseCase: GetByIdPokemonUseCase;

describe("Create Pokemon", () => {
  beforeEach(() => {
    fakePokemonRepository = new FakePokemonRepository();
    getByIdPokemonUseCase = new GetByIdPokemonUseCase(fakePokemonRepository);

    jest.resetModules();
  });

  it("Should be able to create a pokemon", async () => {
    const newPokemon = await fakePokemonRepository.createAndSave({
      row: 1,
      name: "Bulbasaur",
      pokedexNumber: 1,
      imgName: "bulbasaur_image_name",
      generation: 1,
      evolutionStage: 1,
      evolved: 1,
      familyId: 1,
      crossGen: 0,
      type1: "grass",
      type2: "poison",
      weather1: "Sunny/clear",
      weather2: "Cloudy",
      statTotal: 326,
      atk: 118,
      def: 118,
      sta: 90,
      legendary: 0,
      acquireable: 1,
      spawns: 1,
      regional: 0,
      raidable: 0,
      hatchable: 5,
      shiny: 0,
      nest: 1,
      new: 0,
      notGettable: 1,
      futureEvolve: 0,
      cp40: 981,
      cp39: 967,
    });
    await expect(
      getByIdPokemonUseCase.execute({
        row: newPokemon.row,
      })
    ).resolves.not.toThrow();
  });
});
