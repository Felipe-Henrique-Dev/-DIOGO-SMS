'use server'

const token = process.env.TOKEN
const urlApi = process.env.URL_API

export const getAllOperadoras = async ({countryId, serviceShort}: {countryId: string, serviceShort: string}) => {

    const paises = await fetch(`${urlApi}/services/operators`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          country_id: countryId,
          service_short: serviceShort
        })
    })
    
    const data = await paises.json()


    console.log('getAllOperadoras', data)
    return data
}