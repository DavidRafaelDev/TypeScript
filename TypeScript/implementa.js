"use strict";
var empresa;
(function (empresa) {
    var p = new empresa.Pessoa("David", "00000000000");
    p.setIdade(30);
    document.getElementById("nome").textContent = p.getNome();
})(empresa || (empresa = {}));
