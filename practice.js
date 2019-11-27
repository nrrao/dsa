const countSheep = function(num){
  //base case
  if(num === 0){
    return console.log('All Sheep jumped Over');
  }
  console.log(num,':Another sheep jumps over the fence');
  countSheep(num-1);
};

// countSheep(3);

//console.log(12%11)

//1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

function fibonacci1(num){
  let a=0,b=1,temp=1;

  while(num>=0){
    temp = a;
    a=a+b;
    b = temp;
    num --;
  }
  return b;
}

//console.log(fibonacci1(5))

function fibonacci(n) {
  // Base case
  if (n <= 0) {
    return 0;
  }
  // Base case
  if (n <= 2) {
    return 1;
  }	
  // Recursive case
  return fibonacci(n - 1) + fibonacci(n - 2);	
}

//console.log(fibonacci(5));

function looping(n) {
  var a = 0, b = 1, f = 1;
  for(var i = 2; i <= n; i++) {
    f = a + b;
    a = b;
    b = f;
  }
  return f;
};

function fib(num){
  let fibarr =[1,1];
  
  for(let i=2;i<=num-1;i++){
    fibarr[i] =fibarr[i-2]+fibarr[i-1];
    
  }
  console.log(fibarr)
}

console.log(fib(8))


var recursive = function(n) {
  if(n <= 2) {
    return 1;
  } else {
    return this.recursive(n - 1) + this.recursive(n - 2);
  }
};

console.log(looping(8))
