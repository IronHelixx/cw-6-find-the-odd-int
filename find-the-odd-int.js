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
