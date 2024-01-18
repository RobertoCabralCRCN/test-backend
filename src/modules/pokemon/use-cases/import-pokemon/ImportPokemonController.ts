import { container } from "tsyringe";
import { Request, Response } from "express";
import { ImportPokemonUseCase } from "./ImportPokemonUseCase";

class ImportPokemonController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const file = request.file;
      console.log("file", file);

      const importPokemonUseCase = container.resolve(ImportPokemonUseCase);
      console.log("antes do execute", importPokemonUseCase);
      await importPokemonUseCase.execute(file);

      return response
        .status(201)
        .json({ message: "Pokémons importados com sucesso!" });
    } catch (error) {
      console.error(error);
      return response
        .status(500)
        .json({ error: "Erro ao importar os Pokémons." });
    }
  }
}

export { ImportPokemonController };
