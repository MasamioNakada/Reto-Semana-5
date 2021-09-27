
var método = ["efectivo", "crédito"]

var cod = prompt(`Seleccione que hamburguesa Comprará: Simple, Doble, Triple.
Cuantas hamburguesas deseará?.
Mencionenos también el método de pago: Efectivo , Credito`)



if (cod.toLowerCase().includes("simple")){
    var ti = "simple"
}else if(cod.toLowerCase().includes("doble")){
    var ti = "doble"
}else if (cod.toLowerCase().includes("triple")){
    var ti = "triple"
}

switch (ti) {
    case "simple":
        
        var n = parseInt(cod.includes())
/*         var to = n * 20
        var tot = n * 20 + 0.05*to */
        /* if (tp.toLowerCase().includes('efectivo')){ }*/

        console.log(n)

        break;
    case "doble":
        var ti = hamburguesa.doble
        var n = parseInt(prompt(`Cuantas hamburguesas ${hamburguesa[1]} ordenará `))
        var to = n * 25
        var tot = n * 25 + 0.05*to
        break;
    case "triple":
        var ti = hamburguesa.triple
        var n = parseInt(prompt(`Cuantas hamburguesas ${hamburguesa[2]} ordenará `))
        var to = n * 30
        var tot = n * 30 + 0.05*to
        break;
                
    default:
        window.alert("error");
        break;
}



