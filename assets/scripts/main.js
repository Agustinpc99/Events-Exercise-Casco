//Ejercicio 1
let boton = document.querySelector("#boton")
let cuadro = document.querySelector("#cuadroColor")

boton.addEventListener("click",() => {
    if(cuadro.classList.contains("bg-slate-400")){
        cuadro.classList.remove("bg-slate-400")
        cuadro.classList.add("bg-blue-400")
    } else if(cuadro.classList.contains("bg-blue-400")){
        cuadro.classList.remove("bg-blue-400")
        cuadro.classList.add("bg-red-400")
    } else {
        cuadro.classList.remove("bg-red-400")
        cuadro.classList.add("bg-slate-400")
    }
})

//Ejercicio 2
let textTwo = document.querySelector("#textej2")
let cuadroTwo = document.querySelector("#cuadroText")
let botonTwo = document.querySelector("#botonreset")

textTwo.addEventListener("input",() => cuadroTwo.innerHTML = `<p>${textTwo.value}</p>`)
botonTwo.addEventListener("click",() => {
    cuadroTwo.innerHTML = ""
    textTwo.value = ""
})

//Ejercicio 3
let botonThird = document.querySelector("#botoncalcular")
let textoEstatura = document.querySelector("#estatura")
let textoPeso = document.querySelector("#peso")
let textoResultado = document.querySelector("#resultado")

botonThird.addEventListener("click",() => textoResultado.value = Number(textoPeso.value) / ((Number(textoEstatura.value))/100)**2)

//Ejercicio 4
let botonFour = document.querySelector("#botonconvertir")
let textoLocal = document.querySelector("#monedalocal")
let textoDolares = document.querySelector("#monedadolares")
let botonBorrar = document.querySelector("#botonborrar")

botonFour.addEventListener("click",() => {
    if(textoLocal.value){
        textoDolares.value = Math.round((Number(textoLocal.value)/839)*100)/100
    } else {
        textoLocal.value = Number(textoDolares.value)*838
    }
})

botonBorrar.addEventListener("click",()=> {
    textoDolares.value = ""
    textoLocal.value = ""
})
