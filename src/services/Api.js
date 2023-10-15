import axios from "axios"


// base de dados para consumo da API
const api = axios.create({

    baseURL: 'https://api.themoviedb.org/3/', //URL BASE
    // PARAMETROS ULTILIZADOS
    params: {
        api_key: 'ed2113b62a75455680a38dc9a8433142',  // chave de acesso a API
        language: 'pt-BR', 
        page: 1
    }
})

export default api