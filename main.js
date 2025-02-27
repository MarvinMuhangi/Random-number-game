// console.log(Math.floor(Math.random()* 20 ))


let submit = document.querySelector("#btn")
submit.addEventListener("click", random)
let ran_num = Math.floor(Math.random()* 10 ) + 1

window.addEventListener('load',first)
function first(){
  console.log(ran_num)
}


let num  = 3


function random(){
  let input = document.querySelector(".inpt").value
  input = parseInt(input)
  if (input === ran_num){
    document.querySelector("#titl").innerText = `You are correct, I had ${ran_num} in mind.`
    submit.innerText = "Home"
    submit.addEventListener("click", refresh)
    

  }else if(input !== ran_num){
    num--
    document.querySelector("#titl").innerText = `No, try again. You got ${num} tries remaining.`
    if(num ==1){
      document.querySelector("#titl").innerText = `No, try again. You got ${num} try remaining.`
    }
    if(num == 0){
      document.querySelector("#titl").innerText = `Sorry You ran out of Guesses!`
      submit.innerText = "Home"
      submit.addEventListener("click", refresh)
    }
    // console.log(ran_num)
  } 
    // console.log(ran_num)
 
}

function refresh(){
  location.reload()
}