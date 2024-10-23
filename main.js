const cursor = document.getElementById('cursor');
const cursor_blur = document.getElementById('cursor-blur');

// document.addEventListener('mousemove',(details)=>{
//     cursor.style.left = details.x+ 20 + "px"
//     cursor.style.top = details.y+ 20 + "px"
//     cursor_blur.style.left = details.x - 130 +"px"
//     cursor_blur.style.top = details.y - 130 +"px"
// })


gsap.to('.navbar',{
    backgroundColor:"#000",
    duration:1,
    scrollTrigger:{
        trigger:'.navbar',
        scroller:'body',
        start:"top -10%",
        end:"top -15%",
        // markers:true,
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor:'#000',
    duration:1,
    scrollTrigger:{
        trigger:"#main",
        scroller:'body',
        start:"top -20%",
        end:"top -70%",
        scrub:2,
        // markers:true
    }
})

gsap.from(".about-img1 ,.about-img2, .about-text",{
    y:70,
    opacity:0,
    duration:2,
    stagger:1,
    scrollTrigger:{
        trigger:'.about-img1,.about-img2, .about-text',
        scroller:'body',
        start:"top 80%",
        end:"top 30%",
        // markers:true,    
        scrub:2
    }
})
gsap.from(".sideimg, .side-image-text",{
    y:70,
    opacity:0,
    duration:2,
    stagger:1,
    scrollTrigger:{
        trigger:'.sideimg, .side-image-text',
        scroller:'body',
        start:"top 60%",
        end:"top 20%",
        // markers:true,
        scrub:2
    }
})
gsap.from(".curly-bracket .img1",{
    y:-90,
    x:-60,
    duration:1,
    scrollTrigger:{
        trigger:".curly-bracket .img1",
        scroller:'body',
        start:"top 30%",
        end:"top  40%",
        // markers:true,
        scrub:2
    }
})
gsap.from(".curly-bracket .img2",{
    y:90,
    x:60,
    duration:1,
    scrollTrigger:{
        trigger:".curly-bracket .img1",
        scroller:'body',
        start:"top 30%",
        end:"top  40%",
        // markers:true,
        scrub:2
    }
})

gsap.to("#page-4 .page4head",{
    y:-60,
    duration:1,
    scrollTrigger:{
        trigger:"#page-4 .page4head",
        scroller:'body',
        start:"top 60%",
        end:"bottom  20%",
        // markers:true,
        scrub:2
    }
})