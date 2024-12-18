'use server'

const token = process.env.TOKEN
const urlApi = process.env.URL_API


export const getAllServices = async () => {

    return await fetch(`${urlApi}/services/all`, {
        method: 'GET',
        headers : {
            Authorization: `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(data => data)
    .catch(error => error)
}