const USERS = [
    {
        id: 1,
        name: 'John Doe',
        age: 38,
    },
    {
        id: 2,
        name: 'Jane Doe',
        age: 35,
    },
    {
        id: 3,
        name: 'Joshua',
        age: 33,
    },
    {
        id: 4,
        name: 'Ken',
        age: 18,
    },
    {
        id: 5,
        name: 'Louis',
        age: 26,
    },
]

function getUserById(id, callback) {
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
