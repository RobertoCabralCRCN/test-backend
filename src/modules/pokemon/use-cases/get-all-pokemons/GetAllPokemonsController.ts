import { Request, Response } from "express";

import { container } from "tsyringe";
import { GetAllPokemonsUseCase } from "./GetAllPokemonsUseCase";

class GetAllPokemonsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { familyId, type1, type2, evolutionStage } = request.query;

    const take = request.headers["take"];
    const skip = request.headers["skip"];

    const filters = {
      familyId: familyId ? Number(familyId) : null,
      type1: type1 ? String(type1) : null,
      type2: type2 ? String(type2) : null,
      evolutionStage: evolutionStage ? String(evolutionStage) : null,
    };

    const pagination = {
      take: take ? Number(take) : undefined,
      skip: skip ? Number(skip) : undefined,
    };

    const getAllPokemonsUseCase = container.resolve(GetAllPokemonsUseCase);

    const getAll = await getAllPokemonsUseCase.execute(filters, pagination);

    return response.status(200).json(getAll);
  }
}

export { GetAllPokemonsController };
