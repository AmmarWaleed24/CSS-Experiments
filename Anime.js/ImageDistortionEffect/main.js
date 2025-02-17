let container = document.querySelector(".container");

for(let i =0; i<=400; i++) {

    let block = document.createElement('div');
    block.classList.add("block");
    container.appendChild(block);
}

let blocks = document.querySelectorAll(".block");
//function to start animation
function startAnimation() {

    let animation = anime.timeline({

        targets:blocks,
        easing:'easeInOutExpo',
        loop:1

    }).add({

        scale:0,
        translateX:()=>{return anime.random(-360, 2100)},
        translateY:()=>{return anime.random(-360, 2100)},
        rotate:()=>{return anime.random(-360, -360)},
        duration:()=>{return anime.random(500, 3000)}
    })
}
//function to stop animation
function stopAnimation() {

    let animation = anime.timeline({

        targets:blocks,
        easing:'easeInOutExpo',
        loop:1

    }).add({

        scale:1,
        translateX:0,
        translateY:0,
        rotate:0,
        duration:()=>{return anime.random(500, 3000)}
    })
}


container.addEventListener("mouseenter",()=>{


    startAnimation();


})

container.addEventListener("mouseleave",()=>{


    stopAnimation();
    

})
