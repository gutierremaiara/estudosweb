var form = document.getElementById('form');
var tarefa = document.getElementById('tarefa');
var lista = [];
var listaTarefas = document.getElementById('lista-tarefas')

var chave = 'lista';

form.addEventListener('submit', function(event){
	event.preventDefault();

	var valor = tarefa.value;
	lista.push(valor);

	addLista(lista);
	verificarLista();

	tarefa.value = '';

	
});

function addLista(lista){
	var listaJSON = JSON.stringify(lista);
	localStorage.setItem('lista', listaJSON);
}

function verificarLista(){
	var verificador = localStorage.getItem(chave);

console.log(verificador);

if(verificador == null){
	console.log('lista vazia')
} else {
	listaTarefas.innerHTML = '';

	lista = JSON.parse(verificador);
	
	lista.forEach(function(item){
		var listItem = document.createElement('li');
		listItem.innerHTML = item;

		listaTarefas.appendChild(listItem);
	})


	}

}

verificarLista();