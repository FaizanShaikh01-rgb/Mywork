gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({scrollTrigger:{
    trigger:'.two',
    start:"0% 95%",
    end:"60% 50%",
    scrub: true,
    // markers: true,
}})
tl.to("#fanta",{
    top:"115%",
    left:"5%"
},'orange')
tl.to("#orange-slice",{
    top:"160%",
    left:"28%"
},'orange')
tl.to("#leaf",{
    rotate:"90deg",
    top:"90%",
    left:"35%"
},'orange')
tl.to("#leaf2",{
    top:"175%",
    left:"-5%"
},'orange')
tl.to("#orange",{
    width:"15%",
    top:"165%",
    right:"3%"
},'orange')

let tl2 = gsap.timeline({scrollTrigger:{
    trigger:'.three',
    start:"0% 95%",
    end:"40% 50%",
    scrub: true,
    // markers: true,
}})
tl2.from("#lemon",{
    rotate: "-90deg",
    bottom: "-50%",
    // left:"-10vw"
},'ca')
tl2.from("#sprite",{
    rotate: "-90deg",
    bottom: "-50%",
    // left:"-10vw"
},'ca')
tl2.from("#lychee",{
    rotate: "90deg",
    // bottom: "-50%",
    // right:"0vw"
},'ca')
tl2.from("#cocacola",{
    rotate: "90deg",
    // bottom: "-50%",
    // right:"0vw"
},'ca')
tl2.to("#orange-slice",{
    rotate: "90deg",
    width: "16%",
    top: "203%",
    left:"42%"
},'ca')
tl2.to("#fanta",{
    width: "31%",
    top: "214%",
    left:"34.5%"
},'ca')
tl2.to("#leaf",{
    rotate: "180deg",
    top: "195%",
    left:"90%"
},'ca')
tl2.to("#leaf2",{
    top: "276%",
    left:"-2%"
},'ca')