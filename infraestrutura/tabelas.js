class Tabelas {
    init(conexao) {
        this.conexao = conexao

        this.criarAtendimento()
    
    }

    criarAtendimento() {
        const sql = 'CREATE TABLE IF NOT EXIST Atendimento (id int NOT NULL AUTO_INCREMENT, cliete varchar(50) NOT NULL, pet varchar(20), serviço varchar(20) NOT NULL, status varchar(20) NOT NULL, observacoes text, PRIMARY KEY(id))'

        this.conexao.query(sql, (erro) => {

            if(erro){
                console.log(erro)
            }else {
                console.log('Tabela criada com sucesso')
            }


        })


    }
}

module.exports = new Tabelas