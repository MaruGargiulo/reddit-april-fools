import { API } from '../env'
import { setCurrentUser, saveUsers } from '../helpers/users'

// shapes each user object
const modelUsers = (users) =>
  users.map((user) => {
    const { id, name, username, email } = user
    return {
      id,
      name,
      username,
      email,
      color: null,
      hasClicked: false,
    }
  })

// fetch users, returns an array with modeled users
export const fetchInitialUsers = async () => {
  const res = await fetch(`${API}/users`)
  const users = await res.json()
  const shapedUsers = modelUsers(users)
  saveUsers(shapedUsers)
  setCurrentUser(shapedUsers[0])
}
