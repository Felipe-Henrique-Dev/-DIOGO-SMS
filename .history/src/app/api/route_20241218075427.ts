/* eslint-disable @typescript-eslint/no-explicit-any */



export const GET = async () => {
    console.log('GET')

    // Função para criar um pagamento
    async function criarPagamento({customerId, amount, txId}: {customerId: string, amount: number, txId: string}) {
    const url = 'https://virtuasms.com/payments/register';
    
    const payload = {
        customer_id: customerId,
        amount: amount,
        tx_id: txId
    };
    
    try {
        const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.TOKEN}`
        },
        body: JSON.stringify(payload)
        });
        
        if (!response.ok) {
        throw new Error(`Erro: ${response.status} ${response.statusText}`);
        }
        
        const dados = await response.json();
        console.log('Pagamento criado com sucesso:', dados);
    } catch (error : any) {
        console.error('Erro ao criar o pagamento:', error.message);
    }
    }

    // Chame a função com os parâmetros desejados
    criarPagamento({customerId: '8503c9d4-e3ac-4891-8843-70d2cad1e73e', amount: 100, txId: 'abc123'});


    return new Response('ok')
}