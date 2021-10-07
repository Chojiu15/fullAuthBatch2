import axios from 'axios'

export const register = newUser => {
    return axios.post('http://localhost:3002/user/register', {
        name : newUser.name,
        email : newUser.email,
        password : newUser.password
    })
    .then(res => console.log('Registred'))
    .catch(err => console.log(err))
}

export const login = user => {
    return axios.post('http://localhost:3002/user/login', {
        email : user.email,
        password : user.password
    })
    .then(res => {
        localStorage.setItem('usertoken', res.data)
        return res.data
    }) 
    .catch(err => console.error(err))
}