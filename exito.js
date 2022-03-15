let etiquetaBoton=document.getElementById("boton")
etiquetaBoton.addEventListener("click",escuchar)
function escuchar(event){
    event.preventDefault()
    console.log("Hizo click")
    let producto=document.getElementById("Producto").value
    console.log(producto)
    let edad=document.getElementById("edad").value
    console.log(edad)
    let cantidad=document.getElementById("cantidad").value
    console.log(cantidad)
    if(edad>=18){
        alert("Continue")
        if(producto=="1"){
            let total1=cantidad*820000
            alert("El total es: "+total1)
            console.log(total1)
        }
        else if(producto=="2"){
            let total2=cantidad*950000
            alert("El total es: "+total2)
            console.log(total2)
        }
        else if(producto=="3"){
            let total3=cantidad*1200000
            console.log(total3)
        }
        else if(producto=="4"){
            let total4=cantidad*1500000
            console.log(total4)
        }

    }else{
        alert("No puedes continuar")
    }
}