const bd = require('./database')
const bd = require('./questoes')


const alternativas = bd.sequelize.define('alternativas', {

    id: {
        type: bd.Sequelize.INTEGER(2)
    },

    alternativa: {
        type: bd.Sequelize.STRING(50)
    },

    questao_id: {
        type: bd.Sequelize.STRING(50)
    },

    is_correta: {
        type: bd.Sequelize.BOOLEAN
    },

    questao_id: {
        type: bd.Sequelize.ForeignKey(questao_id).REFERENCES.questoes(numQuestao),
    }

})

module.exports = alternativas;
