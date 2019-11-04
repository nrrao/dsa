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
};

//console.log(powerCalculator(2, 0));

const reverseString = function(string){ 
  if (string === '') return '';

  return string[string.length-1]+reverseString(string.slice(0,string.length-1)); 
};

//console.log(reverseString('cat'));

//nth Triangular Number

const triangularNumber = function(num) {
  if (num === 1) {
    return 1;
  }
  return num + triangularNumber(num-1);
};

// console.log(triangularNumber(6));

const strSplitter=function(string,seperator,result=[]){
  
  if(string.indexOf(seperator)===-1)
  {
     result.push(string);
     return result
  }
  
   result.push(string.slice(0,string.indexOf(seperator)))
  return strSplitter(string.slice(string.indexOf(seperator)+1),seperator,result);
}

console.log(strSplitter('02/20/2020','/'))