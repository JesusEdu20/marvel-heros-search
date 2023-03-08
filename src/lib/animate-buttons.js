import { setAnimation } from "./setAnimation.js";


export class animateBtn{
    constructor(elementToAnimate, elementUpperLayerBtn){

        this.elementToAnimate=elementToAnimate;
        this.upperLayerBtn=elementUpperLayerBtn;
        this.animation=setAnimation;
        this.config=(elementFill, elementDirection, transformProp,customAnimation)=>{
            
           return this.animation(elementFill, elementDirection, transformProp,customAnimation)
        }

        this.collect=()=>{
           const collectionBtn=document.querySelectorAll(".super-button");
           const collectionElementsToMove=document.querySelectorAll(".background-gradient");

           const collection={
            button: collectionBtn,
            elementToAnimate: collectionElementsToMove
           }
           return  collection
        }
    }

    
    turnOn=(animationName)=>{

        //llamado a la propiedad collect; recolecta todos los botones para animación 
        let collectionBtn= this.collect();
        
        //mapeo de la lista de nodos "nodelist" de la propiedad button del objeto retornado por "this.collecT()"

        Array.from(collectionBtn.button).map((button, index)=>{


            collectionBtn.elementToAnimate[index]//elements to move
                
              button.addEventListener("mouseover", ()=>{

                const animation=this.config("forwards", "normal", "translate(-200px)", null)

                 //aply
                 collectionBtn.elementToAnimate[index].animate(animation[animationName][0], animation[animationName][1])
            })

                button.addEventListener("mouseleave", ()=>{
                console.log("mouseafuera")
                const animation=this.config("forwards", "normal", "translate(0px)", null)

                //aply
                collectionBtn.elementToAnimate[index].animate(animation[animationName][0], animation[animationName][1])
        })

    })
     
}

}



