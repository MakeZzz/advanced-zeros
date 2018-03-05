module.exports = function getZerosCount(number, base) {
var a = [];
var counter = 0;
var base2 = base;
var Zeros = Infinity;
  for (i = 2; i <= base2; i++) {
      if (base2 % i == 0) {
        var m = 0
        while (base2 % i == 0) {
          m++;
          base2 /= i;
        }
var result = 0;
var b = i;
  do {
    counter = Math.floor(number / b);
    b *= i;
    result += counter;
}
while (counter != 0) ;

var testValue = Math.floor (result / m);
  if (testValue < Zeros) {
    Zeros = testValue;
}
}
}
return Zeros;
}
