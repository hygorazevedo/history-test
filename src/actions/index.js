export const CREATE_USER = 'CREATE_USER'
export const DELETE_USER = 'DELETE_USER'

export function createUser(user) {
    return {
        type: 'CREATE_USER',
        user
    }
}

export function deleteUser(id) {
    return {
        type: 'DELETE_USER',
        id
    }
}