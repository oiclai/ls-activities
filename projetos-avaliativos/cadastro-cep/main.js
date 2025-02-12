document.addEventListener("DOMContentLoaded", () => {
    const cepInput = document.getElementById("cep");

    // Detecta quando o usuário pressiona "Enter"
    cepInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Evita o envio do formulário
            buscarEndereco();
        }
    });
});

function buscarEndereco() {
    const cep = document.getElementById('cep').value.replace('-', '').trim(); // Remove o hífen e espaços extras
    if (cep.length !== 8) {
        alert("Por favor, insira um CEP válido com 8 dígitos.");
        return;
    }

    const url = `https://viacep.com.br/ws/${cep}/json/`;

// -------------------- req -------------------------------
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.erro) {
                alert("CEP não encontrado. Por favor, verifique o CEP informado.");
                return;
            }

            // Preenchendo os campos do formulário com os dados recebidos
            document.getElementById('rua').value = data.logradouro || '';
            document.getElementById('numero').value = ''; // Campo de número não preenchido pela API
            document.getElementById('bairro').value = data.bairro || '';
            document.getElementById('cidade').value = data.localidade || '';
            document.getElementById('estado').value = data.uf || '';
        })
        .catch(error => {
            console.error("Erro ao buscar o endereço:", error);
            alert("Erro ao buscar o endereço. Tente novamente mais tarde.");
        });
}
