let input = document.getElementById("input")
let submit = document.getElementById("submit")
let firstNumber = document.getElementById("number")
let secondNumber = document.getElementById("number2")
let prime = document.getElementById("prime")
let primeNumber = document.getElementById("primeNumber")

let lower = ''
let higher =''


submit.addEventListener("click", function(){

  if(lower != '' && higher != '' ){
    alert("You can only choose 2 numbers")
  }
  else if(lower === ''){
    lower = parseInt(input.value)
    firstNumber.innerHTML += lower
    input.value = "" ;
  }
  else{
    higher = parseInt(input.value)
  secondNumber.innerHTML += higher;
    input.value = ""
}
 
})

prime.addEventListener("click", function(){

  for (let i = lower; i <= higher; i++) {
    let check = 0;
    
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            check = 1;
            break;
        }
    }

    if (i > 1 && check === 0) {
      
      let myPrimeNumbers = i
      primeNumber.innerHTML += myPrimeNumbers + " "
    }
  }
})

  