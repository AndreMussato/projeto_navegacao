//Importa o middleware CORS (permite requisições de diferentes origens)
import cors from "cors";

//Carrega automaticamente as variáveis de ambiente do arquivo .env
import "dotenv/config";

//Importa o Express (framework para criar o servidor)
import express, { NextFunction, Request, Response } from "express";

//Importa as rotas definidas em outro arquivo
import { router } from "./routes";

//Cria a aplicação Express
const app = express();

//Permite que a API entenda requisições com corpo em JSON
app.use(express.json());

//Habilita o CORS para permitir acesso de outros domínios (ex: frontend)
app.use(cors());

//Usa as rotas importadas (todas as rotas definidas em ./routes serão aplicadas aqui)
app.use(router);

//Define a porta do servidor
//Usa a variável de ambiente PORT, ou 3333 como padrão
const PORT = process.env.PORT! || 3333;

//Inicia o servidor e exibe uma mensagem no console quando estiver rodando
app.listen(PORT, () => {
    console.log("Servidor rodando na porta " + PORT);
});

//Middleware global de tratamento de erros do Express
//Ele captura qualquer erro lançado na aplicação (ex: throw new Error)
app.use((error: Error, _: Request, res: Response, next: NextFunction) => {
    
    //Verifica se o erro é uma instância da classe Error
    if(error instanceof Error) {
        //Retorna status 400 (erro do cliente) com a mensagem do erro
        return res.status(400).json({
            error: error.message,
        })
    }

    //Caso não seja um erro conhecido, retorna erro genérico do servidor
    return res.status(500).json({
        error: "Internal server error!"
    })
})