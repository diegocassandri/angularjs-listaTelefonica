angular.module("listaTelefonica").filter("name", function() {
	return function(input) {
		var palavras = input.split(" ");
		var palavrasCapitalizadas = palavras.map(function(palavra) {
			if (palavra.length <= 2)
				return palavra.toLowerCase();

			return palavra.charAt(0).toUpperCase() + palavra.substring(1).toLowerCase(); 
		});
		var nome = palavrasCapitalizadas.join(" ");

		return nome;
	};
});