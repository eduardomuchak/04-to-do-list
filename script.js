//Constantes:
const criarTarefa = document.querySelector('#criar-tarefa');
const listaTarefas = document.querySelector('#lista-tarefas');
const tarefasLista = document.getElementsByClassName('tarefaDaLista');
const apagarTudo = document.querySelector('#apaga-tudo');
const apagarFinalizados = document.querySelector('#remover-finalizados');
const apagarSelecionado = document.querySelector('#remover-selecionado');

//Requisito 05 e 06 (Resolvido com a ajuda do Imar Mendes):
function adicionaTarefa() {
  var inputTarefa = document.getElementById('texto-tarefa');
  var li = document.createElement('li');

  li.className = 'tarefaDaLista';
  li.innerText = inputTarefa.value;
  inputTarefa.value = '';
  listaTarefas.appendChild(li);
}
criarTarefa.addEventListener('click', adicionaTarefa);

//Requisito 07 e 08 (Resolvido com a ajuda do Caio Costa):
function selecionaCorBackground(event) {
  var itemSelecionado = event.target;
  
  for (let i = 0; i < tarefasLista.length; i += 1) {
    tarefasLista[i].classList.remove('selecionado');
  }
  itemSelecionado.classList.add('selecionado');
}
listaTarefas.addEventListener('click', selecionaCorBackground);

//Requisito 09:
function tacharTexto(event) {
  var textoTachado = event.target;
  textoTachado.classList.toggle('completed');
}
listaTarefas.addEventListener('dblclick', tacharTexto);

//Requisito 10:
function limpaTudo() {
  for (let i = listaTarefas.childNodes.length - 1; i > 0; i -= 1) {
    listaTarefas.childNodes[i].remove();
  }
}
apagarTudo.addEventListener('click', limpaTudo);

//Requisito 11:
function limpaFinalizados() {
  
  for (let i = listaTarefas.childNodes.length - 1; i > 0; i -= 1) {
    let = elementoAtual = listaTarefas.childNodes[i];
    if (elementoAtual.classList.contains('completed')) {
      elementoAtual.remove();
    }
  }
}
apagarFinalizados.addEventListener('click', limpaFinalizados);

//Requisito 14:
function removeSelecionado() {
  console.log('Opa, clicou no botão')
  const itemListaSelecionado = document.querySelector('.selecionado');
  if (itemListaSelecionado) {
    itemListaSelecionado.remove();
  }
}
apagarSelecionado.addEventListener('click', removeSelecionado);