'use server'

const token = process.env.TOKEN
const urlApi = process.env.URL_API

export const getAllCountry = async () => {
  

    const paises = await fetch(`${urlApi}/countries/all`, {
        method: 'GET',
        headers : {
            Authorization: `Bearer ${token}`
        }
    })
    
    const data = await paises.json()

    // console.log(paises)
    return data
}


export const getCountry = async ({countryId}: {countryId: string}) => {

    return await fetch(`${urlApi}/countries/select`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.TOKEN}`
        },
        body: JSON.stringify({ country_id: countryId })
      })
        .then(response => response.json())
        .then(data => data)
        .catch(error => error)
}
