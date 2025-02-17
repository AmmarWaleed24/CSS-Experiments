
let container = document.querySelector('.container');

// Create 400 blocks
for (let i = 0; i <= 400; i++) {
    let block = document.createElement('div');
    block.classList.add('block');
    container.appendChild(block);
}


let blocks = document.querySelectorAll(".block");
  
function startAnimation() {
let animation = anime.timeline({
    targets: blocks,
    easing: 'easeInOutExpo',
    loop: 1
    
});   
    animation
    .add({
        scale: 0,
        translateX: () => anime.random(-360, 2100),
        translateY: () => anime.random(-360, 2100),
        rotate: () => anime.random(-360, 360),
        duration: () => anime.random(500, 3000)
      
    })
    
    
}

function stopAnimation() {
    let animation = anime.timeline({
    targets: blocks,
    easing: 'easeInOutExpo',
    loop: 1
});   
animation.add({
    scale: 1,
    translateX: 0,
    translateY: 0,
    rotate: 0,
    duration: () => anime.random(500, 3000),
});
}
container.addEventListener("mouseenter",()=>{

    startAnimation();
})

container.addEventListener("mouseleave",()=>{

    stopAnimation();
})
