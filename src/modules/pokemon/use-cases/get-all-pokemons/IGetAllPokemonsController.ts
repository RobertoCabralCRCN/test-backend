import { Request, Response } from "express";

import { container } from "tsyringe";
import { GetAllPokemonsUseCase } from "./IGetAllPokemonsUseCase";

class CreatePokemonController {
  async handle(request: Request, response: Response): Promise<Response> {
    const getAllPokemonsUseCase = container.resolve(GetAllPokemonsUseCase);

    const getAll = await getAllPokemonsUseCase.execute();

    return response.status(200).send(getAll);
  }
}
export { CreatePokemonController };
