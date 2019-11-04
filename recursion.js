//countSheep(num)

const countSheep = function(num){
  //base case
  if(num === 0){
    return console.log('All sheep jumped over');
  }
  console.log(num+': Another sheep jumped over the fence');
  countSheep(num-1); 
};

countSheep(3);

//countSheep(num-1) return