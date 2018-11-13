const removeFromArray = function(...args) 
  {
    let array = args[0];
    
    for (j=1; j<args.length; j++)
    {
      for (i=0; i<array.length; i++)
      {
        if (array[i] == args[j]) array.splice(i,1);
      }
    } 
  
  return array; 
  
};
let result = removeFromArray([1, 2, 3, 4], 3);
module.exports = removeFromArray;
