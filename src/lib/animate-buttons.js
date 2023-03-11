import { setAnimation } from "./setAnimation.js";


export class animateBtn{
    constructor(elementToAnimate, elementUpperLayerBtn){

        this.elementToAnimate=elementToAnimate;
        this.upperLayerBtn=elementUpperLayerBtn;
        this.animation=setAnimation;
        this.box=[],
        this.insertAnimationElse=(element, configuration, animationName )=>{

            this.box.push({
                elements:Array.from(document.querySelectorAll(element)),
                configuration: configuration,
                animationName: animationName

            });
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
            elementToAnimate: collectionElementsToMove,
            animationElse:this.box

           }
           
           return  collection
        }

        //APLICA LA ANIMACIÓN,LLAMADO A LA API WEB "ANIMATE"
        this.applyAnimation=(element, configuration, animationName, executed)=>{

            //set de la animación
            const animation=this.animation(this.config(configuration, executed ))
            element.animate(animation[animationName][0], animation[animationName][1])
        }
    }

    
    //ACTIVAR EVENTOS
    turnOn=(animationName, configuration)=>{
        //llamado a la propiedad collect; recolecta todos los botones para animación 
        let collectionBtn= this.collect();
        
        //mapeo de la lista de nodos "nodelist" de la propiedad button del objeto retornado por "this.collecT()"

        
      
        //console.log(this.box.length)
        //BUCLE/MAP

        Array.from(collectionBtn.button).map((button, index)=>{
            
            collectionBtn.elementToAnimate[index]//elements to move
          
              button.addEventListener("mouseover", ()=>{

                //params: element, frames, configOptions, animationName

                this.applyAnimation(collectionBtn.elementToAnimate[index], configuration, animationName, true)

                for(let i=0; i<collectionBtn.animationElse.length; i++){
                                        //element

                    this.applyAnimation(collectionBtn.animationElse[i].elements[index], collectionBtn.animationElse[i].configuration, collectionBtn.animationElse[i].animationName, true)
                    //Hacer mas legible

                }

                   
                
               

            })

                button.addEventListener("mouseleave", ()=>{
                    
                //set de la animación 
                /*const animation=this.config("forwards", "normal", "translate(0px)", null)*/
                
                //params: element, frames, configOptions, animationName

                this.applyAnimation(collectionBtn.elementToAnimate[index], configuration, animationName, false)

                for(let i=0; i<collectionBtn.animationElse.length; i++){
                                        //element
                    
                    this.applyAnimation(collectionBtn.animationElse[i].elements[index], collectionBtn.animationElse[i].configuration, collectionBtn.animationElse[i].animationName, false)
                    //Hacer mas legible

                }

                  



                /* VERSION 1
                const animation=this.animation(this.config(configuration, false))

                //aply
                collectionBtn.elementToAnimate[index].animate(animation[animationName][0], animation[animationName][1])*/
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