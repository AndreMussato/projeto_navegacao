import { z } from 'zod';

//Cria e exporta um schema chamado createCategorySchema
//Esse schema será usado para validar os dados enviados na requisição
export const createCategorySchema = z.object({

    //Define que será validado o corpo da requisição (req.body)
    body: z.object({
        name: z
        .string({ message: "Categoria precisa ser um texto"})
        .min(2, {message : "O nome da categoria precisa ter no mínimo 2 letras"}),
    })
});