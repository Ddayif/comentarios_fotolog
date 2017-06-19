/*aquí va tu código*/


	localStorage.nombre = document.getElementById("clave").value;
	localStorage.comentario = document.getElementById("valor").value;

	localStorage.setItem(clave,valor);

		for(var i = 0; i < localStorage.length; i++){
		var name = localStorage.key(i);
		var coment= localStorage.getItem(name);
	}

	var button = document.getElementById("boton");

	boton.addEventListener("click", function(){
		var resultado = document.createElement("div");

		var resultado1 = document.createElement("p");
		var resultado2 = document.createElement("p");

		var parrafoNombre = document.createTextNode(name);
		var parrafoComentario = document.createTextNode(coment);

		resultado1.appendChild(parrafoNombre);
		resultado2.appendChild(parrafoComentario);

		resultado.appendChild(resultado1);
		resultado.appendChild(resultado2);
	});

function limpiarDatos(){
	document.getElementById("clear").innerHTML = "Limpio"
}


