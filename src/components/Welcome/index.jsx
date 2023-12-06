import { useContext } from 'react'
import QuizImg   from '../../img/quiz.svg'
import './styles.css'
import { QuizContext } from '../../context/QuizContext'

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext)

  return (
    <div id="welcome">
      <h2>Seja bem-vindo</h2>
      <p>Clique no botão abaixo para iniciar</p>
      <button onClick={() => dispatch({ type: 'CHANGE_STATE'})}>Iniciar</button>
      <img src={QuizImg } alt="" />
    </div>
  )
}

export default Welcome