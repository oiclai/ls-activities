// node pratica-serv/server.js
import express from 'express';

const app = express(); // server = app

app.listen(3000), () => {
    console.log('Servidor escutando . . . ');
}; // 3000 = porta padrao server local


// rota do cliente para pegar uma resposta do servidor
// requisicao e resposta
// 'Ctrl C' no terminal -> derruba o servidor 
app.get('/api', (req, res) => {
    res.status(200).send('Manda Mensagem . . . ');
});