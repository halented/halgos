# returns the nth fibonacci number. these are found by adding the last two numbers in the sequence together. eg
#   => 0,1,1,2,3,5,8,13

def fib(n)
    # we need three numbers: additive 1, additive 2, and current fibos
    # hard coding the beginning, we have:
    if n == 0
        puts "invalid: no 0th fibonacci number"
        return
    end
    if n == 1
        puts 'final result: ', 0
        return 0
    elsif n == 2
        puts 'final result: ', 1
        return 1
    end
    fone = 0
    ftwo = 1
    fibonacci = 0
    i = 2
    while i < n do
        fibonacci = fone + ftwo
        fone = ftwo
        ftwo = fibonacci
        i += 1
    end 
 
    puts "final result: ", fibonacci
    return fibonacci
end


puts "SHOULD BE 0:"
fib(1)
puts "SHOULD BE 1:"
fib(2)
puts "SHOULD BE 1:"
fib(3)
puts "SHOULD BE 2:"
fib(4)
puts "SHOULD BE 3:"
fib(5)
puts "SHOULD BE 5:"
fib(6)
puts "SHOULD BE 8:"
fib(7)


# older
# def fib(n)
#     prev = 0
#     current = 1
#     ans = 0
#     if n < 2
#         puts n
#     else
#         (n-1).times do 
#             ans = (current+prev)
#             prev = current
#             current = ans
#         end
#         puts ans
#     end
# end
