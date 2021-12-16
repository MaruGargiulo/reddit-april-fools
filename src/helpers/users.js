const USERS = 'users'
const CURRENT_USER = 'currentUser'

// saves users into localStorage
export const saveUsers = (usersArr) =>
  localStorage.setItem(USERS, JSON.stringify(usersArr))

// gets users from localStorage
export const getAllUsers = () => JSON.parse(localStorage.getItem(USERS))

// get current user localStorage
export const getCurrentUser = () =>
  JSON.parse(localStorage.getItem(CURRENT_USER))

// set current user
export const setCurrentUser = (user) =>
  localStorage.setItem(CURRENT_USER, JSON.stringify(user))

export const patchUser = (updatedUser) => {
  const allUsers = getAllUsers()
  const patchedUsers = allUsers.map((user) => {
    if (user.id !== updatedUser.id) return user
    return { ...updatedUser }
  })
  saveUsers(patchedUsers)
  setCurrentUser(updatedUser)
}
