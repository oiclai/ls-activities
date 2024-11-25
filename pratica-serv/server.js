import express from "express";
// mock : objeto "falso" p ocupar algum lugar -> facilita o fluxo de desenvolvimento

// objeto (conjunto - chave: valor)
const  posts = [
    { id: 1, descricao: "gato fofo", imagem: "https://placecatscom/millie/300/150"},
    { id: 2, descricao: "gato leso", imagem: "https://placecatscom/millie/300/150"},
    { id: 3, descricao: "gato bobo", imagem: "https://placecatscom/millie/300/150"},
]; // testando com um array em memoria

const app = express(); // server = app
app.use(express.json());
app.listen(3000, () => {
    console.log("Servidor escutando..."); // 3000 = porta padrao server local
});
// node pratica-serv/server.js
// API interface
// app.get("/api", (req, res) => {
    // res.status(200).send("");
function buscarPostPorID(req, res) {
    return posts.findIndex((post) => {
        return post.id === Number(id);
    })
}

app.get("/posts/:id", (req, res) => { //':id' = substituida por um dado variavel (1,2,3)
    res.status(200).json(posts);
});

// rota do cliente para pegar uma resposta do servidor
// requisicao e resposta
// 'Ctrl C' no terminal -> derruba o servidor 

// quando se manda e recebe dados, nessa comunicação http, os dados so conseguem trafegar no formato de texto (texto vai, texto volta) - mas aqui, o java script tem que reconhecelo como um objeto (json), não só como uma sequencia de caracteres ----> PARA ISSO, VOU ADICIONAR UMA ROTA NO EXPRESS PARA CONSEGUIR CONVERTER O TEXTO EM JSON (OBJETO) Json -> transitar texto
