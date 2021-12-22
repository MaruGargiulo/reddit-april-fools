/* eslint-disable react-hooks/exhaustive-deps */
import { userColor } from '../utils/button'
import { getCurrentUser, patchUser } from '../utils/users'

export const useButton = () => {
  const setReferenceColor = (time) => {
    const { color } = userColor(time)
    const currentUser = getCurrentUser()
    const updatedUser = { ...currentUser, color, hasClicked: time > 0 }
    patchUser(updatedUser)
    return updatedUser
  }

  return setReferenceColor
}
