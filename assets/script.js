
function shuffle() {
    let a = Math.floor(Math.random()*6)+1;
    let b = Math.floor(Math.random()*6)+1;
    
    // dice 1
    if(a===5) {
        document.querySelector(".dice1").innerHTML="<i class='fa-solid fa-dice-five'></i>" ;
    }
    else if(a===4) {
        document.querySelector(".dice1").innerHTML="<i class='fa-solid fa-dice-four'></i>" ;
    }
    else if(a===3) {
        document.querySelector(".dice1").innerHTML="<i class='fa-solid fa-dice-three'></i>" ;
    }
    else if(a===2) {
        document.querySelector(".dice1").innerHTML="<i class='fa-solid fa-dice-two'></i>" ;
    }
    else if(a===1) {
        document.querySelector(".dice1").innerHTML="<i class='fa-solid fa-dice-one'></i>" ;
    }
    
    // dice 2 
    if(b===5) {
        document.querySelector(".dice2").innerHTML="<i class='fa-solid fa-dice-five'></i>" ;
    }
    else if(b===4) {
        document.querySelector(".dice2").innerHTML="<i class='fa-solid fa-dice-four'></i>" ;
    }
    else if(b===3) {
        document.querySelector(".dice2").innerHTML="<i class='fa-solid fa-dice-three'></i>" ;
    }
    else if(b===2) {
        document.querySelector(".dice2").innerHTML="<i class='fa-solid fa-dice-two'></i>" ;
    }
    else if(b===1) {
        document.querySelector(".dice2").innerHTML="<i class='fa-solid fa-dice-one'></i>" ;
    }
}
