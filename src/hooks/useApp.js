/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useMemo } from 'react'
import { useCounter } from './useCounter'
import { useButton } from './useButton'
import { useSimulation } from './useSimulation'
import { fetchInitialUsers } from '../services/users'
import { setRandomCurrentUser } from '../utils/users'

const noop = () => {}

export const useApp = () => {
  const [clicked, setClicked] = useState(false)
  const [userLogged, setUserLogged] = useState()

  const [countdown, handleResetCountdown] = useCounter()
  const { buttonRef, clicksCount, usersColorMetrics } = useSimulation(clicked)
  const setReferenceColor = useButton()

  const showMetrics = useMemo(() => clicked, [clicked])

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
    if (!countdown) return noop

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

  return {
    buttonRef,
    clicked,
    countdown,
    providerValue,
    showMetrics,
    handleUserClick,
    buttonLogic,
    userLogged,
  }
}
