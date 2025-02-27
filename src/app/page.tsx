'use client'

import QuestionCard from "@/components/QuizCard";
import { QuizProvider } from "@/contexts/QuizContext";


export default function QuizPage() {
    return (
        <QuizProvider>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
                <QuestionCard />
            </div>
        </QuizProvider>
    );
}
