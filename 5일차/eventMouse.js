document.addEventListener("DOMContentLoaded",function(){ 
    
  document.addEventListener("mousemove",function(ev){
    //console.log(ev);
    let img = document.querySelector("img");
    img.style.left = ev.clientX + 'px';
    img.style.top = ev.clientY + 'px';
  })
})