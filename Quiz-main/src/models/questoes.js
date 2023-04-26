const bd = require('./database')


const Questoes = bd.sequelize.define('questoes' , {

    numQuestao: {
        type: bd.Sequelize.STRING(60)
    },

    pergunta: {
        type: bd.Sequelize.STRING(50)
    },
    
    alternativaA: {
        type: bd.Sequelize.STRING(50)
    },
    alternativaB: {
        type: bd.Sequelize.STRING(50)
    },
    alternativaC: {
        type: bd.Sequelize.STRING(50)
    },
    alternativaD: {
        type: bd.Sequelize.STRING(50)
    },
    correta: {
        type: bd.Sequelize.STRING(50)
    }
});

module.exports = Questoes;