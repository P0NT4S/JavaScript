let entrada = document.getElementById('digTarefa');
let tarefas = document.getElementById('tarefas');
let botao = document.getElementById('botao');
let feito = false
let novaTarefa = document.createElement('p');

function addTarefa() {
    if (entrada.value != '') {
        novaTarefa.innerText = '- ' + entrada.value;
        tarefas.appendChild(novaTarefa);
        entrada.value = '';
    }
}

function marcaTarefa() {
    if (feito == false) {
        novaTarefa.style.textDecoration = 'line-through';
        feito = true;
    }
    else {
        novaTarefa.style.textDecoration = 'none';
        feito = false;
    }
}

botao.addEventListener('click', addTarefa)
novaTarefa.addEventListener('click', marcaTarefa)