const buttons = document.querySelectorAll(".btn");
const reSet = document.querySelector(".reset");
const result = document.getElementById("result");

buttons.forEach(button => {
    button.addEventListener('click',(action)=>{
        result.textContent += action.target.id;
    })
});

egal.addEventListener('click', ()=>{
    result.textContent = eval(result.textContent);
})

reSet.addEventListener('click', ()=>{
    result.textContent = "";
})
