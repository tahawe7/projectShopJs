function showDetails(a, b, c){
   if (a === "string"){
      a ="string"
   }
   else if (b === "number"){
      b ="number"
   }
   return `hello ${a} your age is ${b} you are ${c} available for hire`
}

console.log(showDetails(15,"amer",false)); 