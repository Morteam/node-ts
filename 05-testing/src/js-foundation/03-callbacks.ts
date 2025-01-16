import { User, USERS } from '@/data/users.data'


export function getUserById(id:number, callback:(user:User) => void) {
    let result

    const user = USERS.find(function(user) {
        return id === user.id
    })

    if (!user) {
        throw new Error('Error: User not found')
    }

    setTimeout(() => {
        result = callback(user)
    }, 4000)

    return result
}
