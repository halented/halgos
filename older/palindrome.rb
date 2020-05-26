def is_palindrome?(str)
    if str.length%2 == 0
        helper(str)
    else
        str.slice!(str.length/2)
        helper(str)
    end
end

def helper(str)
    ans = false
    arr1 = str[0...(str.length/2)]
    arr2 = str[(str.length/2)...(str.length)]
    arr1 = arr1.split("")
    arr2 = arr2.split("")
    ct = arr2.length-1
    arr1.each do |letter|
        if arr2[ct] == letter
            ans = true
            ct -= 1
        else
            puts false
            return false
        end
    end
    puts ans
    return ans
end

# puts "p-8.'@@'.8-p =>"
# is_palindrome?("p-8.'@@'.8-p")
# puts "                "
# puts "look =>"
# is_palindrome?("look")
# puts "                "
# puts "hasdfioasoifjnasdf =>"
# is_palindrome?("hasdfioasoifjnasdf")
# puts "                "
start = Time.now
is_palindrome?("kooooooooooooooooooook")
final = Time.now
puts "Solution For Run Time 1 (Mine):"
puts (final-start)*1000
puts "         "

def palindrome?(string)
    i_left = 0
    i_right = string.length-1
    # run it for only half the string so the indices
    # never cross over and double-check things
    while i_left < i_right 
        if string[i_left] != string[i_right]
            return false 
        end 
        i_left += 1
        i_right -= 1
    end
    true
end

start = Time.now
palindrome?("kooooooooooooooooooook")
final = Time.now
puts "Solution For Run Time 2:"
puts (final-start)*1000
puts "         "

def palind(string)
    c = 0
    string.length.times do
        if string[c] != string[-(c+1)]
            return false
        end
        c += 1
    end
    true
end

start = Time.now
palind("kooooooooooooooooooook")
final = Time.now
puts "Solution For Run Time 3:"
puts (final-start)*1000
puts "         "

def pal(str)
    return str == str.reverse
end

start = Time.now
palind("kooooooooooooooooooook")
final = Time.now
puts "Solution For Run Time 4 (Reverse):"
puts (final-start)*1000
puts "         "