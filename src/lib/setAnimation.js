/* colección de  animaciones*/
//elementFill, elementDirection, transformProp, customAnimation

export const  setAnimation=(configuration)=>{


    let slidingBackground=[[{transform: configuration["transformPropOne"]}, //frames
    {transform: configuration["transformProp"]}],

      {duration:200, iterations:1, direction:  configuration["direction"], fill:  configuration["fill"] } //config
    ]


    let lineAnimation=[[{width:configuration["transformPropOne"]},
      {width: configuration["transformProp"]}],

      {duration:200, iterations:1,
      direction: configuration["direction"], fill: configuration["fill"]}]


    const animationCollection={slidingBackground,lineAnimation}
    
    return animationCollection

   
  }   

 
