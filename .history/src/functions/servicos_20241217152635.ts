'use server'

const token = process.env.TOKEN
const urlApi = process.env.URL_API


export const getAllServices = async () => {

    const servicos = await fetch(`${urlApi}/services/all`, {
        method: 'GET',
        headers : {
            Authorization: `Bearer ${token}`
        }
    })
    
    
    // console.log('servicos.services[0]', servicos.services[0])
    return servicos
}