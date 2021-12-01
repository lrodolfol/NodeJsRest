const conexao = require('../dataBase/connection');
const moment = require('moment');
const tabela = "usuarios"

class Cadastro {

    cadastrar(dados, res) {
        var sql = "INSERT INTO usuarios SET ? "

        conexao.query(sql, dados, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            }else{
                res.status(201).json(resultados)
            }
        })
    }

    excluir(id, res) {
       var sql = `DELETE FROM ${tabela} WHERE id = ${id}`;

        conexao.query(sql, (erros, success) => {
            if(erros && erros.affectedRows > 0) {
                res.status(400).json(erros)
            }else{
                res.status(200).json(success);
            }
        });
    }

    atualizar(id, req, res) {
        var sql = `UPDATE ${tabela} SET ? WHERE id = ${id}`;
        conexao.query(sql, req, (erros, success) => {
            if(erros) {
                res.status(400).json(erros)
            }else{
                res.status(200).json(success);
            }
        });
    }

}

module.exports = new Cadastro;