/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react'
import { userColor } from '../helpers'
import { fetchInitialUsers } from '../services/users'
import {
  getCurrentUser,
  patchUser,
  setRandomCurrentUser,
} from '../helpers/users'

export const useButton = () => {
  const buttonRef = useRef()

  const setReferenceColor = (number) => {
    const { color } = userColor(number)
    const currentUser = getCurrentUser()
    const updatedUser = { ...currentUser, color, hasClicked: true }
    patchUser(updatedUser)
  }

  const initializeApp = () => {
    const buttonIntervalId = setInterval(() => {
      const user = setRandomCurrentUser()
      if (!user) return clearInterval(buttonIntervalId)
      buttonRef.current.click()
    }, [7000])
  }

  useEffect(() => {
    fetchInitialUsers()
    initializeApp()
  }, [])

  return { setReferenceColor, buttonRef }
}
