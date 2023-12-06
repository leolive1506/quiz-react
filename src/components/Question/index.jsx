import { useContext } from 'react'
import { QuizContext } from '../../context/QuizContext'
import Option from '../Option'
import './styles.css'

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext)
  const questionsLength = quizState.questions.length
  const indexCurrentQuestion = quizState.currentQuestion 
  const currentQuestion = quizState.questions[indexCurrentQuestion] 

  return (
    <div id="question">
      <p>Pergunta { indexCurrentQuestion + 1 } de { questionsLength }</p>
      <h2>{currentQuestion.question}</h2>
      <div id="options-container">
        {
          currentQuestion.options.map(option => (
            <Option option={option} key={option} />
          ))
        }
      </div>
      <button onClick={() => dispatch({ type: "CHANGE_QUESTION" })}>Continuar</button>
    </div>
  )
}

export default Question