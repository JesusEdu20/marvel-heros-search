import { setAnimation } from "./setAnimation.js";


export class animateBtn{
    constructor(elementToAnimate, elementUpperLayerBtn){

        this.elementToAnimate=elementToAnimate;
        this.upperLayerBtn=elementUpperLayerBtn;
        this.animation=setAnimation;
        this.config=(elementFill, elementDirection, transformProp,customAnimation)=>{
            
           return this.animation(elementFill, elementDirection, transformProp,customAnimation)
        }
    }

    
    turnOn=(animationName)=>{

        this.upperLayerBtn.addEventListener("mouseover", ()=>{

            const animation=this.config("forwards", "normal", "translate(-200px)", null)
            this.elementToAnimate.animate(animation[animationName][0], animation[animationName][1])
        })

        this.upperLayerBtn.addEventListener("mouseleave", ()=>{
            console.log("mouseafuera")
            const animation=this.config("forwards", "normal", "translate(0px)", null)
            this.elementToAnimate.animate(animation[animationName][0], animation[animationName][1])
        })

    }

}



