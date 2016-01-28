angular.module("listaTelefonica").factory("operadorasService", function($http, config) {
	var _listarOperadoras = function() {
		return $http.get(config.BASE_URL + "/operadoras");
	};

	return {
		listar: _listarOperadoras
	};
});