
import { selectWidth } from "./selectWidth.js";

export class slider {
    constructor(track, views, time, speed ){
        
        this.test=()=>{console.time()};
        this.track= document.querySelector(track);
        this.views=document.querySelectorAll(views);
        this.time= time;
        this.speed= speed;
        this.detectSlider=(pointer, track, classOfElementsTo)=>{
                
            return {numberOfElements:document.querySelectorAll(classOfElementsTo),
            spaceAvailable: pointer(track, document.querySelectorAll(classOfElementsTo))}
        }

        this.playAnimation=(sliderData)=>{
                
            if(sliderData.spaceAvailable<sliderData.numberOfElements.length){

                this.track.style.transition= `all ${speed}s`;
                this.track.style.marginLeft= "-100%";
                console.log("2903siasas")
            }
        }

        this.next=()=>{

            //let sliderSectionFirst= document.querySelectorAll(views)[0];
            //let sliderSectionSecond= document.querySelectorAll(views)[1];
            //Ojo aca para modificar despues
            //console.log("aqui")
            //console.log(this.track.clientWidth)
            //console.log( this.views[0].clientWidth)

            //Iniciar Animación de desplazamiento
            this.playAnimation(this.detectSlider( selectWidth.countElements, this.track, ".slide"))
            
            setTimeout(()=>{
                this.track.style.transition= "none";
                
                //verificar que este tomando el parametro correcto

                const moveImg=(detectSlider, track)=>{

                    //let firstSlider= document.querySelectorAll(element) 
                
                    //const elementsToMove=selectWidth.countElements(track, document. querySelectorAll(element));
                

                    if(detectSlider.spaceAvailable<detectSlider.numberOfElements.length){

                        for(let i=0; i<detectSlider.spaceAvailable; i++){   

                            track.insertAdjacentElement("beforeend", detectSlider.numberOfElements[i]);
                            
                        }   
                    
                        
                    }

                    this.track.style.marginLeft= "0%";
                } 
                    

                moveImg(this.detectSlider( selectWidth.countElements, this.track, ".slide"), this.track);

                /*this.track.insertAdjacentElement("beforeend", sliderSectionFirst)
                this.track.insertAdjacentElement("beforeend", sliderSectionSecond)*/
                
                setTimeout(() => {
                    this.next()
                }, time);



            }, `${speed*1000}`)
        }

    }

    play=()=>{
        let lastSlide=this.views[this.views.length-1]; //-1 para elegir la posicion del elem
        this.track.insertAdjacentElement("afterbegin", lastSlide)
        this.next()

    }


} 




/*Documentacion*/
