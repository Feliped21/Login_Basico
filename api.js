// URL DA API
const apiUrl = 'https://viacep.com.br/ws/74665580/json/';

// Função para buscar os ceps
async function fetchCeps() {
    try {
        // Fazendo a solicitação GET para a API
        const response = await fetch(apiUrl);

        // Verificando se a resposta é bem-sucedida (status de 200 a 299)
        if (!response.ok) {
            throw new Error('Erro ao recuperar dados do CEP');
        }

        // Convertendo a resposta para JSON
        const cepData = await response.json();

        // Imprimindo os dados do CEP no console
        console.log('CEP:', cepData);
    } catch (error) {
        console.error('Erro:', error);
    }
}

// Chamando a função para buscar CEPs
fetchCeps();
