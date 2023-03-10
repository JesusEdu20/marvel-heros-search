

  //Animations

 const  btnBackgroundAnimation=(element, elementFill, elementDirection, transformProp)=>{

  element.animate([{transform: "translate(0px)"},
  {transform: transformProp}],
  {duration:200, iterations:1,
  direction: elementDirection, fill: elementFill })
  
}  

//LINE
const  lineAnimationOver=(element, elementFill, elementDirection, transformPropOne,transformProp)=>{

  element.animate([{width: transformPropOne},
  {width: transformProp}],
  {duration:200, iterations:1,
  direction: elementDirection, fill: elementFill })
  
}  

const  lineAnimationOut=(element, elementFill, elementDirection, transformPropOne,transformProp)=>{

  element.animate([{width:transformPropOne},
  {width: transformProp}],
  {duration:200, iterations:1,
  direction: elementDirection, fill: elementFill })
  
}  


  //Elements from Dom

  const btnUpperLayer= document.querySelector(".text-box");
  const backgroundGradient= document.querySelector(".background-gradient");

  const elementLine= document.querySelector(".line-animation");


  //Events
  btnUpperLayer.addEventListener("mouseover",()=>{
    btnBackgroundAnimation(backgroundGradient, "forwards", "normal", "translate(-200px)")
    console.log("mouse adentro")
  } )

  btnUpperLayer.addEventListener("mouseleave",()=>{
    console.log("mouse afuera")
    btnBackgroundAnimation(backgroundGradient, "forwards","normal", "translate(0px)")
  } )

  

  
//line
btnUpperLayer.addEventListener("mouseover",()=>{
  lineAnimationOver(elementLine, "forwards", "normal", "1px", "80vw")
} )

btnUpperLayer.addEventListener("mouseleave",()=>{
  lineAnimationOut(elementLine, "forwards","normal", "80vw", "1px")
} )