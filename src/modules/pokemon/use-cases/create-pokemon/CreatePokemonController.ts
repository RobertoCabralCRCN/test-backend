// modules/pokemons/use-cases/CreatePokemonController.ts
import { Request, Response } from "express";
import { CreatePokemonUseCase } from "./CreatePokemonUseCase";
import { IPokemonRequestDTO } from "./dtos/IPokemonRequest.dto";
import { container } from "tsyringe";

class CreatePokemonController {
  async handle(request: Request, response: Response): Promise<Response> {
    const createPokemonUseCase = container.resolve(CreatePokemonUseCase);
    const data: IPokemonRequestDTO = request.body;

    const created = await createPokemonUseCase.execute(data);

    return response.status(201).send(created);
  }
}
export { CreatePokemonController };
