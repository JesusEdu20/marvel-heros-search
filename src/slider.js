
import { selectWidth } from "./selectWidth.js";

export class slider {
    constructor(track, views, time, speed ){
        console.log()
        this.test=()=>{console.time()};
        this.track= document.querySelector(track);
        this.views=document.querySelectorAll(views);
        this.time= time;
        this.speed= speed;
        this.next=()=>{

            let sliderSectionFirst= document.querySelectorAll(views)[0];
            let sliderSectionSecond= document.querySelectorAll(views)[1];
            //Ojo aca para modificar despues
            console.log("aqui")
            console.log(this.track.clientWidth)
            console.log( this.views[0].clientWidth)
            

            this.track.style.transition= `all ${speed}s`;
            this.track.style.marginLeft= "-100%";

            setTimeout(()=>{
                this.track.style.transition= "none";


                //verificar que este tomando el parametro correcto
                const moveImg=(track, element)=>{
                let firstSlider= document.querySelectorAll(element) 
                
                const elementsToMove=selectWidth.countElements(track, document.querySelectorAll(element));
                    

                for(let i=0; i<elementsToMove; i++){                

                    track.insertAdjacentElement("beforeend", firstSlider[i]);

                    }   
                }
                moveImg(this.track, ".slide")

                /*this.track.insertAdjacentElement("beforeend", sliderSectionFirst)
                this.track.insertAdjacentElement("beforeend", sliderSectionSecond)*/

                this.track.style.marginLeft= "0%";
                

                setTimeout(() => {
                    this.next()
                }, time);



            }, `${speed*1000}`)
        }

    }

    play=()=>{
        let lastSlide=this.views[this.views.length-1];
        this.track.insertAdjacentElement("afterbegin", lastSlide)
        this.next()

    }


} 

