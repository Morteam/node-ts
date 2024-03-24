const users = [
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


const getUserById = (id, callback) => {
    const user = users.find(user => user.id === id)

    !user && callback(`The user ${id} does not exist`)

    callback(null, user)
}

module.exports = {
    getUserById,
}
