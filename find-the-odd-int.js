function isOdd(x) {
  return x % 2;
}
function countInArray(array, value) {
  return array.filter(item => item == value).length;
}
function findOdd(A) {
  for (i in A) {
    if (isOdd(countInArray(A, A[i])) == 1) {
      return A[i];
    }
  }
}

/* **
Simplified Solutions:

function findOdd(A) {
  return A.reduce(function(c,v){return c^v;},0);
}

function findOdd(arr) {
  return arr.find((item, index) => arr.filter(el => el == item).length % 2)
}

const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

** */
