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
    return result;
  }
  
  result.push(string.slice(0,string.indexOf(seperator)));
  return strSplitter(string.slice(string.indexOf(seperator)+1),seperator,result);
};

//console.log(strSplitter('02/20/2020','/'))

const fibonacci = function(num, seq=[]) {
  if(num === 1) {
    return [1, 1];
  }
  if(seq.length === num-1) {
    return seq;
  }
  seq = fibonacci(num-1);
  seq.push(seq[seq.length-1] + seq[seq.length-2]);
  return seq;
};

// console.log(fibonacci(7));

const factorial = function(num){
  if (num === 1)
    return 1;
  return num * factorial(num-1);
};

// console.log(factorial(5));

let mySmallMaze = [
  [' ', ' ', ' '],
  [' ', '*', ' '],
  [' ', ' ', 'e']
];

let maze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

const findWay = function(arrayMaze,result=''){
  for (let i=0; i<arrayMaze.length; i++){
    if(arrayMaze[i])
    
      for(let j=1; j<arrayMaze[i].length;j++)
      {
        console.log(arrayMaze[i][j])
        // if(arrayMaze[i][j] === ' ')
        //   result+'R';
        // if (arrayMaze[i][j]  === '*')
        //   result+'D';
        // if(arrayMaze[i][j] === 'e')
        //   return result;
      }
  }
  
};

// console.log(findWay(mySmallMaze));

const anagrams = function(string) {
  var results = [];

  if (string.length === 1) {
    results.push(string);
    return results;
  }

  for (var i = 0; i < string.length; i++) {
    var firstChar = string[i];
    var charsLeft = string.substring(0, i) + string.substring(i + 1);
    var innerPermutations = anagrams(charsLeft);
    for (var j = 0; j < innerPermutations.length; j++) {
      results.push(firstChar + innerPermutations[j]);
    }
  }
  return results;
}

console.log(anagrams('cat'));

//organization chart

