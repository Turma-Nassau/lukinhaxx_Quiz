const bd = require('./database')


const Questoes = bd.sequelize.define('questoes' , {

    numQuestao: {
        type: bd.Sequelize.STRING
    },

    pergunta: {
        type: bd.Sequelize.STRING
    },
    
    alternativaA: {
        type: bd.Sequelize.STRING
    },
    alternativaB: {
        type: bd.Sequelize.STRING
    },
    alternativaC: {
        type: bd.Sequelize.STRING
    },
    alternativaD: {
        type: bd.Sequelize.STRING
    },
    correta: {
        type: bd.Sequelize.STRING
    }
});

module.exports = Questoes;