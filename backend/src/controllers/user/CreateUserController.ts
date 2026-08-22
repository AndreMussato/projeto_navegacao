//Importa os tipos Request e Response do Express (para tipagem)
import { Request, Response } from "express";

//Importa o serviço responsável pela lógica de criação de usuário
import { CreateUserService } from "../../services/user/CreateUserService";

//Define a classe do controller (responsável por lidar com a requisição HTTP)
class CreateUserController {
    
    //Método que será chamado quando a rota for acessada
    async handle(req: Request, res: Response) {

        //Desestrutura os dados enviados no corpo da requisição (body)
        const { name, email, password } = req.body;

        //Exibe os dados recebudis no console (útil para debug)
        console.log({ name, email, password });
        
        //Cria uma instância do service
        const createUserService = new CreateUserService();

        //Executa a lógica de criação de usuário e aguarda o retorno
        const user = await createUserService.execute();

        //Retorna a resposta em JSON para o cliente
        res.json({ message: user });
    }
}

//Exporta o controller para ser usado nas rotas
export { CreateUserController }