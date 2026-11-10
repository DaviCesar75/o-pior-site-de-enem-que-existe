function adicionarAnotacao() {
    const input = document.getElementById('input-anotacao');
    const lista = document.getElementById('lista-anotacoes');
    
    const textoAnotacao = input.value.trim();

    if (textoAnotacao === "") {
        alert("Por favor, digite uma anotação antes de adicionar!");
        return;
    }

    const novoItem = document.createElement('li');
    novoItem.textContent = textoAnotacao;

    lista.appendChild(novoItem);

    input.value = "";
    input.focus();
}