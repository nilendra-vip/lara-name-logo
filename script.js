var time =gsap.timeline()


time.from('#l1',{
    height:"0",
    duration:.4,
    delay:1
})
time.from('#l2',{
    height:"0",
    duration:.4,
})
time.from('#l4',{
    width:"0",
    duration:.4,
})

time.from('#a11',{
    height:"0",
    duration:.4,
})
time.from('#a12',{
    height:"0",
    duration:.4,
})
time.from('#a13',{
    width:"0",
    duration:.4,
})

time.from('#r1',{
    height:"0",
    duration:.3
})
time.from('#r2',{
    width:"0",
    duration:.3
})

time.from('#r3',{
    width:"0",
    duration:.1,
})
time.from('#r5',{
    height:"0",
    duration:.3
})
time.from('#r6',{
    height:"0",
    duration:.1,
})
time.from('#r8',{
    width:"0",
    duration:.3
})
time.from('#r9',{
    height:"0",
    duration:.3
})
time.from('#a21',{
    height:"0",
    duration:.4,
})
time.from('#a22',{
    height:"0",
    duration:.4,
})
time.from('#a23',{
    width:"0",
    duration:.4,
})

time.to(".l-line,.a1-line, .r-line, .a2-line",{
    backgroundColor:'springgreen',
    duration:1,   
    delay:-.5
})
time.to(" h2",{
    color:"springgreen",
    duration:.5,
    delay:-.5
})
time.to("#main ,#l3, #r4 , #r7",{
    backgroundColor:'black',
    duration:1,
    delay:-.1 
})
