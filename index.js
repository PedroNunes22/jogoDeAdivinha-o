
var numeroSecreto = Math.floor(Math.random() * 1001);

function verificarPalpite() {  
    var chute = document.getElementById("userInput").value;

    if (chute === "") {
        alert("Por favor, digite um número.");
        return;
    }

    chute = parseInt(chute);

    if (chute === numeroSecreto) {
        alert('Acertou!');
    } else if (chute > numeroSecreto) {
        alert('Errou... O número secreto é menor!');
    } else if (chute < numeroSecreto) {
        alert('Errou... O número secreto é maior!');
    }
}

// Adiciona um ouvinte de evento ao botão de "Adivinhar"
document.getElementById("guessButton").addEventListener("click", verificarPalpite);

// Adiciona um ouvinte de evento ao campo de entrada
document.getElementById("userInput").addEventListener("keyup", function(event) {
    // Verifica se a tecla pressionada é a tecla "Enter"
    if (event.key === "Enter") {
        // Chama a função para verificar o palpite
        verificarPalpite();
    }
});
