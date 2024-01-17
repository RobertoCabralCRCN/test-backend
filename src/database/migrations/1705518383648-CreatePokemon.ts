import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePokemon1705518383648 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "pokemons",
        columns: [
          {
            name: "row",
            type: "integer",
            isPrimary: true,
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "pokedex_number",
            type: "integer",
          },
          {
            name: "img_name",
            type: "varchar",
          },
          {
            name: "generation",
            type: "integer",
          },
          {
            name: "evolution_stage",
            type: "integer",
          },
          {
            name: "evolved",
            type: "integer",
          },
          {
            name: "family_id",
            type: "integer",
          },
          {
            name: "cross_gen",
            type: "integer",
          },
          {
            name: "type_1",
            type: "varchar",
          },
          {
            name: "type_2",
            type: "varchar",
          },
          {
            name: "weather_1",
            type: "varchar",
          },
          {
            name: "weather_2",
            type: "varchar",
          },
          {
            name: "stat_total",
            type: "integer",
          },
          {
            name: "atk",
            type: "integer",
          },
          {
            name: "def",
            type: "integer",
          },
          {
            name: "sta",
            type: "integer",
          },
          {
            name: "legendary",
            type: "integer",
          },
          {
            name: "acquireable",
            type: "integer",
          },
          {
            name: "spawns",
            type: "integer",
          },
          {
            name: "regional",
            type: "integer",
          },
          {
            name: "raidable",
            type: "integer",
          },
          {
            name: "hatchable",
            type: "integer",
          },
          {
            name: "shiny",
            type: "integer",
          },
          {
            name: "nest",
            type: "integer",
          },
          {
            name: "new",
            type: "integer",
          },
          {
            name: "not_gettable",
            type: "integer",
          },
          {
            name: "future_evolve",
            type: "integer",
          },
          {
            name: "cp40",
            type: "integer",
          },
          {
            name: "cp39",
            type: "integer",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("pokemons");
  }
}

