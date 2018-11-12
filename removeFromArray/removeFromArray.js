const removeFromArray = function(arguments) 
  {
    let array = [];
    for (i=0; i < 4; i++) array[i] = arguments[i];
    for (j=3; j<arguments.length; j++)
    {
      for (i=0; i<array.length; i++)
      {
        if (array[i] == arguments[j]) array.splice(i,1);
      }
    } 
  
  return array; 
  
};
let result = removeFromArray([1, 2, 3, 4], 3);
module.exports = removeFromArray;
