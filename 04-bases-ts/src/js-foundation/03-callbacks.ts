import { User, USERS } from '../data/users.data'


export function getUserById(id:number, callback:(user:User) => void) {
    const user = USERS.find(function(user) {
        return id === user.id
    })

    if (!user) {
        throw new Error('Error: User not found')
    }

    return callback(user)
}

module.exports = {
    getUserById,
}
