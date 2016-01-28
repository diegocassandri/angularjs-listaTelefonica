angular.module("listaTelefonica").directive("uiPhoneNumber", function() {
	return {
		require: "ngModel",
		link: function(scope, element, attrs, ctrl) {
			var _nrTelefone = function(telefone) {
				telefone = telefone.replace(/[^0-9]+/g, "");

				if (telefone.length >= 9) {
					telefone = telefone.substring(0,5) + "-" + telefone.substring(5, 9);	
				} else {
					if (telefone.length > 4)
						telefone = telefone.substring(0,4) + "-" + telefone.substring(4, 9);
				}

				return telefone;
			}

			element.bind("keyup", function() {
				ctrl.$setViewValue(_nrTelefone(ctrl.$viewValue));
				ctrl.$render();
			});
		}
	};
});