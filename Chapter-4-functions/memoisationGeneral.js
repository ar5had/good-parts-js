// page no - 45
var memoiser = function (memo, fundamental) {
  var shell = function (i) {
    var result = memo[i];
    if (typeof result !== 'number') {
      result = fundamental(shell, i);
      memo[i] = result;
    }
    return result;
  }
  return shell;
};

//using memoiser for fibonacci

var fibonacci = memoiser([0, 1], function (shell, i) {
  return shell(i - 1) + shell(i - 2);
});

console.log("Fibonacci sum upto 10 is",fibonacci(10));

//using memoiser for factorial

var factorial = memoiser([1, 1], function (shell, i) {
  return i * shell(i - 1);
});

console.log("Factorial of 5 is", factorial(5));
