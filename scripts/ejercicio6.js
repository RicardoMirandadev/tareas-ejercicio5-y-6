let saldo= 0;

const inputmonto = document.getElementById("monto");
const btnDepositar = document.getElementById("depositar");
const btnRetirar = document.getElementById("retirar");
const btnVerSaldo = document.getElementById("verSaldo");
const divMensaje = document.getElementById("Mensaje");

function depositar(cantidad){
    saldo += cantidad;
    divMensaje.textContent = `Has depositado ${cantidad}. Tu saldo actual es ${saldo}.`;
}
function retirar(cantidad){
    if(cantidad > saldo){
        divMensaje.textContent = "tu saldo es in suficiente para el retiro";
    }else{
        saldo -= cantidad;
        divMensaje.textContent = `Has retirado ${cantidad}. Tu saldo actual es ${saldo}.`;
    }
}
function verSaldo(){
    divMensaje.textContent = "El Saldo de tu cuenta es:  " + saldo;
}

btnDepositar.addEventListener("click", function() {
    let cantidad = Number(inputmonto.value);
    depositar(cantidad);
    inputmonto.value = "";
})

btnRetirar.addEventListener("click", function() {
    let cantidad = Number(inputmonto.value);
    retirar(cantidad);
    inputmonto.value = "";
})

btnVerSaldo.addEventListener("click", function() {
    verSaldo();
})
