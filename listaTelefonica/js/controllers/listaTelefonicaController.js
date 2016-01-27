angular.module("listaTelefonica").controller("listaTelefonicaController", function($scope, $http) {
	var URL_CONTATOS = "http://localhost:8080/contatos";
	var URL_OPERADORAS = "http://localhost:8080/operadoras";

	$scope.app = "Lista Telefonica";

	$scope.contatos = [];
	$scope.operadoras = [];

	$scope.adicionarContato = function(contato) {
		$http.post(URL_CONTATOS, contato).success(function(data) {
			delete $scope.contato;
			$scope.contatoForm.$setPristine();
			carregarContatos();
		});
	};

	$scope.excluirContatos = function(contatos) {
		$scope.contatos = contatos.filter(function(contato) {
			if (!contato.selecionado)
				return contato;
		});
	};

	$scope.isContatoSelecionado = function(contatos) {
		return contatos.some(function(contato) {
			return contato.selecionado;
		});
	};

	$scope.ordenarPor = function(campo) {
		$scope.criterio = campo;
		$scope.direcao = !$scope.direcao;
	};

	var carregarContatos = function() {
		$http.get(URL_CONTATOS).success(function(data) {
			$scope.contatos = data;
		});
	};

	var carregarOperadoras = function() {
		$http.get(URL_OPERADORAS).success(function(data) {
			$scope.operadoras = data;
		});
	};

	carregarContatos();
	carregarOperadoras();
});