import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class teste1616168644215 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "teste",
        columns: [
          {
            name: "uuid",
            type: "varchar",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("teste");
  }
}
