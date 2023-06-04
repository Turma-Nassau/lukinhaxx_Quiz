import Sequelize from "sequelize";

const sequelize = new Sequelize("quiz", "root", "123456", {
  host: "localhost",
  dialect: "mysql",
});

sequelize.authenticate()
  .then(() => {
    console.log("Conectado com sucesso!");
  })
  .catch((error) => {
    console.log("Falha ao se conectar:", error);
  });

export { Sequelize, sequelize};
export default sequelize;

