const repeatString = function(str,numRepeats) 
{
  let returnValue = "";

  if (numRepeats == 0) return "";
  if (numRepeats > 0)
  {
    for ( i=0; i < numRepeats; i++)
    {
      returnValue += str;
    }
    return returnValue;
  }
  else 
  {
    return "ERROR";
  }
};
module.exports = repeatString;