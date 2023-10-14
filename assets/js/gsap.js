// ===================gsap======================


const logo = document.querySelector('.text__ani');

const letters = logo.textContent.split("");

logo.textContent="";

letters.forEach((letter)=>{
    logo.innerHTML += '<span class="letter">'+ letter +"</span>";
});

gsap.set(".letter",{display:"inline-block"});

gsap.fromTo(".letter",{
                            y:"100%"
                        },{
                            y:0,
                            delay:2,
                            stagger:0.05,
                            ease:'back.out(3)'
                        });


gsap.to(".letter",0.25,{
    delay:4,
    opacity:0,
   
}) ;



const time = gsap.timeline({default:{ stagger:true,ease:"Power.easeOut"},});


time.fromTo('#S',{
    x:100, 
    opacity:0
},
{
    x:0,
    opacity:1

});
time.fromTo('#O',{
    x:-100, 
    opacity:0
},
{
    x:0,
    opacity:1

});
time.fromTo('#N',{
    x:-100, 
    opacity:0
},
{
    x:0,
    opacity:1

});
time.fromTo('#A',{
    y:100, 
    opacity:0
},
{
    y:0,
    opacity:1

});

time.fromTo('#college-ani',{
    y:-100,
    opacity:0
},{
    y:0,
    opacity:1
});

time.fromTo('#tech-ani',{
    x:100,
    opacity:0
},{
    x:0,
    opacity:1
});

time.fromTo('#Vector-1',{
    x:100,
    opacity:0
},{
    x:0,
    opacity:1
},"<50%");




gsap.to(".sona",0.25,{
    delay:4,
    opacity:0,
    display:"none"
   
}) ;

gsap.to(".animation__boxes",0.25,{
    delay:6,
    opacity:0,
    display:"none"
   
}) ;




gsap.to(".bars", 1.5,{

    delay:4,
    height:0,
    stagger:{
        amount:1,
    },
    // ease:"power4.inOut",
    ease: "expo.out",

});





// ===================gsap======================