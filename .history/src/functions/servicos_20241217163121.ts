'use server'

const token = process.env.TOKEN
const urlApi = process.env.URL_API


export const getAllServices = async () => {

    // const servicos = await fetch(`${urlApi}/services/all`, {
    //     method: 'GET',
    //     headers : {
    //         Authorization: `Bearer ${token}`
    //     }
    // })

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
    console.log('getAllServices')
    // console.log('servicos.services[0]', servicos.services[0])
    return data
}