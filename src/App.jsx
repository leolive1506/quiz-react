import { useContext, useEffect } from 'react'
import { QuizContext } from './context/QuizContext'
import Welcome from './components/Welcome'
import Question from './components/Question'
import GameOver from './components/GameOver'
import { QuizActionTypes } from './constants/QuizActionTypes'
import './App.css'

function App() {
  const [quizState, dispatch] = useContext(QuizContext)

  useEffect(() => {
    dispatch({ type: QuizActionTypes.REODER_QUESTIONS })
  }, [])

  return (
    <div className="App">
      <h1>Quiz de programação</h1>
      { quizState.gameStage === "Start" && <Welcome />}
      { quizState.gameStage === "Playing" && <Question />}
      { quizState.gameStage === "End" && <GameOver />}
    </div>
  )
}

export default App
