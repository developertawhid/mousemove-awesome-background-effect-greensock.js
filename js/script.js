// google search
/*==============greensock tweenmax==============*/


document.addEventListener("mousemove", e => {
    gsap.to(".circle", {
        x : e.clientX,
        y : e.clientY,
    });
});


