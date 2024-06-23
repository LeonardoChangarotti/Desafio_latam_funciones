//EJERCICIO DE PINTAR.HTML
var cambiarColor= document.querySelector('#ele1')
//creo una variable donde capturo el elemento

//a la variable le agrego un addevenelistener, y luego del click creo la funcion
cambiarColor.addEventListener('click', function(){
    if (cambiarColor.style.backgroundColor=='yellow'){
        cambiarColor.style.backgroundColor='green';
    }else{cambiarColor.style.backgroundColor='yellow'}
    
})



