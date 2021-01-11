let slideScene;
let slides = document.querySelectorAll(".slide");
let body = document.querySelector("body ");
let animationSlide = document.querySelector(".animation-slide");
let text1 = document.querySelector(".text1");
let text2 = document.querySelector(".text2");
let text3 = document.querySelector(".text3");
let text4 = document.querySelector(".text4");
let text5 = document.querySelector(".text5");
let tiles = document.querySelectorAll(".img-cover");
let projectAnimationText = document.querySelector(".project-animation-text");
let burger = document.querySelector(".burger");

let controller = new ScrollMagic.Controller();
function addAnimationEffects(){

    window.addEventListener("load",()=>{
        text1.style.animation = "animate 2s ease forwards"
    })

    text1.addEventListener("animationend",()=>{
        text2.style.animation = "animate 2s ease forwards"
    })

    text2.addEventListener("animationend",()=>{
        text3.style.animation = "animate 2s ease forwards"
    })

    text3.addEventListener("animationend",()=>{
        text4.style.animation = "animate 2s ease forwards"
    })

    const slideT1 = gsap.timeline({defaults:{duration:2,ease:"power2.inOut"}});
    slideT1.fromTo(animationSlide,{scale:1,opacity:1},{scale:0.5,opacity:0})

    let aniSlide = new ScrollMagic.Scene({
        triggerElement:animationSlide,
        triggerHook:0.117,
        duration:'70%'
    }).addIndicators({colorStart:'white',colorTrigger:'white',name:'animation-slide',indent:100}).setTween(slideT1).setPin(animationSlide ,{pushFollowers:false}).addTo(controller);

    slides.forEach((slide,index,slides)=>{
        const slidesL1 = gsap.timeline({defaults:{duration:2,ease:'power2.inOut'}});
        let nextSlide = slides.length-1===index?'next':slides[index+1];
        slidesL1.fromTo(nextSlide,{y:'0%'},{y:'50%'})
        slidesL1.fromTo(slide,{opacity:1,scale:1},{opacity:0,scale:0.5});
        slidesL1.fromTo(nextSlide,{y:'50%'},{y:'0%'})

        slideScene = new ScrollMagic.Scene({
            triggerElement:slide,
            triggerHook:0.02,
            duration:'150%'
        }).addIndicators().setTween(slidesL1).setPin(slide,{pushFollowers:false}).addTo(controller);
    })
    
}

window.addEventListener("mousemove",(e)=>{
    let cursor = document.querySelector(".cursor");
   
    cursor.style.left=e.pageX + 'px';
    cursor.style.top=e.pageY + 'px';
})

window.addEventListener('mouseover',(e)=>{
    let cursor = document.querySelector(".cursor");
    let cursorText = document.querySelector(".cursor-text");
    if(e.target.classList.contains('logo')||e.target.classList.contains('burger')||e.target.classList.contains('line')){
        cursor.classList.add('cursor-active');
    }
    else{
        cursor.classList.remove('cursor-active');
    }

    if(e.target.classList.contains('explore')){
        cursor.classList.add('cursor-exp-active');
        cursorText.innerHTML = 'Tap!';
    }else{
        cursor.classList.remove('cursor-exp-active');
        cursorText.innerHTML = '';
    }
})

burger.addEventListener('click',(e)=>{
    let line1 = document.querySelector(".line1");
    let line2 = document.querySelector(".line2");
    let line3 = document.querySelector(".line3");
    let navBar = document.querySelector(".nav-bar");
    if(!e.target.classList.contains('burger-active')){
        e.target.classList.add('burger-active');
        const burgerAnimation = gsap.timeline({defaults:{duration:0.8,ease:'power2.inOut'}});
        burgerAnimation.to(line1,{rotate:'225deg',y:10,background:'white'});
        burgerAnimation.to(line2,{rotate:'-180deg',opacity:0,background:'white'},'-=0.8');
        burgerAnimation.to(line3,{rotate:'-225deg',y:-10,background:'white'},'-=0.8');
        burgerAnimation.to(navBar,1.5,{clipPath:'circle(1200px at 50% -10%)'},'-=0.8');
        body.classList.add('hide');
    }else{
        e.target.classList.remove('burger-active');
        const burgerAnimation = gsap.timeline({defaults:{duration:0.8,ease:'power2.inOut'}});
        burgerAnimation.to(line1,{rotate:'0deg',y:0,background:'#f8f418'});
        body.classList.remove('hide');
        burgerAnimation.to(line2,{rotate:'0deg',opacity:1,background:'#f8f418'},'-=0.8');
        burgerAnimation.to(line3,{rotate:'0deg',y:0,background:'#f8f418'},'-=0.8');
        burgerAnimation.to(navBar,1,{clipPath:'circle(50px at 50% -10%)'},'-=0.8');
    }
    
})

window.addEventListener("load",()=>{
    projectAnimationText.style.animation = 'animate1 3s ease infinite'
})

tiles.forEach(tile=>{tile.addEventListener("mouseenter",(e)=>{
        e.target.classList.add('image-cover-active');
})})

tiles.forEach(tile=>{tile.addEventListener("mouseleave",(e)=>{
        e.target.classList.remove('image-cover-active');
})})


let tileImages = document.querySelectorAll(".tile-img");

// function invisible(){
//     for(let i=0;i<10;i++){
//         tileImages[i].style.opacity =0;
//     }
// }

window.addEventListener("load",()=>{
    setInterval(invisible,5000);
})




addAnimationEffects();