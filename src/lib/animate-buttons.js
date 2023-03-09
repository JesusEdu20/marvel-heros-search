import { setAnimation } from "./setAnimation.js";


export class animateBtn{
    constructor(elementToAnimate, elementUpperLayerBtn){

        this.elementToAnimate=elementToAnimate;
        this.upperLayerBtn=elementUpperLayerBtn;
        this.animation=setAnimation;
        //elementFill, elementDirection, transformProp,customAnimation
        this.config=(config, executed)=>{
            /*return this.animation(elementFill, elementDirection, transformProp,customAnimation)*/
            let configuration=config
            let configurationSeleted;
            
            const select=()=>{
                configurationSeleted=(executed)?configuration["overAccion"]:configuration["outAccion"];
            }

            select()
         
           return configurationSeleted
           
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

    
    turnOn=(animationName, configuration)=>{

        //llamado a la propiedad collect; recolecta todos los botones para animación 
        let collectionBtn= this.collect();
        
        //mapeo de la lista de nodos "nodelist" de la propiedad button del objeto retornado por "this.collecT()"

        Array.from(collectionBtn.button).map((button, index)=>{


            collectionBtn.elementToAnimate[index]//elements to move
                
              button.addEventListener("mouseover", ()=>{

                /*const animation=this.config("forwards", "normal", "translate(-200px)", null)*/

                //set de la animación
                const animation=this.animation(this.config(configuration, true ))


                 //aply
                 collectionBtn.elementToAnimate[index].animate(animation[animationName][0], animation[animationName][1])
            })

                button.addEventListener("mouseleave", ()=>{

                    
                //set de la animación 
                /*const animation=this.config("forwards", "normal", "translate(0px)", null)*/
                
                const animation=this.animation(this.config(configuration, false))

                //aply
                collectionBtn.elementToAnimate[index].animate(animation[animationName][0], animation[animationName][1])
        })

    })
     
}

}



