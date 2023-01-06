import { slider } from "./slider.js";
import { gallery } from "./gallery.js";
import { randomImg } from "./randomImg.js";

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



