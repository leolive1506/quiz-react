import Welcome from './components/Welcome'
import './App.css'
import { useContext, useEffect } from 'react'
import { QuizContext } from './context/QuizContext'
import Question from './components/Question'

function App() {
  const [quizState, dispatch] = useContext(QuizContext)

  useEffect(() => {
    dispatch({ type: "REODER_QUESTIONS" })
  }, [])

  return (
    <div className="App">
      <h1>Quiz de programação</h1>
      { quizState.gameStage === "Start" && <Welcome />}
      { quizState.gameStage === "Playing" && <Question />}
    </div>
  )
}

export default App
