import { Request, Response } from "express";

import { container } from "tsyringe";
import { GetByIdPokemonUseCase } from "./GetByIdPokemonUseCase";

class GetByIdPokemonController {
  async handle(request: Request, response: Response): Promise<Response> {
    const getByIdPokemonUseCase = container.resolve(GetByIdPokemonUseCase);

    const { row } = request.params;

    const getAll = await getByIdPokemonUseCase.execute({ row: Number(row) });

    return response.status(200).send(getAll);
  }
}
export { GetByIdPokemonController };
