//Importa os tipos Request e Response (para tipagem das requisições e respostas)
//e o Router (para criar rotas separadas no Exoress)
import { Request, Response, Router } from "express";

//Importa o controller responsável por lidar com a criação de usuários
import { CreateUserController } from "./controllers/user/CreateUserController";

//Importa o middleware de validação com zod
import { validateSchema } from "./middlewares/validateSchema";

//Importa o schema que define as regras de validação para criação de um usuário
import { createUserSchema } from "./schemas/userSchema";

//Cria uma instância de roteador do Express
const router = Router();

//Define uma rota POST para o endpoint "/users"
router.post("/users",
    //Middleware que valida os dados da requisição (body, query e params)
    //antes de chegar no controller
    validateSchema(createUserSchema),

    //Controller responsável por processar a requisição
    //e executar a lógica de criação do usuário
    new CreateUserController().handle
);

//Exporta o router para ser utilizado em outros arquivos (ex: no app principal)
export { router };