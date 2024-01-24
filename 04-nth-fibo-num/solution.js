function fib(n) {
  if (n === 0 || n === 1) { return n }
  if (n === 2) { return 1 }
  fibHelper(n, 1)
}

function fibHelper(n, first, next = 1, counter = 1) {
  if (counter === n) {
    return first + next
  }
  let newb = first + next
  counter += 1
  fibHelper(n, next, newb, counter)

}

/* fib(0)  # => 0
fib(1)  # => 1
fib(2)  # => 1
fib(3)  # => 2
fib(4)  # => 3
*/