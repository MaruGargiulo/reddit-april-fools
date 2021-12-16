/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useCallback } from 'react'
import { BASE_COUNTDOWN, INTERVAL } from '../constants'

export const useCounter = () => {
  const [countdown, setCountdown] = useState(BASE_COUNTDOWN)
  const [intervalId, setIntervalId] = useState(null)

  const initializeInterval = useCallback(() => {
    const id = setInterval(() => {
      setCountdown((prevState) => prevState - 1)
    }, INTERVAL)
    setIntervalId(id)
  })

  const handleResetCountdown = useCallback(() => {
    if (!countdown) return
    setCountdown(BASE_COUNTDOWN)
  })

  useEffect(() => {
    initializeInterval()
    return () => clearInterval(intervalId)
  }, [])

  useEffect(() => {
    if (countdown <= 0) clearInterval(intervalId)
  }, [countdown])

  return [countdown, handleResetCountdown]
}
