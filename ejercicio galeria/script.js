/*Hola profe le mando esto que me tiene loco ya jaja, pasa lo siguiente: 
en teoria funciona, cuando haces click en cada boton se descarga la foto. El tema 
es que por ejemplo descargas la primer foto, y cuando descargas la del medio por primera vez
te baja la primer foto y al segundo intento si descarga la foto correcta.

y aparte de eso lo que me pasa es que no entiendo como lograr para que descargue
cualquier foto con cualquier boton, intente escribir una funcion abajo de todo para luego llamarla 
desde el evento pero solo me da errores en la consola. Asi que no 
me quedo otra que tener que repetir codigo, y aun asi no quedo bien.
Perdon pero la verdad me cuesta esto, cualquier comentario es bienvenido, saludos
le dejo mi email cualquier cosa: rodrigoperez0109@gmail.com*/


let xhr = new XMLHttpRequest()

xhr.responseType = "blob"

let a = document.createElement("a")


document.querySelector("#btn_1").addEventListener("click",(e)=>{
    e.preventDefault()
    e.stopPropagation()
    if (xhr.status == 200) {
        let url = URL.createObjectURL(xhr.response)
        a.href = url
        a.download = "montaña.jpeg"
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
    }
    xhr.open("GET","ph1.jpeg")
    xhr.send()
})

document.querySelector("#btn_2").addEventListener("click",(e)=>{
    e.preventDefault()
    e.stopPropagation()
    if (xhr.status == 200) {
        let url = URL.createObjectURL(xhr.response)
        a.href = url
        a.download = "montaña.jpeg"
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
    }
    xhr.open("GET","ph2.jpeg")
    xhr.send()
})

document.querySelector("#btn_3").addEventListener("click",(e)=>{
    e.preventDefault()
    e.stopPropagation()
    if (xhr.status == 200) {
        let url = URL.createObjectURL(xhr.response)
        a.href = url
        a.download = "montaña.jpeg"
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)    
    }
    xhr.open("GET","ph3.jpeg")
    xhr.send()
})

/* let a = document.createElement("a") */

/* function ajax() {
    if (xhr.status == 200) {
        let url = URL.createObjectURL(xhr.response)
        a.href = url
        a.download = "montaña.jpeg"
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        
    }
    xhr.open("GET","ph1.jpeg")
    xhr.send()
} */