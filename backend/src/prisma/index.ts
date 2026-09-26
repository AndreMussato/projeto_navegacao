//Carrega automaticamente as variáveis de ambiente do arquivo .env
import "dotenv/config"

//Importa o PrismaClient gerado (responsável por fazer consultas no banco)
import { PrismaClient } from "../generated/prisma/client";

//Importa o adpater para PostgreSQL (usado para conectar via driver pg)
import { PrismaPg } from "@prisma/adapter-pg";

//Obtém a string de conexão do banco a partir do .env
const connectionString = `${process.env.DATABASE_URL!}`;

//Cria uma instância do adapter passando a connectionString
//Esse adapter faz a ponte entre o Prisma e o PostgreSQL
const adapter = new PrismaPg({ connectionString });

//Cria a instância do PrismaClient configurada com o adapter
//Essa será usada para acessar o banco (CRUD: create, read, update, delete)
const prismaCliente = new PrismaClient({ adapter });

//Exporta a instância do Prisma para ser reutilizada em toda a aplicação
export default prismaCliente;