import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Quiz.css';

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [answerStatus, setAnswerStatus] = useState('');

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const response = await axios.get('http://localhost:8080/api/questoes');
        setQuestions(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchQuestions();
  }, []);

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
    setAnswerStatus(answer === questions[currentQuestionIndex].correta ? 'correct' : 'incorrect');
  };

  const handleNextQuestion = () => {
    if (selectedAnswer !== '') {
      if (currentQuestionIndex + 1 < questions.length) {
        checkAnswer(selectedAnswer);
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer('');
        setAnswerStatus('');
      } else {
        checkAnswer(selectedAnswer);
        setQuizCompleted(true);
      }
    }
  };

  const checkAnswer = (selectedAnswer) => {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.correta) {
      setScore(score + 10);
    }
  };

  const handleQuizRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer('');
    setQuizCompleted(false);
    setScore(0);
    setAnswerStatus('');
  };

  if (questions.length === 0) {
    return <div>Carregando...</div>;
  }

  if (quizCompleted) {
    return (
      <div className="quiz-container">
        <h1>Quiz concluído! Obrigado por participar.</h1>
        <div className="quiz-score">Placar: {score} / {questions.length * 10}</div>
        <button className="restart-button" onClick={handleQuizRestart}>Reiniciar Quiz</button>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="quiz-container">
      <h1>Quiz App</h1>
      <h2>{currentQuestion.pergunta}</h2>
      <ul className="quiz-options">
        <li className="quiz-option">
          <button
            className={answerStatus === 'correct' && selectedAnswer === currentQuestion.alternativaA ? 'correct' : (answerStatus === 'incorrect' && selectedAnswer === currentQuestion.alternativaA ? 'incorrect' : '')}
            onClick={() => handleAnswerSelect(currentQuestion.alternativaA)}
            disabled={selectedAnswer !== ''}
          >
            {currentQuestion.alternativaA}
          </button>
        </li>
        <li className="quiz-option">
          <button
            className={answerStatus === 'correct' && selectedAnswer === currentQuestion.alternativaB ? 'correct' : (answerStatus === 'incorrect' && selectedAnswer === currentQuestion.alternativaB ? 'incorrect' : '')}
            onClick={() => handleAnswerSelect(currentQuestion.alternativaB)}
            disabled={selectedAnswer !== ''}
          >
            {currentQuestion.alternativaB}
          </button>
        </li>
        <li className="quiz-option">
          <button
            className={answerStatus === 'correct' && selectedAnswer === currentQuestion.alternativaC ? 'correct' : (answerStatus === 'incorrect' && selectedAnswer === currentQuestion.alternativaC ? 'incorrect' : '')}
            onClick={() => handleAnswerSelect(currentQuestion.alternativaC)}
            disabled={selectedAnswer !== ''}
          >
            {currentQuestion.alternativaC}
          </button>
        </li>
        <li className="quiz-option">
          <button
            className={answerStatus === 'correct' && selectedAnswer === currentQuestion.alternativaD ? 'correct' : (answerStatus === 'incorrect' && selectedAnswer === currentQuestion.alternativaD ? 'incorrect' : '')}
            onClick={() => handleAnswerSelect(currentQuestion.alternativaD)}
            disabled={selectedAnswer !== ''}
          >
            {currentQuestion.alternativaD}
          </button>
        </li>
      </ul>
      {selectedAnswer !== '' && (
        <button className="next-button" onClick={handleNextQuestion}>Próxima pergunta</button>
      )}
    </div>
  );
}

export default Quiz;
