export const randomImg=(classViews, max, img)=>{
    let views=document.querySelectorAll(classViews);
    let arra=Array.from(views);
    arra.map((view)=>{
    
    view.getAttribute("src");
    view.setAttribute("src", img[Math.floor((Math.random() * max))].img);
    

    })
}

