import { useState } from "react";

//inteface som bestämma hur frågan ska se ut
interface Question {
  question: string; //När är julafton?
  answers: string[]; //an array som består av t.ex ['24 dec', '8 maj', '3 jul']
  correct: number; //vilken plats som en korrekt svar ligger // correct answere is 0
}

//type for gameprops
type GameProps = {
  showResult: () => void;
  correctAnswer: () => void;
};

const Game = (props: GameProps) => {
  const questions: Question[] = getQuestions();

  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const question = questions[currentQuestion];

  const options = question.answers.map((answer, index) => (
    <p key={index}>
      <label>
        <input
          type="radio"
          name="answers"
          onClick={() => setSelectedAnswer(index)}
        />
        {answer}
      </label>
    </p>
  ));

  const handleDecided = () => {
    //kolla om rätt
    if (selectedAnswer == question.correct) {
      console.log("rätt!!!");
      props.correctAnswer();
    }

    //byt fråga
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      //gå vidare till result
      props.showResult();
    }
  };

  return (
    <section>
      <h3>{question.question}</h3>
      {options}
      <button onClick={handleDecided}>Svara</button>
    </section>
  );
};

const getQuestions = (): Question[] => {
  return [
    {
      question: "När är julafton?",
      answers: ["24 maj", "24 dec", "7 maj"],
      correct: 1,
    },
    {
      question: "Vad är bäst?",
      answers: ["JavaScript", "TypeScript", "CSS"],
      correct: 1,
    },
    {
      question: "Vad är bäst?",
      answers: ["Discodr", "Zoom", "Teams"],
      correct: 0,
    },
    {
      question: "Vad är bäst ?",
      answers: ["Mac OS", "Windows", "Linux"],
      correct: 2,
    },
  ];
};

export default Game;
