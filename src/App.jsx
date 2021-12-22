import { useState } from 'react'
import { useCounter } from './hooks/useCounter'
import { useButton } from './hooks/useButton'
import { useSimulation } from './hooks/useSimulation'

import Button from './components/Button'
import Counter from './components/Counter'
import Nav from './components/Nav/Nav'

import './App.css'

const noop = () => {}

const App = () => {
  const [disabled, setDisabled] = useState(false)
  const [startSimulation, setStartSimulation] = useState(false)

  const [countdown, handleResetCountdown] = useCounter()
  const buttonRef = useSimulation(startSimulation)
  const setReferenceColor = useButton()

  const handleClick = () => {
    setReferenceColor(countdown)
    handleResetCountdown()
    setDisabled(true)
    setStartSimulation(true)
  }

  return (
    <>
      <Nav />
      <div className="container">
        <Counter countdown={countdown} />
        <Button
          handleClick={!disabled ? handleClick : noop}
          disabled={disabled || !countdown}
          text="Click Me"
          theme="primary"
        />
      </div>
      <Button
        hidden
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
