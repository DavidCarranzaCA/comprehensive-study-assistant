import axios from 'axios'


const headers = {

}
const getUserCards = {

    getAll: () => {
        const config = {
            method: 'GET',
            headers
        }

        return axios('http://localhost:5000/api/user-cards', config)
            .then(onSuccess)
            .catch(onError)
    },

    createUser: (userData) => {
        const config = {
            method: "POST",
            headers,
            data: userData
        }

        return axios(`http://localhost:5000/api/user-cards`, config)
            .then(onSuccess)
            .catch(onError)
    },

    updateUser: (id, userData) => {
        const config = {
            method: 'PUT',
            headers,
            data: userData
        }

        return axios(`http://localhost:5000/api/user-cards/${id}`, config)
            .then(onSuccess)
            .catch(onError)
    },

    deleteUser: (id) => {
        const config = {
            method: 'DELETE',
            headers
        }

        return axios(`http://localhost:5000/api/user-cards/${id}`, config)
            .then(onSuccess)
            .catch(onError)
    }
}

const onSuccess = response => response.data;
const onError = err => {
    console.log(err);
    return Promise.reject(err)
}

export default getUserCards