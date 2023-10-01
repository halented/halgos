def two_sum(arr, target)
    # save all possible matches to dictionary
    # as we go, check for the match. if we find it, break iteration & return indicies. if it's never found, return -1
    deltas = {}
    solution = -1
    arr.each_with_index do |el, index|
        this_delta = target - el
        if deltas[el] && index != deltas[el]
            solution = [index, deltas[el]]
            break
        elsif !deltas[this_delta]
            deltas[this_delta] = index
        end
    end
   
    solution
end

puts two_sum([2, 100, 11, 15], 9)
# => -1
# puts two_sum([2, 7, 11, 15], 9)
# => [0,1]
# puts two_sum([1,2,3,9,7], 5)
# => [1,2]