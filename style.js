var tl = gsap.timeline({scrollTrigger:{
    trigger:".pg2",
    start:"10% 95%",
    end:"50% 50%",
    scrub:true,
    
   }})

   tl.to("#anim",{
    top: "100%",
    left: "6%"
})
var tl2 = gsap.timeline({scrollTrigger:{
    trigger:".pg3",
    start:"5% 90%",
    end:"60% 50%",
    scrub:true,
    
   }})

   tl2.to("#anim",{
    width:"35%",
    top: "210%",
    left: "33%",
})
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


   