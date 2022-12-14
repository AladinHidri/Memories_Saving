import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes'


export default (posts = [], action) => {
    switch (action.type) {

        case DELETE:
            // retourner les posts sauf celle qui a été supprimé
            return posts.filter((post) => post._id !== action.payload)
        case UPDATE:
            return posts.map((post) => (post._id === action.payload._id ? action.payload : post))
        case FETCH_ALL:
            return action.payload
        case CREATE:
            //action.payload : le resultat de l'ajout
            return [...posts, action.payload]
        default:
            return posts
    }
}