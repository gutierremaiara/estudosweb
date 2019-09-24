var peso = document.getElementById('peso');

var altura = document.getElementById('altura');

var titulo = document.querySelector('.title');

var botao = document.querySelector('#botao');


function calculaImc(peso, altura){
	var imc = parseFloat(peso) / (parseFloat(altura) * parseFloat(altura));

return	imc;
}

botao.addEventListener('click', function(){
	var resultado = calculaImc(peso.value, altura.value);

	console.log(resultado);
	titulo.innerHTML = "Seu IMC é:" + resultado.toFixed(2);
	

})


