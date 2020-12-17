import { Sequelize } from "sequelize";

const sequelize = new Sequelize("Pitu", "Arthursa", "Arthurinda1@hot", {
  host: "localhost",
  dialect: "mssql",
});

export default sequelize;
