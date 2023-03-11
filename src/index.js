import { slider } from "./slider.js";
import { gallery } from "./gallery.js";
import { randomImg } from "./randomImg.js";
import { animateBtn } from "./lib/animate-buttons.js";

import { selectWidth } from "./selectWidth.js";

/*Elementos del Dom */
const track= document.querySelector(".track-slider")

window.addEventListener("load", ()=>{
    selectWidth.setWidth(".track-slider",".slide-img-container")
    randomImg(".slide__img", 14,  gallery)
});

//iniciar slider
const principalSlider= new slider (".track-slider", ".slide", 7000, 0.7);
principalSlider.play()

//activar slider responsive
window.addEventListener("resize", ()=>{selectWidth.setWidth(".track-slider",".slide-img-container")});


// Barra de búsqueda 
const titleSlider=document.querySelector(".slider-title-container");
const bar=document.querySelector(".search-bar");


titleSlider.addEventListener("mousemove", ()=>{
    titleSlider.style.transform="translate(100%)"
    titleSlider.style.transition="all 1s"
})

bar.addEventListener("mousemove", ()=>{
    bar.style.opacity="1"
    bar.style.transition= "all 0.7s"
})

bar.addEventListener("mouseleave", ()=>{

    setTimeout(()=>{
        bar.style.opacity="0.8"
        bar.style.transition= "all 0.7s"
    },2000)
   
})






/*Botones animados */

  //Elements from Dom
  const btnUpperLayer= document.querySelector(".text-box");
  const gradient=document.querySelector(".background-gradient");
  const buttonContainer=document.querySelector(".button-container");
  const lineAnimation= document.querySelector(".line-animation");
 
  



const test= new animateBtn(gradient, btnUpperLayer);

test.insertAnimationElse(".line-animation", 
                        {
                            overAccion:{fill: "forwards", direction: "normal", transformPropOne: "1px", transformProp:"60vw"},
                            outAccion:{fill: "forwards", direction: "normal",transformPropOne: "60vw", transformProp: "1px"}
                        }
                        ,"lineAnimation")


test.collect();
test.turnOn("slidingBackground",  {
    overAccion:{fill: "forwards", direction: "normal", transformPropOne: "translate(0px)", transformProp:"translate(-200px)"},
    outAccion:{fill: "forwards", direction: "normal", transformProp: "translate(-0px)"}
})


                        
                       



/*element, configuration, animationName */

/*
const test= new animateBtn(gradient, btnUpperLayer);
test.collect(".super-button",".background-gradient"); boton/animar 

test.turnOn("slidingBackground",  {
    overAccion:{fill: "forwards", direction: "normal", transformPropOne: "translate(0px)", transformProp:"translate(-200px)"},
    outAccion:{fill: "forwards", direction: "normal", transformProp: "translate(-0px)"}
})

.animation("object","animation");



 */
/*
const test2= new animateBtn(lineAnimation, btnUpperLayer);
test2.collect(".super-button",".line-animation");
test2.turnOn("lineAnimation",  {
    overAccion:{fill: "forwards", direction: "normal", transformPropOne: "1px", transformProp:"80vw"},
    outAccion:{fill: "forwards", direction: "normal", transformPropOne: "80vw",transformPropOne:"1px"}
})*/

// se debe colocar los parametros de confiuración de la animación de entrada y salida



