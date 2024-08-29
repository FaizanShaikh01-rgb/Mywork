gsap.from("#nav .c",{
    y:-100,
    opacity:0,
    duration:0.8,
    delay:1
})
gsap.from("#nav h1",{
    x:100,
    opacity:0,
    duration:0.8,
    delay:0.5
})
gsap.from("#nav #nav-part2 h5",{
    y:-100,
    opacity:0,
    duration:1,
    delay:1,
})
gsap.from("#nav #sign",{
    x:100,
    opacity:0,
    duration:1,
    delay:0.5
})
gsap.from("#left h1",{
    x:-100,
    opacity:0,
    duration:1,
    delay:2,
    stagger:0.3
})
gsap.from("#right img",{
    scale:2,
    opacity:0,
    duration:1,
    delay:3
})