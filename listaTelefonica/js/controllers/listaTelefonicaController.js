angular.module("listaTelefonica").controller("listaTelefonicaController", function($scope, contatosService, operadorasService) {
	$scope.app = "Lista Telefonica";

	$scope.contatos = [];
	$scope.operadoras = [];

	$scope.adicionarContato = function(contato) {
		contatosService.salvar(contato).success(function(data) {
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
		contatosService.listar().success(function(data) {
			$scope.contatos = data;
		}).error(function() {
			$scope.erro = "Não foi possível carregar os contatos";
		});
	};

	var carregarOperadoras = function() {
		operadorasService.listar().success(function(data) {
			$scope.operadoras = data;
		});
	};

	carregarContatos();
	carregarOperadoras();
});