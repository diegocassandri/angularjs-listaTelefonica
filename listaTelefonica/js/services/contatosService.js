angular.module("listaTelefonica").factory("contatosService", function($http, config) {
	var _listarContatos = function() {
		return $http.get(config.BASE_URL + "/contatos");
	};

	var _salvarContatos = function(contato) {
		return $http.post(config.BASE_URL + "/contatos", contato);
	}

	return {
		listar: _listarContatos,
		salvar: _salvarContatos
	};
});