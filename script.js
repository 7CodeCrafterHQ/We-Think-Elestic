function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

function loder(){
    var tl = gsap.timeline()
    tl.to("#box1",{
        opacity:1,
        duration:0.2
    })
    tl.to("#box2",{
        opacity:1,
        duration:0.2
    })
    .to("#box3",{
        opacity:1,
        duration:0.2
    })
    .to("#box4",{
        opacity:1,
        duration:0.2
    })
    .to("#box5",{
        opacity:1,
        duration:0.2
    })
    .to("#box6",{
        opacity:1,
        duration:0.2
    })
    
    .to("#box7",{
       opacity:1,
       duration:0.2
    })
    .to("#box8",{
        opacity:1,
        duration:0.2
    })
    .to("#box9",{
        opacity:1,
        duration:0.2
    })
    .to("#box10",{
        opacity:1,
        duration:0.2
    })
    .to("#box11",{
        opacity:1,
        duration:0.2
    })
    gsap.to("#lodingpage",{
        y:-100 + "%",
        duration:1,
        delay:2
    })

}

function page1(){
    var page1_h1 = document.querySelector("#page1 h1");
 
    var clutter = "";
   page1_h1.textContent.split("").forEach(function(elem){
     clutter += `<span>${elem}</span>`
     page1_h1.innerHTML = clutter
   })
  
   gsap.from("#page1 h1 span",{
     y:100,
     duration:0.5,
     delay:2,
     stagger:0.5,
     opacity:0,
     scrub:2
   })
  
}
 

  function page2(){
    gsap.to("#page2 video",{
        width:100+"%",
        scrollTrigger:{
            trigger:"#page2",
            scroller:"#main",
    
            start:"top 95%",
            end : "top 0%",
             scrub:2,
          },
    })
  }

function page3(){
    var page3_h3 = document.querySelector("#page3 h3");
 
var clutter3 = "";
page3_h3.textContent.split("").forEach(function(elem3){
 clutter3 += `<span>${elem3}</span>`
 page3_h3.innerHTML = clutter3

})

gsap.from("#page3 h2, #page3 h3",{
 y:100,
 opacity:0,
 stagger:2,
 scrollTrigger:{
  trigger:"#page3",
  scroller:"#main",
  
  start:"top 80%",
  end:"top 10%",
  scrub:2
 }
 
})
}

function page7(){
    gsap.to("#page7 h1",{
        scrollTrigger:{
            trigger:"#page7",
            scroller:"#main",
            start:"top 0%",
            end:"top -150%",
            pin:true,
            scrub:true,
        },
        x:"-120%"
    })
}
loco();
loder();
page1();
page2();
page3();
page7();