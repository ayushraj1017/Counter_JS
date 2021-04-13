const val = document.querySelector("#value");
const incBtn = document.getElementById("increment");
const resetBtn = document.getElementById("reset");
const decBtn = document.getElementById("decrement");
let counter = 0;

incBtn.addEventListener("click",  () =>{
  counter += 1;
  val.textContent = counter;
});

resetBtn.addEventListener("click",  ()=> {
  counter = 0;
  val.textContent = counter;
});

decBtn.addEventListener("click",  ()=> {
  counter -= 1;
  val.textContent = counter;
});
