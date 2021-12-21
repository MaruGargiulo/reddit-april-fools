import { useState } from 'react'
import { useCounter } from './hooks/useCounter'
import { useButton } from './hooks/useButton'
import { useSimulation } from './hooks/useSimulation'

import Button from './components/Button'
import Counter from './components/Counter'

import './App.css'

const noop = () => {}

const App = () => {
  const [disabled, setDisabled] = useState(false)
  const [startSimulation, setStartSimulation] = useState(false)

  const buttonRef = useSimulation(startSimulation)
  const setReferenceColor = useButton()
  const [countdown, handleResetCountdown] = useCounter()
  
  const handleClick = () => {
    if (disabled) return noop
    
    setReferenceColor(countdown)
    handleResetCountdown()
    setDisabled(true)
    setStartSimulation(true)
  }

  return (
    <>
      <div className="app">
        <Button handleClick={handleClick} disabled={disabled || !countdown} />
        <Counter countdown={countdown} />
      </div>
      <Button
        style={{ visibility: 'hidden' }}
        handleClick={() => {
          setReferenceColor(countdown)
          handleResetCountdown()
        }}
        ref={buttonRef}
      />
    </>
  )
}

export default App
