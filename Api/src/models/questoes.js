const BD = require('./database')


const Questoes = BD.sequelize.define('questoes' , {

    numQuestao: {
        type: BD.Sequelize.STRING
    },

    pergunta: {
        type: BD.Sequelize.STRING
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

module.exports = questoes;