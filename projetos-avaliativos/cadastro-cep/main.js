/*
na tentativa de tratar o evento usando o tecla 'Enter' 
-> levando para a funcao 'buscarEndereco()' onde a API será chamada
*/
document.addEventListener("DOMContentLoaded", () => {
    const cepInput = document.getElementById("cep");

    // user aperta ENTER para o preenchimento automatico
    cepInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Evita o envio do form
            buscarEndereco();
        }
    });
});
function buscarEndereco() {
    if (cep.length !== 8) {
        alert("Por favor, insira um CEP válido com 8 dígitos.");
        return;
    }
    const url = `https://viacep.com.br/ws/${cep}/json/`; // link da API

// ---------------------------- req -------------------------------
    fetch(url)
        .then(response => response.json()) // promisse
        .then(data => {
            if (data.erro) {
                alert("CEP não encontrado. Por favor, verifique o CEP informado.");
                return;
            }

            // preenchendo os Campos com os dados da APiiiiiiiiiiiiiiiii
            document.getElementById('rua').value = data.logradouro || '';
            document.getElementById('numero').value = ''; //  preenchido pel0 user
            document.getElementById('bairro').value = data.bairro || '';
            document.getElementById('cidade').value = data.localidade || '';
            document.getElementById('estado').value = data.uf || '';
        })
        .catch(error => {
            console.error("Erro ao buscar o endereço:", error);
            alert("Erro ao buscar o endereço. Tente novamente mais tarde.");
        });
}
