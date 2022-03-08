var tl = new TimelineMax({onUpdate: updatePercentage});
var tl2 = new TimelineMax();
const controller = new ScrollMagic.Controller();



tl.from("blockquote", 0.5, {x:200, opacity:0});
tl.from("span", 1, {width:0}, "=-0.5");
tl.from("#office", 1, {x:-200, opacity:0}, "=-1");
tl.from("#building", 1, {x:200, opacity:0}, "=-0.7");
//Box
tl2.from("#box", 1, {opacity:0, scale:0});
tl2.to("#box", 0.5, {
    left: "20%",
    scale: 1.3,
    borderColor: "white",
    borderWidth: 12,
    boxShadow: '1px 1px 0px 0px rgba(0,0,0,0.09) ' 
});

const scene = new ScrollMagic.Scene({
    triggerElement: ".sticky",
    triggerHook: "onLeave",
    duration: "100%"
})
.setPin(".sticky")
.setTween(tl)
.addTo(controller);


const scene2 = new ScrollMagic.Scene({
    triggerElement: "blockquote"
})
.setTween(tl2)
.addTo(controller);

function updatePercentage(){
    tl.progress();
    console.log(tl.progress());
}

//
const section = document.querySelector('#xyz')
const end = section.querySelector('h1')
//
const textAnimend = TweenMax.fromTo(end, 3, {opacity:0}, {opacity:1});
const textAnimend1 = TweenMax.fromTo(end, 3, {opacity:1}, {opacity:0});

let scene3 = new ScrollMagic.Scene({
    duration: 300,
    triggerElement: "#xyz",
    triggerHook: 0.5
})
.setTween(textAnimend)
.addTo(controller);

let scene4 = new ScrollMagic.Scene({
    duration: 500,
    triggerElement: "#xyz",
    triggerHook: 0
})
.setTween(textAnimend1)
.addTo(controller);
