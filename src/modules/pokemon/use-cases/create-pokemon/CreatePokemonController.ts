// modules/pokemons/use-cases/CreatePokemonController.ts
import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreatePokemonUseCase } from "./CreatePokemonUseCase";
import { IPokemonRequestDTO } from "./dtos/IPokemonRequest.dto";

class CreatePokemonController {
  async handle(request: Request, response: Response): Promise<Response> {
    const data: IPokemonRequestDTO = request.body;
    const createPokemonUseCase = container.resolve(CreatePokemonUseCase);
    const created = await createPokemonUseCase.execute(data);

    return response.status(201).send(created);
  }
}
export { CreatePokemonController };
