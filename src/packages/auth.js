import {a} from './token/app'

export default (to, from, next) => {
    if (a.isAuthenticated()) {
        next()
    } else {
        next('/')
    }

}