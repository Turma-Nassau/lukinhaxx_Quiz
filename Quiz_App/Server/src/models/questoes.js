import { Sequelize, sequelize } from '../database/database.js';

const Questoes = sequelize.define('questoes', {
  
  numQuestao: {
    type: Sequelize.INTEGER(4)
  },
  pergunta: {
    type: Sequelize.STRING(50)
  },
  alternativaA: {
    type: Sequelize.STRING(50)
  },
  alternativaB: {
    type: Sequelize.STRING(50)
  },
  alternativaC: {
    type: Sequelize.STRING(50)
  },
  alternativaD: {
    type: Sequelize.STRING(50)
  },
  correta: {
    type: Sequelize.STRING(50)
  }
});

export default Questoes;

