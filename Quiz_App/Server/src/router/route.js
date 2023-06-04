import { Router } from "express";
const router = Router();

import * as controller from '../controllers/controller.js';

// Rotas para questões
router.route('/questoes')
  .get(controller.getQuestions)
  .post(controller.insertQuestions)
  .delete(controller.deleteAllQuestions);

router.route('/questoes/:id') // Rota para buscar/alterar/excluir uma questão específica
  .get(controller.getQuestionById)
  .post(controller.updateQuestion)
  .delete(controller.deleteQuestion);

// Rotas para alternativas
router.route('/alternativas')
  .get(controller.getAlternatives)
  .post(controller.insertAlternatives)
  .delete(controller.deleteAllAlternatives);

router.route('/alternativas/:id') // Rota para buscar/excluir uma alternativa específica
  .get(controller.getAlternativesByQuestion)
  .delete(controller.deleteAlternative);

export default router;



