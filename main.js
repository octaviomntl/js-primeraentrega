
const tiendaOnline = () => {
    let dineroUsuario = 0;
    let costo = 0;
    let producto = "";
    let costeTotal= 0;
    let seguirComprando = true;
    let cantidad = 0;
    let confirmarCompra = false;
    let dineroFaltante = 0
    let costeParcial = 0
    let consultaDinero = false

    
    const pedirDinero = (consultaDinero) => {
        consultaDinero = true
        do {
            dineroUsuario = Number(prompt("Bienvenido a la tienda tecnologica online, Cuanto dinero tienes?"));
        
            if (isNaN(dineroUsuario)){
                alert("Selecciona un monto valido");
            } 
            else if (dineroUsuario === 0 ) {
                alert("Debe seleccionar un monto distinto de cero");
            } else {
                seleccionCompra(dineroUsuario)
            }
        } while ((isNaN(dineroUsuario) || cantidad === 0));

        return consultaDinero
    } 


    const seleccionCompra = (dineroUsuario, costeTotal) => {
        do {
            costeParcial = 0
            producto = parseInt(prompt(`Bien, tienes $${dineroUsuario} selecciona con un numero que producto quieres comprar: 1.Cargador 2.Laptop 3.Smart watch 4.Chromecast`));

            switch (producto) {
                case 1: 
                    costo = 10;
                    break; 
                case 2:
                    costo = 100;
                    break; 
                case 3:
                    costo = 50;
                    break; 
                case 4:
                    costo = 50;
                    break; 
                default:
                    alert("Has cometido un error, vuelve a iniciar un numero valido");
                    costo = 0
                    cantidad= 0;
            }

            if (costo != 0) {
                let cantidadValidada = validarCantidad(cantidad, costo);
                costeParcial += costo * cantidadValidada; 
                
                confirmarCompra = confirm(`Los productos seleccionados tienen un coste de $${costeParcial} y tienes $${dineroUsuario}. Quieres confirmar tu compra?`);
                if (confirmarCompra == true) {
                    if (costeParcial > dineroUsuario) {
                        dineroFaltante = dineroUsuario - costeParcial;
                        alert(`Lo sentimos. El coste de la compra es mayor al dinero disponible, te faltaron $${-dineroFaltante}`);
                    } else {
                        dineroUsuario = (dineroUsuario - costeParcial);
                        costeTotal = (costeParcial + costeTotal);
                        costeParcial = 0;
                    }
                } else {
                    costeParcial = 0
                }
                

                seguirComprando = confirm(`Tienes $${dineroUsuario}. Deseas seguir comprando?`)
                if (seguirComprando == false) {
                    dineroUsuario = (dineroUsuario - costeTotal);
                } else {seleccionCompra(dineroUsuario, costeTotal)}
            }
        } while (costo == 0)(seguirComprando); 
        return costeTotal
    }
    if (consultaDinero === false){ pedirDinero(consultaDinero) }
    console.log(costeTotal);
    if (costeTotal > 0) {
        alert(`Muchas gracias por confiar en nosotros, el valor total de su compra fue de $${costeTotal}`);
    }   else { 
        alert(":c");
    }

}





const validarCantidad =  (cantidad, costo) => {
    do {
        cantidad = parseInt(prompt(`El producto seleccionado tiene un costo de $${costo} cuantos quieres llevar?`));

        if (cantidad == 0 ){
            alert("Debe seleccionar un numero distinto a cero");
        } else if  (isNaN(cantidad)) {
            alert("Selecciona una cantidad valida");
        }
    } while (isNaN(cantidad) || cantidad === 0) 
        
    return cantidad;
}


tiendaOnline()