import { setAnimation } from "./setAnimation.js";


export class animateBtn{
    constructor(elementToAnimate, elementUpperLayerBtn){

        this.elementToAnimate=elementToAnimate;
        this.upperLayerBtn=elementUpperLayerBtn;
        this.animation=setAnimation;
        this.box=[]
        this.add=(dataAnimation)=>{
            this.box.push(dataAnimation)
        }
        
        
        //SELECCIONA LA ANIMACIÓN Y REALIZA UN SET DE LA MISMA A TRAVES DEL SETANIMATION
        this.config=(config, executed)=>{
            let configuration=config
            let configurationSeleted;
            
            const select=()=>{
                configurationSeleted=(executed)?configuration["overAccion"]:configuration["outAccion"];
            }
            
            
            select()
            
           return configurationSeleted
           
        }

        //RECOGE TODOS LOS BOTONES Y ELMENTOS A ANIMAR
        this.collect=()=>{
                                                        //pasar parametros por las props
           const collectionBtn=document.querySelectorAll(".super-button");
           const collectionElementsToMove=document.querySelectorAll(".background-gradient");

            const collection={
            button: collectionBtn,
            elementToAnimate: collectionElementsToMove
           }
           
           return  collection
        }

        //APLICA LA ANIMACIÓN,LLAMADO A LA API WEB "ANIMATE"
        this.applyAnimation=(element,configuration, animationName)=>{

            //set de la animación
            const animation=this.animation(this.config(configuration, true ))
            element.animate(animation[animationName][0], animation[animationName][1])
        }
    }

    
    //ACTIVAR EVENTOS
    turnOn=(animationName, configuration)=>{
        //llamado a la propiedad collect; recolecta todos los botones para animación 
        let collectionBtn= this.collect();
        
        
        //mapeo de la lista de nodos "nodelist" de la propiedad button del objeto retornado por "this.collecT()"
       
        
        Array.from(collectionBtn.button).map((button, index)=>{
            
           
            collectionBtn.elementToAnimate[index]//elements to move
          
              button.addEventListener("mouseover", ()=>{

                /*const animation=this.config("forwards", "normal", "translate(-200px)", null)*/
                
                //set de la animación
                /*const animation=this.animation(this.config(configuration, true ))*/


                 //apply:(params: element, frames, optionsConfig)
                 /*this.applyAnimation(collectionBtn.elementToAnimate[index], animation[animationName][0], animation[animationName][1])*/

                //params: element, frames, configOptions, animationName

                this.applyAnimation(collectionBtn.elementToAnimate[index], configuration, animationName)

                /*
                 this.applyAnimation(collectionBtn.elementToAnimate[index], configuration, animationName)*/

                 /*
                 collectionBtn.elementToAnimate[index].animate(animation[animationName][0], animation[animationName][1])*/
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









/*
BOX=[]
recive: {
    element, 
    configuration, 
    animationName
}


const add=(dataAnimation)=>{
    BOX.push(dataAnimation)
}


*/

/*

const event=document.querySelector("#guide-icon")
let element2=document.querySelector("#img")
let element=document.querySelector("#logo-icon")


const displayNone=(element)=>{

   let element= document.querySelector(element)
    element.style.display="none"
}




const callback=(boton, displayNone)=>{

    boton.addEventListener("mouseover", displayNone)
}



const settter=(callback)=>{
    const colecction=[];

    const set=()=>{
        colecction.push(callback)
    }
   
    set()
    return colecction
}




//ejecutador 
const test=(settter, iterador)=>{
    for(let i=0; i<iterador; i++){
        settter(callback(event, displayNone))
    }
}


const accion=()=>{

    test(settter, 2)
    
}

const botones=[]

const callback=(boton, displayNone)=>{

    boton.addEventListener("mouseover", displayNone)
}

*/