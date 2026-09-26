import prismaCliente from "../../prisma";

class ListCategoryService {

    async execute() {

        try {
            //Busca todas as categorias cadastradas
            const categories = await prismaCliente.category.findMany({

                //Define quais campos serão retornados
                select: {
                    id: true,
                    name: true,
                    createdAt: true,
                },

                //Ordena as categorias pela data de criação
                //"desc" - Mais recentes primeiro
                orderBy: {
                    createdAt: "desc",
                },
            });

            //Retorna a lista de categorias
            return categories;

        } catch(erro) {

            //Lança um erro personalizado
            throw new Error("Falha ao buscar categorias");
        }
    }
}

//Exporta o service para ser utilizado no controller
export { ListCategoryService }