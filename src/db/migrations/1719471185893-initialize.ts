import {
  Table,
  TableForeignKey,
  type MigrationInterface,
  type QueryRunner,
} from "typeorm";

export class Initialize1719469344262
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "username",
            type: "varchar",
            length: "50",
            isUnique: true,
          },
          {
            name: "password",
            type: "varchar",
            length: "255",
          },
          {
            name: "email",
            type: "varchar",
            length: "255",
            isUnique: true,
          },
          {
            name: "createdAt",
            type: "timestampz",
            precision: 3,
            default: "now()",
          },
          {
            name: "updatedAt",
            type: "timestampz",
            precision: 3,
            default: "now()",
          },
          {
            name: "deletedAt",
            type: "timestampz",
            precision: 3,
            isNullable: true,
          },
          {
            name: "profileId",
            type: "int",
            isUnique: true,
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      "users",
      new TableForeignKey({
        columnNames: ["profileId"],
        referencedColumnNames: ["id"],
        referencedTableName: "user_profile",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      }),
    );
  }

  public async down(
    queryRunner: QueryRunner,
  ): Promise<void> {
    await queryRunner.dropTable("users");
  }
}
