var answer = prompt("Please enter the number you would like to FizzBuzz up to: ");

for (var counter = 1; counter < answer; counter++) {
 if(counter%3===0 && counter%5===0){
   console.log('FizzBuzz')
 }
 else if (counter%3===0){
    console.log("Fizz");
} 
  else if (counter%5===0){
    console.log("connor goto bed");
  }
  else{
    console.log(counter);
  }
}
