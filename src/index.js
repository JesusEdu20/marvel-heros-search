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
const principalSlider= new slider (".track-slider", ".slide", 7000, 0.7);
principalSlider.play()


window.addEventListener("resize", ()=>{selectWidth.setWidth(".track-slider",".slide-img-container")});







