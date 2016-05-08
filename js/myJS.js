var i = 0;
var imagenes = []; //DECLARAMOS EL ARREGLO DE IMAGENES
var objeto = {"id": "images/slider-1.jpg"}; //ESTRUCTURA DEL OBJETO
var objeto1 = {"id": "images/slider-2.jpg"}; //ESTRUCTURA DEL OBJETO
var objeto2 = {"id": "images/slider-3.jpg"}; //ESTRUCTURA DEL OBJETO
var objeto3 = {"id": "images/slider-4.jpg"}; //ESTRUCTURA DEL OBJETO
imagenes.push(objeto); //AGREGAMOS EL OBJETO AL ARREGLO
imagenes.push(objeto1); //AGREGAMOS EL OBJETO AL ARREGLO
imagenes.push(objeto2); //AGREGAMOS EL OBJETO AL ARREGLO
imagenes.push(objeto3); //AGREGAMOS EL OBJETO AL ARREGLO

function avanzar(){
	var longitud = imagenes.length;
	if(i == longitud-1){
		i = 0;
	}
	var padre = document.getElementById("slider");
	var hijo = document.createElement("img");
	hijo.src = imagenes[++i].id;
	padre.appendChild(hijo);
}

function retroceder(){
	if(i == 0){
		i = imagenes.length;
	}
	var padre = document.getElementById("slider");
	var hijo = document.createElement("img");
	hijo.src = imagenes[--i].id;
	padre.appendChild(hijo);
}

function mostrar(){
	var padre = document.getElementById("slider");
	var hijo = document.createElement("img");
			hijo.src = imagenes[0].id;
	padre.appendChild(hijo);
}