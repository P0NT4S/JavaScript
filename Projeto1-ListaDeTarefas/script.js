let entrada = document.getElementById('digTarefa');
let tarefas = document.getElementById('tarefas');
let botao = document.getElementById('botao');

function addTarefa(){
    if (entrada.value != '') {
        var novaTarefa = document.createElement('p');
        novaTarefa.innerText = '- ' + entrada.value;
        tarefas.appendChild(novaTarefa);
        entrada.value = '';
    }
}

botao.addEventListener('click', addTarefa)