/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useMemo } from 'react'
import { useCounter } from './hooks/useCounter'
import { useButton } from './hooks/useButton'
import { useSimulation } from './hooks/useSimulation'
import { SimulationContext } from './contexts/SimulationContext'
import { fetchInitialUsers } from './services/users'
import { setRandomCurrentUser } from './helpers/users'

import Button from './components/Button'
import Counter from './components/Counter'
import Nav from './components/Nav/Nav'
import Metrics from './components/Metrics'

import './App.css'

const noop = () => {}

const App = () => {
  const [clicked, setClicked] = useState(false)
  const [userLogged, setUserLogged] = useState()

  const [countdown, handleResetCountdown] = useCounter()
  const { buttonRef, clicksCount, usersColorMetrics } = useSimulation(clicked)
  const setReferenceColor = useButton()

  const providerValue = useMemo(
    () => ({
      clicksCount,
      usersColorMetrics,
      userLogged,
    }),
    [clicksCount, usersColorMetrics, userLogged]
  )

  const buttonLogic = () => {
    const updatedUser = setReferenceColor(countdown)
    handleResetCountdown()
    return updatedUser
  }

  const handleUserClick = () => {
    const updatedUser = buttonLogic()
    setUserLogged(updatedUser)
    setClicked(true)
  }

  useEffect(() => {
    fetchInitialUsers()
    const loggedUser = setRandomCurrentUser()
    setUserLogged(loggedUser)
  }, [])

  useEffect(() => {
    if (countdown === 0) {
      const updatedUser = setReferenceColor(0)
      setUserLogged(updatedUser)
    }
  }, [countdown])

  return (
    <SimulationContext.Provider value={providerValue}>
      <Nav />
      <div className="container">
        <Metrics {...providerValue} />
        <Counter countdown={countdown} />
        <Button
          handleClick={!clicked ? handleUserClick : noop}
          disabled={clicked || !countdown}
          text="Click Me"
          theme="primary"
        />
        {(clicked || countdown === 0) && <div>{userLogged.color}</div>}
      </div>
      <Button hidden handleClick={buttonLogic} ref={buttonRef} />
    </SimulationContext.Provider>
  )
}

export default App
