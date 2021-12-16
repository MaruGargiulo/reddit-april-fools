import { useCounter } from './hooks/useCounter'
import { useButton } from './hooks/useButton'

import Button from './components/Button'
import Counter from './components/Counter'

import './App.css'

const App = () => {
  const [countdown, handleResetCountdown] = useCounter()
  const { setReferenceColor } = useButton()

  const handleClick = () => {
    setReferenceColor(countdown)
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
