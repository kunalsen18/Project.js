let Dino= document.querySelector(".dino");
let Dragon = document.querySelector(".obstacle");
let score_count = document.querySelector("#score_count");
let game_over= document.querySelector(".Game_over");
let reset_btn = document.querySelector("#reset_btn")

let score = 0;
let cross = true;

document.onkeydown = function(e){
    if(e.keyCode==38){
        Dino.classList.add("dino_animated");
        setTimeout(()=>{
            Dino.classList.remove("dino_animated")
        },700)
    }
    if(e.keyCode == 39){
        dinoX = parseInt(window.getComputedStyle(Dino,null).getPropertyValue("left"));
        Dino.style.left = dinoX + 100 + "px"

    }
    if(e.keyCode == 37){
        dinoX = parseInt(window.getComputedStyle(Dino,null).getPropertyValue("left"));
        Dino.style.left = (dinoX - 100) + "px"

    }
}
setInterval(() => {
    dx = parseInt(window.getComputedStyle(Dino,null).getPropertyValue("left"))
    dy = parseInt(window.getComputedStyle(Dino,null).getPropertyValue("top"))

    ox = parseInt(window.getComputedStyle(Dragon,null).getPropertyValue("left"))
    oy = parseInt(window.getComputedStyle(Dragon,null).getPropertyValue("top"))

    offsetX = Math.abs(dx - ox)
    offsetY = Math.abs(dy - oy)

    if(offsetX<80 && offsetY<100){
        game_over.style.visibility = "visible";
        reset_btn.style.visibility = "visible";
        Dragon.classList.remove("obstacle_animate");
    }
    else if(offsetX<100 && cross){
        score += 1;
        update_score(score);
        cross=false;
        setTimeout(() => {
            cross=true;
        },1000);
        
    }
},10)

const update_score = (score) => {
    score_count.innerText = "Your Score: "+(score )
}

const reset_game = () => {
    score = 0;
    cross = true;
    game_over.style.visibility = "hidden";
    reset_btn.style.visibility = "hidden";
    score_count.innerText = "Your Score: "+ 0;
    Dragon.classList.add("obstacle_animate");
}

reset_btn.addEventListener("click",reset_game)