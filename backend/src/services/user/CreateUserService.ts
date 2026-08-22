//Define uma classe responsável pela lógica de criação de usuário
class CreateUserService {

    //Método asincrono (permite usar o await futuramente,
    //como acesso ao banco)
    async execute() {

        //Exibe uma mensagem no console para indicar que o serviço
        //foi executado
        console.log("EXECUTANDO SERVIÇOOOOOO");

        //Retorna uma mensagem simulando a criação de um usuário
        return "USUARIO ANDRÉ CRIADO!!";
    }

}

//Exporta a classe para que possa ser usada em outros 
// arquivos (ex: controllers)
export { CreateUserService };