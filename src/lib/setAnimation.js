/* colección de  animaciones*/
//elementFill, elementDirection, transformProp, customAnimation

export const  setAnimation=(configuration)=>{


    let slidingBackground=[[{transform: "translate(0px)"}, //frames
    {transform: configuration["transformProp"]}],

      {duration:200, iterations:1, direction:  configuration["direction"], fill:  configuration["fill"] } //config
    ]

    const animationCollection={slidingBackground}
    
    return animationCollection

   
  }   

 
