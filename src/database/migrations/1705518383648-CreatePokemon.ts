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
            isNullable: true,
          },
          {
            name: "generation",
            type: "integer",
            isNullable: true,
          },
          {
            name: "evolution_stage",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "evolved",
            type: "integer",
            isNullable: true,
          },
          {
            name: "family_id",
            type: "integer",
            isNullable: true,
          },
          {
            name: "cross_gen",
            type: "integer",
            isNullable: true,
          },
          {
            name: "type_1",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "type_2",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "weather_1",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "weather_2",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "stat_total",
            type: "integer",
            isNullable: true,
          },
          {
            name: "atk",
            type: "integer",
            isNullable: true,
          },
          {
            name: "def",
            type: "integer",
            isNullable: true,
          },
          {
            name: "sta",
            type: "integer",
            isNullable: true,
          },
          {
            name: "legendary",
            type: "integer",
            isNullable: true,
          },
          {
            name: "acquireable",
            type: "integer",
            isNullable: true,
          },
          {
            name: "spawns",
            type: "integer",
            isNullable: true,
          },
          {
            name: "regional",
            type: "integer",
            isNullable: true,
          },
          {
            name: "raidable",
            type: "integer",
            isNullable: true,
          },
          {
            name: "hatchable",
            type: "integer",
            isNullable: true,
          },
          {
            name: "shiny",
            type: "integer",
            isNullable: true,
          },
          {
            name: "nest",
            type: "integer",
            isNullable: true,
          },
          {
            name: "new",
            type: "integer",
            isNullable: true,
          },
          {
            name: "not_gettable",
            type: "integer",
            isNullable: true,
          },
          {
            name: "future_evolve",
            type: "integer",
            isNullable: true,
          },
          {
            name: "100_percent_cp_40",
            type: "integer",
            isNullable: true,
          },
          {
            name: "100_percent_cp_39",
            type: "integer",
            isNullable: true,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
            isNullable: true,
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
            isNullable: true,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("pokemons");
  }
}

