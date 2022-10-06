let total = 0;

function addition (x){
    total += x;
    return total;
}

function soustraction (x){
    total -= x;
    return total;
}

function multiplication (x){
    if(total===0){
        return (total=x);
    }else{
        total *= x;
        return total;
    }
}

function division (x){
    if(total===0){
        return (total=x);
    }else{
        total /= x;
        return total;
    }
}

function reset(){
    total =0;
}

// Ajout des evenements on click
const boutton = document.querySelectorAll("button");
const result = document.querySelector(".calc__reset");

boutton.addEventListener("click", ()=>{
    result.textContent = "test";
});
