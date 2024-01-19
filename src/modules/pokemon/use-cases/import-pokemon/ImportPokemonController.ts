import { container } from "tsyringe";
import { Request, Response } from "express";
import { ImportPokemonUseCase } from "./ImportPokemonUseCase";

class ImportPokemonController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const file = request.file;

      const importPokemonUseCase = container.resolve(ImportPokemonUseCase);
      await importPokemonUseCase.execute(file);

      return response
        .status(201)
        .json({ message: "Pokémons importados com sucesso!" });
    } catch (error) {
      return response
        .status(500)
        .json({ error: "Erro ao importar os Pokémons." });
    }
  }
}

export { ImportPokemonController };
