'use server'

const token = process.env.TOKEN
const urlApi = process.env.URL_API

export const getAllCountry = async () => {
  const services = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            services: [
                {
                    id: '1',
                    title: 'Serviço 1',
                    description: 'Descrição do serviço 1',
                    price: 10
                },
                {
                    id: '2',
                    title: 'Serviço 2',
                    description: 'Descrição do serviço 2',
                    price: 20
                },
                {
                    id: '3',
                    title: 'Serviço 3',
                    description: 'Descrição do serviço 3',
                    price: 30
                }
            ]
        })
    }, 20000)
} )

const data = await services 

return data

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
