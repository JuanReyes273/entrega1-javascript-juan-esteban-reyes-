
//Bienvenida al Usuario
alert("Bienvenido a RentPlace, La mejor opción para una estadía inolvidable!")

const rentarUnLugar = () => {
    let lugar = ""
    let dias = 0
    let precio = 0
    let subtotal = 0
    let arrendarOtroLugar = false

    do {
        lugar = prompt("¿Querés arrendar casa, apartamento o habitacion?")
        dias = parseInt(prompt("¿Cuántos dias quieres arrendar?"))

        let diasValidados = validarDias(dias)
        
        switch (lugar) {
            case "casa":
                precio = 400
                break
            case "apartamento":
                precio = 250
                break
            case "habitacion":
                precio = 100
                break
            default:
                alert("Alguno de los datos ingresados no es correcto!, por favor intentalo de nuevo")
                precio = 0
                diasValidados = 0
                break
        }

        subtotal += precio * diasValidados

        arrendarOtroLugar = confirm('¿Desea arrendar otro lugar?')

    } while (arrendarOtroLugar)

    return subtotal
}

const validarDias = (dias) => {
    while (Number.isNaN(dias) || dias === 0) {
        alert("Debe de agregar un numero de dias válido!")
        dias = parseInt(prompt("¿Cuántos dias quieres arrendar?"))
    }

    return dias
}

const tarifaDeServicio = (subtotal) => {
    const tarifaUno = 1.12
    const tarifaDos = 1.1
    const tarifaTres = 1.08
    
    if ((subtotal >=100) && (subtotal <=1499)){
        alert("tu tarifa de servicio es del 12%")
        return subtotal * tarifaUno
    } else if ((subtotal >=1500) && (subtotal <=2500)){
        alert("tu tarifa de servicio es del 10%")
        return subtotal * tarifaDos
    } else{
        alert("tu tarifa de servicio es del 8%")
        return subtotal * tarifaTres
    }
}

const transporteAeropuerto = (subtotal) => {
    const quiereTransporte = confirm("¿Deseas incluir el servicio de transporte?")

    if (quiereTransporte && subtotal>=4000) {
        alert("El servicio de transporte es gratis. el total del hospedaje es: $" +subtotal)
    } else if(quiereTransporte && subtotal<4000){
        subtotal += 100
        alert("El servicio de transporte tiene un valor de $100. el total mas transporte es: $" +subtotal)
    } else{
        alert("el total de tu compra es: $" +subtotal)
    }

    return subtotal
}

const mostrarDetalleDeCompra = (precioFinal) => {
    alert("El total a pagar es de $"+precioFinal+". Gracias por confiar en nosotros")
}


const subtotal = rentarUnLugar()

const subtotalConTarifaServicio = tarifaDeServicio(subtotal)

const precioFinal = transporteAeropuerto(subtotalConTarifaServicio)

mostrarDetalleDeCompra(precioFinal)