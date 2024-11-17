export const getPostBySlug = async (id) => {
    try {
        // Fazendo a requisição para a API com o id fornecido
        const { data } = await api.get(`/post?id=eq.${id}`);
        
        // Verifica se há dados e os retorna
        if (data && data.length > 0) {
            return data[0]; // Supondo que `id` seja único
        }

        // Retorna um objeto vazio caso o post não seja encontrado
        return {};
    } catch (error) {
        console.error('Erro ao buscar o post:', error);
        // Retorna um objeto vazio em caso de erro
        return {};
    }
};
