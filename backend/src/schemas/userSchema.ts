//Importa a biblioteca Zod (usada para validação de dados)
import { z } from 'zod';

//Cria uma schema de validação para criação de usuário
export const createUserSchema = z.object({

    //Define que será validado o corpo (body) da requisição
    body: z.object({

        //Validação do campo "name"
        name: z
            //Define que deve ser uma string (texto)
            .string({ message: "O nome precisa ser um texto"})
            //Define que deve ter no mínimo 3 caracteres
            .min(3, { message: "O nome precisa ter no mínimo 3 letras"}),

        //Validação do campo "email"
        email: z
            //Define que deve ser uma string no formato de email válido
            .email({ message: "Precisa ser um email válido"}),

        //Validação do campo "password"
        password: z
            //Define que deve ser uma string
            .string({ message: "A senha é obrigatória" })
            //Define que deve ter no mínimo 6 caracteres
            .min(6, { message: "A senha deve ter no mínimo 6 caracteres"}),
    }),
});