const reverseString = function(str) 
{
  let splitString = str.split("");
  let reversedArray =splitString.reverse();
  let completeArray = reversedArray.join("");
  
  return completeArray;

};
module.exports = reverseString;
