/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { userColor } from '../helpers'
import { fetchInitialUsers } from '../services/users'
import { getCurrentUser, patchUser } from '../helpers/users'

export const useButton = () => {
  const setReferenceColor = (number) => {
    const { color } = userColor(number)
    const currentUser = getCurrentUser()
    const updatedUser = { ...currentUser, color, hasClicked: true }
    patchUser(updatedUser)
  }

  useEffect(() => {
    fetchInitialUsers()
  }, [])

  return setReferenceColor
}
