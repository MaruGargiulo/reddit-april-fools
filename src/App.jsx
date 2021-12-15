import { useCounter } from './hooks/useCounter'
import { userColor } from './helpers'
import Button from './components/Button'
import Counter from './components/Counter'

import './App.css'

const App = () => {
  const [countdown, handleResetCountdown] = useCounter()

  const handleClick = () => {
    console.log(userColor(countdown))
    handleResetCountdown()
  }

  return (
    <div className="app">
      <Button handleClick={handleClick} disabled={!countdown} />
      <Counter countdown={countdown} />
    </div>
  )
}

export default App
