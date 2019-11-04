//countSheep(num)

const countSheep = function(num){
  //base case
  if(num === 0){
    return console.log('All sheep jumped over');
  }
  console.log(num+': Another sheep jumped over the fence');
  countSheep(num-1); 
};

//countSheep(3);

//Power Calculator

const powerCalculator = function(base, exponent) {
  if (exponent < 0)
    return 'exponent should be >= 0';
  if (exponent === 0)
    return 1;
  return powerCalculator(base, exponent - 1) * base;
}

console.log(powerCalculator(2, 0));