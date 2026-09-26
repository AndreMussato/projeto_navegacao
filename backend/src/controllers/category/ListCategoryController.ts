import { Request, Response } from "express";

import { ListCategoryService } from "../../services/category/ListCategoryService";

class ListCategoryController {

    async handle(req: Request, res: Response) {

        //Cria uma instância do service de listagem
        const listCategory = new ListCategoryService();

        //Executa o service para buscar as categorias no banco
        const categories = await listCategory.execute();

        //Retorna status 200 (OK) Junto com a lista de categorias
        res.status(200).json(categories);
    }
}

export { ListCategoryController };