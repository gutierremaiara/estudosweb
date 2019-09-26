var formulario = document.querySelector('#formulario');
var titulo = document.querySelector('#titulo');
var valor = document.querySelector('#valor');
var listagem = document.querySelector('#listagem');

formulario.addEventListener('submit', function(event){
	event.preventDefault();

	if(titulo.value == '' || valor.value == ''){
		alert("os campos não podem estar vazios"); 
	 }
		else{

			
		var linha = document.createElement('tr');
		var colunaTitulo = document.createElement('td');
		var colunaValor = document.createElement('td');
		

		colunaTitulo.innerHTML = titulo.value;
		colunaValor.innerHTML = valor.value;
	  
	  linha.appendChild(colunaTitulo);
	  linha.appendChild(colunaValor);

	  listagem.appendChild(linha);

	  titulo.value = '';
	  valor.value = '';

	}
	

});

