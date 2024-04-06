interface User {
    id: number,
    name: string
}

interface UserCallback {
    (error?: string, user?: User): void
}


const users: User[] = [
    {
        id: 1,
        name: 'Joshua'
    },
    {
        id: 2,
        name: 'Carl'
    },
    {
        id: 3,
        name: 'Steve'
    }
]


const getUserById = (id:number, callback: UserCallback) => {
    const user = users.find( function(user) {
        return user.id === id
    } )

    !user && callback(`The user ${id} does not exist`)

    callback(undefined, user)
}

export {
    getUserById,
}
