import { useEffect, useRef } from 'react'
import { userColor } from '../helpers'
import { fetchInitialUsers } from '../services/users'
import { getCurrentUser, patchUser } from '../helpers/users'

export const useButton = () => {
  const buttonRef = useRef()

  const setReferenceColor = (number) => {
    const { color } = userColor(number)
    const currentUser = getCurrentUser()
    const updatedUser = { ...currentUser, color, hasClicked: true }
    patchUser(updatedUser)
  }

  // un intervalo que vaya seteando usuarios hasta terminar de mapearlos

  useEffect(() => {
    fetchInitialUsers()
    setInterval(() => {
      buttonRef.current.click()
    }, [7000])
  }, [])

  return { setReferenceColor, buttonRef }
}
