import { createContext, useReducer } from "react";
import questions from '../data/questions'
import { Stages } from "../constants/Stages";
import { QuizActionTypes } from "../constants/QuizActionTypes";
export const QuizContext = createContext()

const initialState = {
  gameStage: Stages.START,
  questions,
  currentQuestion: 0,
  score: 0,
  answerSelected: false,
}

const quizReducer = (state, action) => {
  switch (action.type) {
    case QuizActionTypes.CHANGE_STATE:
      return {
        ...state,
        gameStage: Stages.PLAYING
      }
    case QuizActionTypes.REODER_QUESTIONS:
      const reorderedQuestions = questions.sort(() => {
        return Math.random() - 0.5
      })
      return {
        ...state,
        questions: reorderedQuestions
      }
    case QuizActionTypes.CHANGE_QUESTION:
      const nextQuestion = state.currentQuestion + 1;
      let endGame = !questions[nextQuestion];

      return {
        ...state,
        gameStage: endGame ? Stages.END : Stages.PLAYING,
        currentQuestion: nextQuestion,
        answerSelected: false,
      }
    case QuizActionTypes.NEW_GAME:
      return initialState
    case QuizActionTypes.CHECK_ANSWER:
      if (state.answerSelected) {
        return state;
      }

      const answer = action.payload.answer
      const option = action.payload.option
      let scoreAnswer = Number(answer === option);

      return {
        ...state,
        score: state.score + scoreAnswer,
        answerSelected: option
      }
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