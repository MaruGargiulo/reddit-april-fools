/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react'
import { setRandomCurrentUser, randomNumber } from '../helpers/users'
import { BASE_COUNTDOWN } from '../constants'

export const useSimulation = (startSimulation) => {
  const buttonRef = useRef()

  const randomUserButtonClick = () => {
    const user = setRandomCurrentUser()
    if (!user) return false

    buttonRef.current.click()
    return true
  }

  const simulateInteraction = () => {
    let timeoutId
    const randomInterval = randomNumber(BASE_COUNTDOWN * 1000 - 1000)
    const clicked = randomUserButtonClick()

    if (!clicked) return clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      simulateInteraction()
    }, randomInterval)
  }

  useEffect(() => {
    if (startSimulation) simulateInteraction()
  }, [startSimulation])

  return buttonRef
}
