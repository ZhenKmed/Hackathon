import { useState } from 'react';
import { CheckCircle, XCircle, RotateCcw, Award } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "Quel pourcentage de l'électricité consommée dans un foyer est généralement utilisé pour le chauffage ?",
    options: ["25%", "40%", "60%", "75%"],
    correctAnswer: 2,
    explanation: "Le chauffage représente environ 60% de la consommation électrique d'un foyer, c'est pourquoi son optimisation est cruciale."
  },
  {
    id: 2,
    question: "Quelle est la température idéale pour le chauffage en hiver ?",
    options: ["18°C", "19°C", "21°C", "23°C"],
    correctAnswer: 1,
    explanation: "19°C est la température recommandée pour les pièces de vie. Chaque degré en moins permet d'économiser 7% sur la facture de chauffage."
  },
  {
    id: 3,
    question: "Combien d'énergie peut économiser une ampoule LED par rapport à une ampoule incandescente ?",
    options: ["30%", "50%", "75%", "90%"],
    correctAnswer: 3,
    explanation: "Les ampoules LED consomment jusqu'à 90% moins d'énergie que les ampoules incandescentes et durent 25 fois plus longtemps."
  },
  {
    id: 4,
    question: "Quel appareil consomme le plus d'électricité en mode veille ?",
    options: ["Télévision", "Ordinateur", "Box internet", "Micro-ondes"],
    correctAnswer: 2,
    explanation: "La box internet consomme en continu, même la nuit. Elle peut représenter jusqu'à 200 kWh par an en mode veille."
  },
  {
    id: 5,
    question: "À quelle fréquence faut-il dégivrer un congélateur pour optimiser sa consommation ?",
    options: ["Tous les mois", "Tous les 3 mois", "Tous les 6 mois", "Une fois par an"],
    correctAnswer: 1,
    explanation: "Un dégivrage tous les 3 mois permet de maintenir l'efficacité énergétique. 3mm de givre augmentent la consommation de 30%."
  },
  {
    id: 6,
    question: "Quelle est la classe énergétique la plus efficace pour les électroménagers ?",
    options: ["A", "A+", "A++", "A+++"],
    correctAnswer: 3,
    explanation: "Depuis 2021, la nouvelle étiquette énergétique va de A (le plus efficace) à G. Avant cette date, A+++ était la meilleure classe."
  },
  {
    id: 7,
    question: "Combien peut-on économiser en baissant la température du chauffe-eau de 60°C à 55°C ?",
    options: ["5%", "10%", "15%", "20%"],
    correctAnswer: 1,
    explanation: "Baisser la température du chauffe-eau de 5°C permet d'économiser environ 10% sur la facture d'eau chaude sanitaire."
  },
  {
    id: 8,
    question: "Quel est le meilleur moment pour utiliser les appareils électroménagers si vous avez un tarif heures creuses ?",
    options: ["6h-8h", "12h-14h", "18h-20h", "22h-6h"],
    correctAnswer: 3,
    explanation: "Les heures creuses sont généralement de 22h à 6h, période où l'électricité coûte environ 40% moins cher."
  },
  {
    id: 9,
    question: "Quelle épaisseur d'isolant est recommandée pour les combles perdus ?",
    options: ["10 cm", "20 cm", "30 cm", "40 cm"],
    correctAnswer: 2,
    explanation: "Une épaisseur de 30 cm d'isolant dans les combles perdus est recommandée pour une isolation efficace selon la RT 2012."
  },
  {
    id: 10,
    question: "Combien d'énergie peut économiser un programmateur de chauffage ?",
    options: ["5%", "10%", "15%", "25%"],
    correctAnswer: 2,
    explanation: "Un programmateur de chauffage permet d'économiser 10 à 15% sur la facture en adaptant la température aux heures d'occupation."
  }
];

const Quiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
    setShowExplanation(true);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowExplanation(false);
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
    setShowExplanation(false);
  };

  const calculateScore = () => {
    return selectedAnswers.reduce((score, answer, index) => {
      return score + (answer === questions[index].correctAnswer ? 1 : 0);
    }, 0);
  };

  const getScoreMessage = (score: number) => {
    if (score >= 8) return "Excellent ! Vous êtes un expert en économie d'énergie !";
    if (score >= 6) return "Très bien ! Vous avez de bonnes connaissances.";
    if (score >= 4) return "Pas mal ! Il y a encore quelques points à améliorer.";
    return "Il est temps d'approfondir vos connaissances en économie d'énergie !";
  };

  if (showResults) {
    const score = calculateScore();
    return (
      <div className="quiz">
        <div className="container">
          <div className="quiz-results">
            <div className="results-header">
              <Award className="results-icon" />
              <h1>Résultats du Quiz</h1>
            </div>
            <div className="score-display">
              <div className="score-number">{score}/10</div>
              <p className="score-message">{getScoreMessage(score)}</p>
            </div>
            <div className="results-details">
              {questions.map((question, index) => (
                <div key={question.id} className="result-item">
                  <div className="result-header">
                    {selectedAnswers[index] === question.correctAnswer ? (
                      <CheckCircle className="result-icon correct" />
                    ) : (
                      <XCircle className="result-icon incorrect" />
                    )}
                    <span className="question-number">Question {index + 1}</span>
                  </div>
                  <p className="result-explanation">{question.explanation}</p>
                </div>
              ))}
            </div>
            <button onClick={resetQuiz} className="btn btn-primary">
              <RotateCcw className="btn-icon" />
              Recommencer le quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const isAnswered = selectedAnswers[currentQuestion] !== undefined;

  return (
    <div className="quiz">
      <div className="container">
        <div className="quiz-container">
          <div className="quiz-header">
            <h1>Quiz Économie d'Énergie</h1>
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
            <p className="question-counter">
              Question {currentQuestion + 1} sur {questions.length}
            </p>
          </div>

          <div className="question-card">
            <h2 className="question-text">{question.question}</h2>
            <div className="options-grid">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={isAnswered}
                  className={`option-button ${
                    selectedAnswers[currentQuestion] === index
                      ? index === question.correctAnswer
                        ? 'correct'
                        : 'incorrect'
                      : ''
                  } ${
                    isAnswered && index === question.correctAnswer ? 'correct' : ''
                  }`}
                >
                  {option}
                  {isAnswered && (
                    <>
                      {selectedAnswers[currentQuestion] === index && (
                        index === question.correctAnswer ? (
                          <CheckCircle className="option-icon" />
                        ) : (
                          <XCircle className="option-icon" />
                        )
                      )}
                      {selectedAnswers[currentQuestion] !== index && index === question.correctAnswer && (
                        <CheckCircle className="option-icon" />
                      )}
                    </>
                  )}
                </button>
              ))}
            </div>

            {showExplanation && (
              <div className="explanation">
                <h3>Explication :</h3>
                <p>{question.explanation}</p>
              </div>
            )}

            {isAnswered && (
              <button onClick={nextQuestion} className="btn btn-primary next-button">
                {currentQuestion === questions.length - 1 ? 'Voir les résultats' : 'Question suivante'}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;