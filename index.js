const customExpress = require("./config/customExpress");
const conexao = require("./dataBase/connection");
const app = customExpress();
const port = 777;

app.listen(port, () =>
    console.log('server running')
);

conectMysql(); 





function conectMysql() {

    conexao.connect((erro, sucesso) => {
        if (erro) {
           console.log(`Error connecting to database: ${erro.sqlMessage}`);
           return 'false';
        } else {
            return 'true';
        }
    });

}