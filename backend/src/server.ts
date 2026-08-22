//Importa o middleware CORS (permite requisições de diferentes origens)
import cors from "cors";

//Carrega automaticamente as variáveis de ambiente do arquivo .env
import "dotenv/config";

//Importa o Express (framework para criar o servidor)
import express from "express";

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