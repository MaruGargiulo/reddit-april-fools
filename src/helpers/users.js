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
const setCurrentUser = (user) =>
  localStorage.setItem(CURRENT_USER, JSON.stringify(user))

const filterUsersNotClicked = (users) => {
  const usersNotClicked = users.filter(({ hasClicked }) => !hasClicked)
  return [usersNotClicked, !usersNotClicked.length]
}

export const randomNumber = (top) => Math.floor(Math.random() * top)

export const setRandomCurrentUser = () => {
  const allUsers = getAllUsers()
  const [usersNotClicked, empty] = filterUsersNotClicked(allUsers)
  if (empty) return null

  const index = randomNumber(usersNotClicked.length)
  const randomUser = usersNotClicked[index]
  setCurrentUser(randomUser)
  return randomUser
}

export const patchUser = (updatedUser) => {
  const allUsers = getAllUsers()
  const patchedUsers = allUsers.map((user) => {
    if (user.id !== updatedUser.id) return user
    return { ...updatedUser }
  })
  saveUsers(patchedUsers)
  setCurrentUser(updatedUser)
}

export const interactiveFlow = () => {}
