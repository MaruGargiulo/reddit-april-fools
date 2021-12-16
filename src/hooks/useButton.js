import { useEffect } from 'react'
import { userColor } from '../helpers'
import { fetchInitialUsers } from '../services/users'
import { getCurrentUser, patchUsers, setCurrentUser } from '../helpers/users'

export const useButton = () => {
  const setReferenceColor = (number) => {
    const { color } = userColor(number)
    const currentUser = getCurrentUser()
    const updatedUser = { ...currentUser, color, hasClicked: true }
    patchUsers(updatedUser)
    setCurrentUser(updatedUser)
  }

  // un intervalo que vaya seteando usuarios hasta terminar de mapearlos

  useEffect(() => {
    fetchInitialUsers()
  }, [])

  return { setReferenceColor }
}
