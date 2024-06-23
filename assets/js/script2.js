
//EJERCICIOS DE 4_COLORES.HTML
function cambiarFondoNegro(div){
    div.style.backgroundColor='black'
}
var div1= document.querySelector('#div1');
div1.addEventListener('click', function(){
    cambiarFondoNegro(div1)
})
var div2= document.querySelector('#div2');
div2.addEventListener('click', function(){
    cambiarFondoNegro(div2)
})
var div3= document.querySelector('#div3');
div3.addEventListener('click', function(){
    cambiarFondoNegro(div3)
})
var div4= document.querySelector('#div4');
div4.addEventListener('click', function(){
    cambiarFondoNegro(div4)
})