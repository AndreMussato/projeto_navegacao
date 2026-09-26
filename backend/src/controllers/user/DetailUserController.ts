import { Request, Response } from "express";

//Importa o service responsável por buscar os detalhes
import { DetailUserService } from "../../services/user/DetailUserService";

class DetailUserController {

    //Cria o método assíncrono handle
    //Esse método será chamado quando a rota de detalhes do usuário
    //for acessada, o async permite usar o await dentro dele
    async handle(req: Request, res: Response) {

        //Pega o IS do usuário que está salvo dentro da requisição
        //Normalmente esse req.user_id é adicionado por um middleware de autenticação
        //Exemplo: o middleware valida o token JWT e coloca o ID do usuário em req.user_id
        const user_id = req.user_id;

        //Cria uma instância da classe DetailUserService
        //Esse service contém a regra de negócio para buscar os dados do usuário
        const detailUser = new DetailUserService();

        //Chama o método execute do service, passando o ID do usuário
        //O await vai esperar a busca no banco de dados terminar
        //O resultado será armazenado na variável user
        const user = await detailUser.execute(user_id);

        //Retorna os dados do usuário em formato JSON como resposta da API
        return res.json(user)

    }
}

export { DetailUserController };