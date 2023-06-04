import Questoes from '../models/questoes.js';
import Alternativas from '../models/alternativas.js';

export async function getQuestions(req, res) {
  try {
    const questions = await Questoes.findAll();
    res.json(questions);
  } catch (error) {
    res.json(error);
  }
}

export async function insertQuestions(req, res) {
  try {
    const newQuestion = await Questoes.create(req.body);
    res.json(newQuestion);
  } catch (error) {
    res.json(error);
  }
}

export async function deleteAllQuestions(req, res) {
  try {
    await Questoes.destroy({ truncate: true });
    res.json({ message: 'Todas as questões foram excluídas' });
  } catch (error) {
    res.json(error);
  }
}

export async function getAlternatives(req, res) {
  try {
    const alternatives = await Alternativas.findAll();
    res.json(alternatives);
  } catch (error) {
    res.json(error);
  }
}

export async function insertAlternatives(req, res) {
  try {
    const newAlternative = await Alternativas.create(req.body);
    res.json(newAlternative);
  } catch (error) {
    res.json(error);
  }
}

export async function deleteAllAlternatives(req, res) {
  try {
    await Alternativas.destroy({ truncate: true });
    res.json({ message: 'Todas as alternativas foram excluídas' });
  } catch (error) {
    res.json(error);
  }
}

export async function getQuestionById(req, res) {
  try {
    const { id } = req.params;
    const question = await Questoes.findByPk(id);
    if (question) {
      res.json(question);
    } else {
      res.status(404).json({ message: 'Questão não encontrada' });
    }
  } catch (error) {
    res.json(error);
  }
}

export async function updateQuestion(req, res) {
  try {
    const { id } = req.params;
    const updatedQuestion = await Questoes.update(req.body, {
      where: { id },
    });
    res.json(updatedQuestion);
  } catch (error) {
    res.json(error);
  }
}

export async function deleteQuestion(req, res) {
  try {
    const { id } = req.params;
    await Questoes.destroy({
      where: { id },
    });
    res.json({ message: 'Questão excluída com sucesso' });
  } catch (error) {
    res.json(error);
  }
}

export async function getAlternativesByQuestion(req, res) {
  try {
    const { id } = req.params;
    const alternatives = await Alternativas.findAll({
      where: { questao_id: id },
    });
    res.json(alternatives);
  } catch (error) {
    res.json(error);
  }
}

export async function deleteAlternative(req, res) {
  try {
    const { id } = req.params;
    await Alternativas.destroy({
      where: { id },
    });
    res.json({ message: 'Alternativa excluída com sucesso' });
  } catch (error) {
    res.json(error);
  }
}
