let  hamburguesa = {
    simple: 20,
    doble: 25,
    triple: 30,
}

var cod = prompt("Seleccione que hamburguesa Comprará: Simple, Doble, Triple")

switch (cod) {
    case 1:
        var ti = hamburguesa.simple
        var n = parseInt(prompt(`Cuantas hamburguesas ${hamburguesa[0]} ordenará `))
        var to = n * ti
        var tot = n * ti + 0.05*to
        break;
    case 2:
        var ti = hamburguesa.doble
        var n = parseInt(prompt(`Cuantas hamburguesas ${hamburguesa[1]} ordenará `))
        var to = n * ti
        var tot = n * ti + 0.05*to
        break;
    case 3:
        var ti = hamburguesa.triple
        var n = parseInt(prompt(`Cuantas hamburguesas ${hamburguesa[2]} ordenará `))
        var to = n * ti
        var tot = n * ti + 0.05*to
        break;
                
    default:
        window.alert("error");
        break;
}



