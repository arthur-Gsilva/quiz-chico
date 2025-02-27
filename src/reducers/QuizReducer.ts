import { questions } from "../data/questions";

export type QuizState = {
    currentQuestion: number;
    score: number;
    selectedOption: string | null;
    finished: boolean;
};

export type QuizAction =
  | { type: "SELECT_OPTION"; payload: string }
  | { type: "NEXT_QUESTION" }
  | { type: "RESET" };

export const quizReducer = (state: QuizState, action: QuizAction): QuizState => {
  switch (action.type) {
    case "SELECT_OPTION":
      return { ...state, selectedOption: action.payload };

    case "NEXT_QUESTION":
      const isCorrect = state.selectedOption === questions[state.currentQuestion].answer;
      const nextQuestion = state.currentQuestion + 1;

      return {
        ...state,
        currentQuestion: nextQuestion,
        score: isCorrect ? state.score + 1 : state.score,
        selectedOption: null,
        finished: nextQuestion >= questions.length,
      };

    case "RESET":
      return {
        currentQuestion: 0,
        score: 0,
        selectedOption: null,
        finished: false,
      };

    default:
      return state;
  }
};
