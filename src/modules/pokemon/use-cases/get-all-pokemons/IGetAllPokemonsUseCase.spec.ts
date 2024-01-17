import "reflect-metadata";
import { FakePokemonRepository } from "../../repositories/fakes/FakePokemonRepository";
import { GetAllPokemonsUseCase } from "./IGetAllPokemonsUseCase";

let fakePokemonRepository: FakePokemonRepository;
let getAllPokemonsUseCase: GetAllPokemonsUseCase;

describe("Create Pokemon", () => {
  beforeEach(() => {
    fakePokemonRepository = new FakePokemonRepository();
    getAllPokemonsUseCase = new GetAllPokemonsUseCase(fakePokemonRepository);

    jest.resetModules();
  });

  it("Should be able to create a pokemon", async () => {
    await fakePokemonRepository.createAndSave({
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
    await expect(getAllPokemonsUseCase.execute()).resolves.not.toThrow();
  });
});
