//Importa os tipos Request e Response do Express
//Request representa a requisição (dados que chegam)
//Response representa a resposta (dados que serão enviados)
import { Request, Response } from "express";

//Importa o serviço responsável pela autenticação do usuário
import { AuthUserService } from "../../services/user/AuthUserService";

//Cria a classe do controller de autenticação
class AuthUserController {

    //Método que será chamado quando a rota de login for acessada
    async handle(req: Request, res: Response ) {
        //Extrai email e senha do corpo da requisição (body)
        const { email, password } = req.body;

        //Instancia o serviço de autenticação
        const authService = new AuthUserService();

        //Executa o servço passando email e senha
        //Esse método vai validar usuário e gerar o token
        const session = await authService.execute({ email, password });

        //Retorna os dados (incluindo o token) em formato JSON
        res.json(session);
    }
}

/* DICA: Controller = recebe a requisição
Service = faz a lógica (validação, banco, etc) */

//Exporta o controller para ser usado nas rotas
export { AuthUserController };