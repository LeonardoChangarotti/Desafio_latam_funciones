//EVENTOS CON EL TECLADO
//PINTAR EL DIV CON LAS TECLAS A S D

ele=document.querySelector('#key')
document.addEventListener('keydown',function(evento){
    if (evento.key=='a'){
        ele.style.backgroundColor='pink'
    }
    else if (evento.key=='s'){
        ele.style.backgroundColor='orange'
    }
    else if (evento.key=='d'){
        ele.style.backgroundColor='blue'
    }
    else{
        ele.style.backgroundColor='white'
    }
})

//CREAR UN DIV CON LAS TECLAS Q W E.
function nuevoDiv(){
    ele2=document.querySelector('#key2');
    ele2.style.width="200px";
    ele2.style.height="200px";
    ele2.style.border="1px solid black";
}
document.addEventListener('keydown', function(evento){
    if (evento.key=='q'){
        nuevoDiv()
        ele2.style.backgroundColor='purple';
    }
    else if (evento.key=='w'){
        nuevoDiv()
        ele2.style.backgroundColor='grey';
    }
    else if (evento.key=='e'){
        nuevoDiv()
        ele2.style.backgroundColor='brown';
    }
    else {
        nuevoDiv()
        ele2.style.backgroundColor='white';
        ele2.style.border='nonea'
    }
})