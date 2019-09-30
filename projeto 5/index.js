$('#personagem').on('change', function(){
	requestCharacter(this.value);
});

function requestCharacter(valor){
	$.ajax({
		url: `https://swapi.co/api/people/${valor}/`,
		method: 'GET',
		beforeSend: function(){
			$('#cartao').html('<h2>Loading...</h2>');
		},
		success: function(starWarsCharacter){
			$('#cartao').html(`<h2>${ starWarsCharacter.name}<h2>
				<p>Altura: ${ starWarsCharacter.height}</p>
				<p>Peso: ${ starWarsCharacter.mass}</p>
				`);
		},
		error: function(erro){
			console.log(erro);
		}
	});
}
