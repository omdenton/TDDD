const sumAll = function(val1,val2) {
  
 let top; let bottom; let sum = 0;
 if (isNaN(val1) || isNaN(val2)) return "ERROR";
 if (val1 < 0  || val2 < 0 ) return "ERROR";
 if (val1 < val2)  { bottom = val1; top = val2; }
 else { top = val1; bottom = val2; }


 for (i = bottom; i <= top; i++)
 {
    sum = sum + i;
 }

 return sum;
};
result = sumAll(10,"90");
module.exports = sumAll;
