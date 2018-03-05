module.exports = function getZerosCount(number, base) {
  var number, base, i = 2
  var counter = 0
  for (i = 2; i <= base; i++) {
  if (base % i == 0) {
  var m = 0
  while (base % i == 0) {
  m = i;
  base /= i;
  }
  while (number > 0) {
    number = Math.floor(number/m);
    counter += number;
  }
  return counter;
}
}
}
