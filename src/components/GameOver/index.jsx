import { useContext } from 'react'
import { QuizContext } from '../../context/QuizContext'
import WellDone from "../../img/welldone.svg"
import './styles.css'

const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext)
  const score = quizState.score
  const length = quizState.questions.length

  return (
    <div id="game-over">
      <h2>Fim de jogo!</h2>
      <p>Pontuação: {score}</p>
      <p>Voce acertou {score} de {length} perguntas</p>
      <img src={WellDone} alt="Fim do jogo" />
      <button onClick={() => dispatch({ type: "NEW_GAME" })}>Reiniar</button>
    </div>
  )
}

export default GameOver