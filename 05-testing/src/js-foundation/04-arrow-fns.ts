import { USERS, User } from '../data/users.data'

export const getUserById = (id: number, callback:(user:User) => void) => {
    const user = USERS.find((user) => id === user.id)

    if (!user) {
        throw new Error('Error: User not found')
    }

    return callback(user)
}
