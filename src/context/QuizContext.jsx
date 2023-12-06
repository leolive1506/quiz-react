import { createContext, useReducer } from "react";
import questions from '../data/questions'
export const QuizContext = createContext()

const STAGES = ["Start", "Playing", "End"]

const initialState = {
  gameStage: STAGES[0],
  questions,
  currentQuestion: 0,
  score: 0
}

const quizReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_STATE":
      return {
        ...state,
        gameStage: STAGES[1]
      }
    case "REODER_QUESTIONS":
      const reorderedQuestions = questions.sort(() => {
        return Math.random() - 0.5
      })
      return {
        ...state,
        questions: reorderedQuestions
      }
    case "CHANGE_QUESTION":
      const nextQuestion = state.currentQuestion + 1;
      let endGame = !questions[nextQuestion];

      return {
        ...state,
        gameStage: endGame ? STAGES[2] : STAGES[1],
        currentQuestion: nextQuestion,
      }
    case "NEW_GAME":
      return initialState
    default: state
  }
}

export const QuizProvider = ({ children }) => {
  const value = useReducer(quizReducer, initialState)
  return (
    <QuizContext.Provider value={value}>
      {children}
    </QuizContext.Provider>
  )
}