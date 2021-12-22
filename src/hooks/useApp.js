/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useMemo } from 'react'
import { useCounter } from './useCounter'
import { useButton } from './useButton'
import { useSimulation } from './useSimulation'
import { fetchInitialUsers } from '../services/users'
import {
  setRandomCurrentUser,
  getLoggedUser,
  setLoggedUser,
} from '../utils/users'

const noop = () => {}

export const useApp = () => {
  const [clicked, setClicked] = useState()
  const [currentUser, setCurrentUser] = useState()

  const [countdown, handleResetCountdown] = useCounter()
  const { buttonRef, clicksCount, usersColorMetrics } = useSimulation(clicked)
  const setReferenceColor = useButton()

  const showMetrics = useMemo(() => clicked, [clicked])

  const providerValue = useMemo(
    () => ({
      clicksCount,
      usersColorMetrics,
      currentUser,
    }),
    [clicksCount, usersColorMetrics, currentUser]
  )

  const buttonLogic = () => {
    const updatedUser = setReferenceColor(countdown)
    handleResetCountdown()
    return updatedUser
  }

  const handleUserClick = () => {
    if (!countdown) return noop

    const updatedUser = buttonLogic()
    setCurrentUser(updatedUser)
    setLoggedUser(updatedUser)
    setClicked(true)
  }

  useEffect(() => {
    fetchInitialUsers()
    const loggedUser = getLoggedUser()
    if (loggedUser) {
      setCurrentUser(loggedUser)
      setClicked(loggedUser.hasClicked)
    } else {
      const randomLogIn = setRandomCurrentUser()
      setCurrentUser(randomLogIn)
      setLoggedUser(randomLogIn)
    }

  }, [])

  useEffect(() => {
    if (countdown === 0) {
      const updatedUser = setReferenceColor(0)
      setCurrentUser(updatedUser)
      setLoggedUser(updatedUser)
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
    userLogged: currentUser,
  }
}
