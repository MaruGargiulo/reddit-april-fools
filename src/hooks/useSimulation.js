/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from 'react'
import {
  setRandomCurrentUser,
  randomNumber,
  usersMetrics,
} from '../utils/users'
import { BASE_COUNTDOWN } from '../constants'

export const useSimulation = (buttonClicked) => {
  const buttonRef = useRef()
  const [clicksCount, setClicksCount] = useState(1)
  const [usersColorMetrics, setUsersColorMetrics] = useState([])

  const randomUserButtonClick = () => {
    const user = setRandomCurrentUser()
    if (!user) return false

    buttonRef.current.click()
    setClicksCount((prevState) => prevState + 1)
    setUsersColorMetrics(usersMetrics())
    return true
  }
  
  const simulateInteraction = () => {
    let timeoutId
    const randomInterval = randomNumber(BASE_COUNTDOWN * 1000 - 1000)
    timeoutId = setTimeout(() => {
      const clicked = randomUserButtonClick()

      if (!clicked) return clearTimeout(timeoutId)
      simulateInteraction()
    }, randomInterval)
  }

  useEffect(() => {
    if (buttonClicked) simulateInteraction()
  }, [buttonClicked])

  return { buttonRef, clicksCount, usersColorMetrics }
}
