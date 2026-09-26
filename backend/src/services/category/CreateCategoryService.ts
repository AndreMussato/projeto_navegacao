import prismaCliente from "../../prisma";

//Interface que define os dados necessário para criar uma categoria
//Serve para tipar os parâmetros recebidos pelo service
interface CreateCategoryProps {
    //Define que o nome da categoria deve ser uma string
    name: string;
}

//Classe Responsável pela lógica de criação de categorias
//Services normalmente contém as regras de negócio da aplicação
class CreateCategoryService {

    //Método assíncrono responsável por criar uma categoria
    //Recebe os dados tipados pela interface CreateCategoryProps
    async execute({ name } : CreateCategoryProps) {

        //Bloco de tentativa para tratar possíveis erros
        try {

            //Cria uma nova categoria da tabela "category" do banco
            //Utiliza o Prisma para realizar o INSERT
            const category = await prismaCliente.category.create({
                //Dados que serão salvos no banco
                data: {
                    //Salva o nome recebido no parâmetro
                    name: name
                },

                //Define quais campos serão retornados após a criação
                //Isso evita retornar informações desnecessárias
                select: {
                    //Retorna o ID da categoria criada
                    id: true,
                    name: true,
                    createdAt: true,
                }
            })

            //Retorna a categoria cadastrada
            return category;
        } catch (erro) {
            //Lança um novo erro personalizado
            //Esse erro pode ser tratado no middleware global de erros
            throw new Error("Falha ao criar Categoria")
        }
    }
}

export { CreateCategoryService }