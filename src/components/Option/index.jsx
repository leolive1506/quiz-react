import { useContext } from 'react'
import { QuizContext } from '../../context/QuizContext'
import './styles.css'

const Option = ({ option, answer, selectOption }) => {
  const [quizState] = useContext(QuizContext)
  const { answerSelected } = quizState
  let dynamicClass = ''

  if (answerSelected === option) {
    dynamicClass = answerSelected === answer ? 'correct' : 'wrong'    
  }

  return (
    <div
      className={`option ${dynamicClass}`}
      onClick={selectOption}
    >
      <p>{option}</p>
    </div>
  )
}

export default Option