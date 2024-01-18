import {
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryColumn,
} from "typeorm";

@Entity("pokemons")
class Pokemon {
  @PrimaryColumn()
  row: number;

  @Column()
  name: string;

  @Column({ name: "pokedex_number" })
  pokedexNumber: number;

  @Column({ name: "img_name" })
  imgName: string;

  @Column()
  generation: number;

  @Column({ name: "evolution_stage" })
  evolutionStage: string;

  @Column()
  evolved: number;

  @Column({ name: "family_id" })
  familyId: number;

  @Column({ name: "cross_gen" })
  crossGen: number;

  @Column({ name: "type_1" })
  type1: string;

  @Column({ name: "type_2" })
  type2: string;

  @Column({ name: "weather_1" })
  weather1: string;

  @Column({ name: "weather_2" })
  weather2: string;

  @Column({ name: "stat_total" })
  statTotal: number;

  @Column()
  atk: number;

  @Column()
  def: number;

  @Column()
  sta: number;

  @Column()
  legendary: number;

  @Column()
  acquireable: number;

  @Column()
  spawns: number;

  @Column()
  regional: number;

  @Column()
  raidable: number;

  @Column()
  hatchable: number;

  @Column()
  shiny: number;

  @Column()
  nest: number;

  @Column()
  new: number;

  @Column({ name: "not_gettable" })
  notGettable: number;

  @Column({ name: "future_evolve" })
  futureEvolve: number;

  @Column({ name: "100_percent_cp_40" })
  cp40: number;

  @Column({ name: "100_percent_cp_39" })
  cp39: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export { Pokemon };
