// URL da API
const apiUrl = 'https://jsonplaceholder.typicode.com/users/';
 
// Função para buscar os usuários
async function fetchUsers() {
    try {
        // Fazendo a solicitação GET para a API
        const response = await fetch(apiUrl);
       
        // Verificando se a resposta é bem-sucedida (status de 200 a 299)
        if (!response.ok) {
            throw new Error('Erro ao recuperar usuários');
        }
 
        // Convertendo a resposta para JSON
        const users = await response.json();
 
        // Imprimindo os usuários no console
        console.log('Usuários:', users);
    } catch (error) {
        console.error('Erro:', error);
    }
}
 
// Chamando a função para buscar os usuários
fetchUsers()