import { useContext } from 'react'
import { QuizContext } from '../../context/QuizContext'
import Option from '../Option'
import './styles.css'

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext)
  const questionsLength = quizState.questions.length
  const indexCurrentQuestion = quizState.currentQuestion
  const currentQuestion = quizState.questions[indexCurrentQuestion]

  const onSelectOption = (option) => {
    // console.log(option, currentQuestion.answer)
    dispatch({
      type: "CHECK_ANSWER",
      payload: { answer: currentQuestion.answer, option }
    })
  }
  return (
    <div id="question">
      <p>Pergunta {indexCurrentQuestion + 1} de {questionsLength}</p>
      <h2>{currentQuestion.question}</h2>
      <div id="options-container">
        {
          currentQuestion.options.map(option => (
            <Option
              key={option}
              option={option}
              answer={currentQuestion.answer}
              selectOption={() => onSelectOption(option)}
            />
          ))
        }
      </div>
      {quizState.answerSelected && <button onClick={() => dispatch({ type: "CHANGE_QUESTION" })}>Continuar</button>}
    </div>
  )
}

export default Question