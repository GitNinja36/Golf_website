var crsr= document.querySelector("#cursor")
var blur= document.querySelector("#cursor_blur")
document.addEventListener("mousemove",function(dets){
    crsr.style.left= dets.x+"px"
    crsr.style.top= dets.y+"px"
    blur.style.left= dets.x - 180 + "px"
    blur.style.top= dets.y - 180 + "px"
})
var h4all=document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 3
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid #95c11E"
        crsr.style.backgroundColor = "#95c11E"
    })
})
gsap.to("#nav",{
    backgroundColor:"#000",
    height:"109px",
    duration:0.5,
    scrollTrigger:{
         trigger:"#nav",
         scroller:"body", 
         //markers:true,
         start:"top -10%",
         end:"end -20%",
         scrub:1,
    }
})
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -25%",
        end:"end -70%",
        scrub:true,
    }
})
gsap.from("#about_us img,#about_us_in",{
    y:50,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#page_2",
        scroller:"body",
        /*markers:true,*/
        start:"top 50%",
        end:"top 20%",
        scrub:1,
    }
})
gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        /*markers:true,*/
        start:"top 80%",
        end:"top 65%",
        scrub:1,
    }
})
gsap.from("#colon_1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon_1",
        scroller:"body",
        //marker:true,
        start:"top 50%",
        end:"top 47%",
        scrub:2
    }
})
gsap.from("#colon_2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon_1",
        scroller:"body",
        //marker:true,
        start:"top 60%",
        end:"top 50%",
        scrub:2
    }
})
gsap.from("#page_4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page_4 h1",
        scroller:"body",
        //marker:true,
        start:"top 75%",
        end:"top 70%",
        scrub:3,
    }
})