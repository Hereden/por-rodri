function calcularHora(){
    let hora = document.getElementById("hora").value;
    let hoy = new Date();
    var nuevoElemento = document.createElement("h1");
    var textoElemento;
    nuevoElemento.className += " bg-warning";
    let sumarsesion=15;
    if(hora===""){
        textoElemento = document.createTextNode("Hora actual: "+ hoy.getHours()+":" +hoy.getMinutes() + "  Hora en 15 min: "+ (hoy.setMinutes(hoy.getMinutes() + sumarsesion) && hoy.getHours() +":" + hoy.getMinutes()));
    }else{
        hoy.setHours(hora.substring(0,2));
        hoy.setMinutes(hora.substring(3,6));
        textoElemento = document.createTextNode("Hora actual: "+ hoy.getHours()+":" +hoy.getMinutes() + "  Hora en 15 min: "+ (hoy.setMinutes(hoy.getMinutes() + sumarsesion) && hoy.getHours() +":" + hoy.getMinutes()));
    }

    nuevoElemento.appendChild(textoElemento);
    var parentElement = document.getElementById('resultadoParent');
    var theFirstChild = parentElement.firstChild;
    parentElement.insertBefore(nuevoElemento, theFirstChild);
}