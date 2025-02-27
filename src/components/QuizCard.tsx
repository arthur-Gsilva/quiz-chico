import { useContext } from "react";
import { questions } from "../data/questions";
import { QuizContext } from "@/contexts/QuizContext";

export default function QuestionCard() {
    const { state, dispatch } = useContext(QuizContext);

    return (
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
            {state.finished ? (
                <div className="text-center">
                    <h1 className="text-2xl font-bold">Quiz finalizado!</h1>

                    <p className="text-lg">
                        Você acertou {state.score} de {questions.length} perguntas.
                    </p>
                    
                    <button
                        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
                        onClick={() => dispatch({ type: "RESET" })}
                    >
                        Jogar novamente
                    </button>
                </div>
            ) : (
            <>
                <h2 className="text-xl font-semibold mb-4">
                    {questions[state.currentQuestion].question}
                </h2>
                <div className="flex flex-col space-y-2">

                {questions[state.currentQuestion].options.map((option) => (
                    <button
                        key={option}
                        onClick={() => dispatch({ type: "SELECT_OPTION", payload: option })}
                        className={`p-2 rounded-md border cursor-pointer ${
                            state.selectedOption === option ? "bg-blue-500 text-white" : "bg-gray-200"
                        }`}
                    >
                        {option}
                    </button>
                ))}

                </div>

                <button
                    className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md cursor-pointer disabled:opacity-50 disabled:cursor-auto"
                    disabled={!state.selectedOption}
                    onClick={() => dispatch({ type: "NEXT_QUESTION" })}
                >
                    {state.currentQuestion + 1 === questions.length ? "Finalizar" : "Próxima"}
                </button>
            </>
            )}
        </div>
    );
}
