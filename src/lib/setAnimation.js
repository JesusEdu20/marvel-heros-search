/* colección de  animaciones*/

export const  setAnimation=(elementFill, elementDirection, transformProp, customAnimation)=>{

  console.log(transformProp)

    let slidingBackground=[[{transform: "translate(0px)"},
    {transform: transformProp}],

      {duration:200, iterations:1, direction: elementDirection, fill: elementFill } //config
    ]

    const animationCollection={slidingBackground}
    
    return animationCollection

   
  }   

 
