import { createContext, useReducer, ReactNode } from "react";

import { QuizAction, quizReducer, QuizState } from "@/reducers/QuizReducer";

const initialState: QuizState = {
    currentQuestion: 0,
    score: 0,
    selectedOption: null,
    finished: false,
};

export const QuizContext = createContext<{
    state: QuizState;
    dispatch: React.Dispatch<QuizAction>;
}>({
    state: initialState,
    dispatch: () => null,
});

export const QuizProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(quizReducer, initialState);

    return (
    <QuizContext.Provider value={{ state, dispatch }}>
        {children}
    </QuizContext.Provider>
  );
};
