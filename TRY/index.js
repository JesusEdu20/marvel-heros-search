

  //Animations

 const  btnBackgroundAnimation=(element, elementFill, elementDirection, transformProp)=>{

  element.animate([{transform: "translate(0px)"},
  {transform: transformProp}],
  {duration:200, iterations:1,
  direction: elementDirection, fill: elementFill })
  
}  

  //Elements from Dom

  const btnUpperLayer= document.querySelector(".text-box");
  const backgroundGradient= document.querySelector(".background-gradient");


  //Events
  btnUpperLayer.addEventListener("mouseover",()=>{
    btnBackgroundAnimation(backgroundGradient, "forwards", "normal", "translate(-200px)")
    console.log("mouse adentro")
  } )

  btnUpperLayer.addEventListener("mouseleave",()=>{
    console.log("mouse afuera")
    btnBackgroundAnimation(backgroundGradient, "forwards","normal", "translate(0px)")
  } )

  

  
