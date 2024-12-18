'use server'

const token = process.env.TOKEN
const urlApi = process.env.URL_API

export const getAllOperadoras = async ({countryId, serviceShort}: {countryId: string, serviceShort: string}) => {
    console.log('getAllOperadoras', countryId, serviceShort)

    try {
      const paises = await fetch(`${urlApi}/services/operators`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({
            country_id: countryId,
            service_short: serviceShort
          })
      })
      console.log('paises', paises)
      const data = await paises.json()


      console.log('getAllOperadoras', data)
      return data
    } catch (error) {
      console.error('Erro ao buscar as operadoras:', error)
    }
}