import { Request, Response, NextFunction } from "express";

import prismaCliente from "../prisma";
import { error } from "node:console";

//Cria e exporta  um middleware chamado isAdmin
//Ele verifica se o usuário logado possui permissão de administrador
//O async permite usar await dentro da função
//Promise<void> indica que essa função não retorna dados diretamente
export const isAdmin = async (
    req: Request,
    res: Response,
    next: NextFunction
) : Promise<void> => {

    //Pega o ID do usuário dentro da requisição
    //Esse user_id normalmente foi adicionado antes pelo middleware isAuthenticated
    const user_id = req.user_id;

    //Verifica se não existe user_id na requisição
    //Isso indica que o usuário não está autenticado corretamente
    if(!user_id) {
        
        //Retorna status 401, indicando que o usuário não tem autorização 
        res.status(401).json({
            error: "Usuário sem permissão",
        });

        //Encerra a execução do middleware
        //Isso impede que o código continue
        return;
    }

    //Busca no banco dados do usuário com o ID recebido
    const user = await prismaCliente.user.findFirst({

        //Define que a condição da busca tem que ser o id recebido
        //Ou seja, procura o usuário cujo id seja igual ao user_id
        where: {
            id: user_id
        }
    });

    //Verifica se nenhum usuário foi encontrado no banco
    if(!user) {
        
        //Retorna erro 401 informado falta de permissão
        res.status(401).json({
            error: "Usuário sem permissão",
        });

        //Para a execução do middleware
        return;
    }

    //Verifica se o tipo/perfil do usuário é diferente de ADMIN
    //Se não dor ADMIN, ele não pode acessar a rota protegida
    if(user.role !== "ADMIN") {

        //Retorna erro 401 informando falta de permissão
        res.status(401).json({
            error: "Usuário sem permissão",
        });

        //Encerra a execução para não liberar acesso
        return;
    } 

    //Usuário é admin... então segue normal...
    //Chama o próximo middleware ou controller da rota
    //Só chega aqui se o usuário existir e tiver role ADMIN
    next();
}

//Resumo do fluxo:
//Pega user_id -> busca usuário no banco -> verifica se existe -> Verifica se é ADMIN -> libera acesso