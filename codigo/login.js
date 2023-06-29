document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita o envio do formulário

    // Obtém os valores de nome de usuário e senha inseridos pelo usuário
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Obtém as contas do Local Storage
    var contas = obterContas();

    // Verifica se existe uma conta com os mesmos dados de login
    var contaExistente = contas.find(function (conta) {
        return conta.email === username && conta.senha === password;
    });

    if (contaExistente) {
        // Login bem-sucedido
        localStorage.setItem("isLoggedIn", "true"); // Marca o usuário como logado

        // Redireciona para a página inicial
        window.location.href = "home.html";
    } else {
        // Login inválido
        exibirMensagemErro("Nome de usuário ou senha incorretos");
    }
});

function obterContas() {
    // Obter as contas do Local Storage
    var contas = JSON.parse(localStorage.getItem("contas")) || [];
    return contas;
}

function exibirMensagemErro(mensagem) {
    // Exibe a mensagem de erro ao usuário
    var mensagemErro = document.getElementById("mensagemErro");
    mensagemErro.textContent = mensagem;
    mensagemErro.style.display = "block";
}