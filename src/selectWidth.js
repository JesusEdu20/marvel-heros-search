/*
Descripción:
Funcion hecha para escuchar el evento resize para formatear el Width
de los elementos contenidos dentro de un contenedor, dependiendo de si
el width del contenedor contiene a una cantidad par de elementos, de ser 
así modifica el Width de los elementos, de no ser así asigna el width por 
defecto

*/


/*export const setWidth=(containerWidthParameter, elementWidthParameter)=>{

  
    let containerWidth=document.querySelector(`${containerWidthParameter}`);
    
    let elementWidthCollection= document.querySelectorAll(`${elementWidthParameter}`);
    let elementWidth=Array.from(elementWidthCollection);

   

   /*elementWidth[0].clientWidth//no va 
    
    const divider=Math.floor(containerWidth.clientWidth/320)
    console.log(divider)
    
    if(divider%2==0){

        console.log("par");
       
        elementWidth.map((elem)=>{elem.style.width=`${containerWidth.clientWidth/divider}px`})
        console.log(elementWidth.clientWidth)
        console.log("llega")
    }

    else{

        console.log("impar");
        elementWidth.map((elem)=>
        {elem.style.width=divider-1==0?`${containerWidth.clientWidth}px`:`${containerWidth.clientWidth/(divider-1)}px`});
    }
}
*/


export class selectWidth{
    constructor(){


    }


    static setWidth=(containerWidthParameter, elementWidthParameter)=>{

  
        let containerWidth=document.querySelector(`${containerWidthParameter}`);
        
        let elementWidthCollection= document.querySelectorAll(`${elementWidthParameter}`);
        let elementWidth=Array.from(elementWidthCollection);
        
        
    
       /*elementWidth[0].clientWidth */
        
        const divider=Math.floor(containerWidth.clientWidth/320)
        console.log(divider)    
        
        if(divider%2==0){
            
            console.log(`el devider es  ${divider}`);
            console.log(`el tamaño es ${containerWidth.clientWidth/divider}`);
            if(divider<=4){
                elementWidth.map((elem)=>{elem.style.width=`${containerWidth.clientWidth/divider}px`})
                console.log("menor o igual que 4")
            }
            else{
                
                elementWidth.map((elem)=>{elem.style.width=`${containerWidth.clientWidth/elementWidthCollection.length}px`})
                console.log("mayor o igual que 4")
            }
           

         
        }

       
        else{
            
         

            if(divider<=4){
                elementWidth.map((elem)=>
                {elem.style.width=divider-1==0?`${containerWidth.clientWidth}px`:`${containerWidth.clientWidth/(divider-1)}px`});
            }
            else{

                elementWidth.map((elem)=>{elem.style.width=`${containerWidth.clientWidth/elementWidthCollection.length}px`})
                
            }
           
        }
    }
    
    static countElements=(containerWidth,elementWidth)=>{
      
        // Math.floor(containerWidth.clientWidth/elementWidth[0].clientWidth);
        const howFit=Math.floor(containerWidth.clientWidth/320)
        console.log(`esta ${howFit}`)
        console.log(`esta ${howFit%2==!0 && howFit>1 ?howFit-1:howFit}`)
        return howFit%2==!0 && howFit>1 ?howFit-1:howFit


    }
}






/*export const setWidth=(containerWidthParameter, elementWidthParameter)=>{

let containerWidth=document.querySelector(`${containerWidthParameter}`);
let elementWidth= document.getElementsByClassName(`${elementWidthParameter}`);

const divider=Math.floor(containerWidth/elementWidth)
(containerWidth.clientWidth/divider)%2==0
?elementWidth.map((elem)=>{elem.style.width=containerWidth/divider})
:elementWidth.map((elem)=>{elem.style.width=elementWidth});



containerWidth.clientWidth/divider)

}*/























