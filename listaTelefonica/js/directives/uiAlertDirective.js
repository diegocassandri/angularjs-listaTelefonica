angular.module("listaTelefonica").directive("uiAlert", function() {
	return {
		templateUrl: "templates/alert.html",
		replace: true,
		restrict: "E",
		scope: {
			title: "@title"
		},
		transclude: true
	};
});