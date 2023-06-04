import { Sequelize, sequelize } from '../database/database.js';
import Questoes from './questoes.js';

const Alternativas = sequelize.define('alternativas', {
  id: {
    type: Sequelize.INTEGER(2),
    primaryKey: true
  },
  alternativa: {
    type: Sequelize.STRING(50)
  },
  questao_id: {
    type: Sequelize.STRING(50)
  },
  is_correta: {
    type: Sequelize.BOOLEAN
  }
});

Alternativas.belongsTo(Questoes, { foreignKey: 'questao_id' });

export default Alternativas;

