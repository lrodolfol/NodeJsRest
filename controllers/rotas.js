const { cadastrar } = require('../model/cadastro');
const cadastroModel = require('../model/cadastro');

module.exports = rota => {
    rota.get('/cadastro', (req, res) => res.send('Welcom to registration'));

    rota.post('/cadastro', (req, res) => {
        cadastroModel.cadastrar(req.body, res);
        //console.log(req.body);
        //res.send('Dados recebidos com sucesso');
    });

    rota.delete('/cadastro/:id', (req, res) => {
        var idUser = parseInt(req.params.id);
       cadastroModel.excluir(idUser, res);
    });

    rota.patch('/cadastro/:id', (req, res) => {
        var idUser = parseInt(req.params.id);
        cadastroModel.atualizar(idUser, req.body, res);
    })

    
}