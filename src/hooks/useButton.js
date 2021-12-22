/* eslint-disable react-hooks/exhaustive-deps */
import { userColor } from '../helpers'
import { getCurrentUser, patchUser } from '../helpers/users'

export const useButton = () => {
  const setReferenceColor = (time) => {
    const { color } = userColor(time)
    const currentUser = getCurrentUser()
    const updatedUser = { ...currentUser, color, hasClicked: true }
    patchUser(updatedUser)
    return updatedUser
  }

  return setReferenceColor
}
