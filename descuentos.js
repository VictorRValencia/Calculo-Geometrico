function calcularPrecioConDescuento(precio, descuento){
    const porcentajeDelPrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajeDelPrecioConDescuento)/ 100;

    return precioConDescuento;

}

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById("inputCoupon");
    const couponValue = inputCoupon.value;

    const resultCoupon = document.getElementById("priceWithCoupon")
    
    let descuento;
    let precioConDescuento; 

    switch(true) {
        case couponValue === "3":
        descuento = 18;
        precioConDescuento = calcularPrecioConDescuento(priceValue,descuento);
        resultCoupon.innerText =`El precio con descuento es de: $${precioConDescuento} Pesos Colombianos`
        break;
        case couponValue === "4":
        descuento = 30;
        precioConDescuento = calcularPrecioConDescuento(priceValue,descuento);
        resultCoupon.innerText =`El precio con descuento es de: $${precioConDescuento} Pesos Colombianos`
        break;
        case couponValue === "5":
        descuento = 25;
        precioConDescuento = calcularPrecioConDescuento(priceValue,descuento);
        resultCoupon.innerText =`El precio con descuento es de: $${precioConDescuento} Pesos Colombianos`
        break;
        default:
        resultCoupon.innerText = "el cupón ingresado no es valido"
    }
}




