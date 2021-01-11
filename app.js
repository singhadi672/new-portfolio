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
let blogs = document.querySelectorAll(".blog");

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
    }).setTween(slideT1).setPin(animationSlide ,{pushFollowers:false}).addTo(controller);

    slides.forEach((slide,index,slides)=>{
        const slidesL1 = gsap.timeline({defaults:{duration:2,ease:'power2.inOut'}});
        let nextSlide = slides.length-1===index?'next':slides[index+1];
        slidesL1.fromTo(nextSlide,{y:'0%'},{y:'50%'})
        slidesL1.fromTo(slide,{opacity:1,scale:1},{opacity:0,scale:0.5});
        slidesL1.fromTo(nextSlide,{y:'50%'},{y:'0%'})

        slideScene = new ScrollMagic.Scene({
            triggerElement:slide,
            triggerHook:0.02,
            duration:'100%'
        }).setTween(slidesL1).setPin(slide,{pushFollowers:false}).addTo(controller);
    })

}

blogs.forEach((blog,index,blogs)=>{
    const slidesT1 = gsap.timeline({defaults:{duration:2,ease:"power2.inOut"}});
    let nextblog = blogs.length-1===index?'next':blogs[index+1];
    slidesT1.fromTo(blog,{opacity:1,scale:1,y:"0%"},{opacity:0,scale:1,y:'-200px',rotateX:'60deg'});

    const blogScene = new ScrollMagic.Scene({
        triggerElement:blog,
        triggerHook:0.2,
        duration:"100%"
    }).setTween(slidesT1).addTo(controller);
})

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


let imageTile1 = document.querySelector(".img1");
let imageTile2 = document.querySelector(".img2");
let imageTile3 = document.querySelector(".img3");
let imageTile4 = document.querySelector(".img4");
let imageTile5 = document.querySelector(".img5");
let imageTile6 = document.querySelector(".img6");
let imageTile7 = document.querySelector(".img7");
let imageTile8 = document.querySelector(".img8");
let imageTile9 = document.querySelector(".img9");
let imageTile10 = document.querySelector(".img10");

window.addEventListener("load",()=>{
    const tileT1 = gsap.timeline({defaults:{duration:1.5,ease:"power2.inOut"}})
    tileT1
    .fromTo(imageTile1,{opacity:0},{opacity:1})
    .fromTo(imageTile4,{opacity:0},{opacity:1},'-=1')
    .fromTo(imageTile2,{opacity:0},{opacity:1},'-=1')
    .fromTo(imageTile3,{opacity:0},{opacity:1},'-=1')
    .fromTo(imageTile6,{opacity:0},{opacity:1},'-=2')
    .fromTo(imageTile5,{opacity:0},{opacity:1},'-=0.5')
    .fromTo(imageTile10,{opacity:0},{opacity:1},'-=1')
    .fromTo(imageTile8,{opacity:0},{opacity:1},'-=1')
    .fromTo(imageTile9,{opacity:0},{opacity:1},'-=1')
    .fromTo(imageTile7,{opacity:0},{opacity:1},'-=1')
})

addAnimationEffects();
