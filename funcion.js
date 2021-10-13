

var sumar = document.getElementById("suma")
var restar = document.getElementById("resta")
var multiplicar = document.getElementById("producto")
var dividir = document.getElementById("division")
var uno = document.getElementById("uno")
var dos = document.getElementById("dos")
var tres = document.getElementById("tres")
var cuatro = document.getElementById("cuatro")
var cinco = document.getElementById("cinco")
var seis = document.getElementById("seis")
var siete = document.getElementById("siete")
var ocho = document.getElementById("ocho")
var nueve = document.getElementById("nueve")
var cero = document.getElementById("cero")
var punto = document.getElementById("punto")
var igual = document.getElementById("igual")
var limpiar = document.getElementById("limpiar")


var text =""

uno.addEventListener("click",function(e){
    e.preventDefault()
    text = text+"1"
    document.getElementById("result").value = text
})

dos.addEventListener("click",function(e){
    e.preventDefault()
    text = text+"2"
    document.getElementById("result").value = text
})

tres.addEventListener("click",function(e){
    e.preventDefault()
    text = text+"3"
    document.getElementById("result").value = text
})

cuatro.addEventListener("click",function(e){
    e.preventDefault()
    text = text+"4"
    document.getElementById("result").value = text
})

cinco.addEventListener("click",function(e){
    e.preventDefault()
    text = text+"5"
    document.getElementById("result").value = text
})

seis.addEventListener("click",function(e){
    e.preventDefault()
    text = text+"6"
    document.getElementById("result").value = text
})

siete.addEventListener("click",function(e){
    e.preventDefault()
    text = text+"7"
    document.getElementById("result").value = text
})

ocho.addEventListener("click",function(e){
    e.preventDefault()
    text = text+"8"
    document.getElementById("result").value = text
})

nueve.addEventListener("click",function(e){
    e.preventDefault()
    text = text+"9"
    document.getElementById("result").value = text
})

cero.addEventListener("click",function(e){
    e.preventDefault()
    text = text+"0"
    document.getElementById("result").value = text
})

punto.addEventListener("click",function(e){
    e.preventDefault()
    text = text+"."
    document.getElementById("result").value = text
})

sumar.addEventListener("click",function(e){
    e.preventDefault()
    text = text+"+"
    document.getElementById("result").value = text
})

restar.addEventListener("click",function(e){
    e.preventDefault()
    text = text+"-"
    document.getElementById("result").value = text
})

multiplicar.addEventListener("click",function(e){
    e.preventDefault()
    text = text+"*"
    document.getElementById("result").value = text
})

dividir.addEventListener("click",function(e){
    e.preventDefault()
    text = text+"/"
    document.getElementById("result").value = text
})

limpiar.addEventListener("click",function(e){
    e.preventDefault()
    text = ""
    document.getElementById("result").value = text
})

igual.addEventListener("click",function(e){
    e.preventDefault()
    document.getElementById("result").value = eval(text)
})


