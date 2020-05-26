# returns the nth fibonacci number. these are found by adding the last two numbers in the sequence together. eg
#   => 0,1,1,2,3,5,8,13

def fib(n)
    prev = 0
    current = 1
    ans = 0
    if n < 2
        puts n
    else
        (n-1).times do 
            ans = (current+prev)
            prev = current
            current = ans
        end
        puts ans
    end
end

fib(8)
fib(1)
fib(3)
fib(5)
fib(9)