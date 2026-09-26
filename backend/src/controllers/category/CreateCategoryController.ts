import { Request, Response } from "express";

import { CreateCategoryService } from "../../services/category/CreateCategoryService";

class CreateCategoryController {

    async handle(req: Request, res: Response) {
        
        /*Pega o campo "nome" enviado no corpo da requisição
        Exemplo:
        {
            "name:" "Bebidas"
        } */
        const { name } = req.body;

        //Cria uma instância do service de criação de categoria
        const createCategory = new CreateCategoryService();

        //Chama o método executado do service
        //Envia o nome da categoria para ser salvo no banco
        //O await espera a operação terminar
        const category = await createCategory.execute({ name: name})

        //Retorna status HTTP 201 (Created)
        //Indica que um novo registro foi criado com sucesso
        //Também retorna os dados da categoria criada em JSON
        res.status(201).json(category)

    }
}

export { CreateCategoryController }