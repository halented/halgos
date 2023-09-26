=begin
Find the Next Greatest Number in an array

- You are given an array. For each element, print out that element and the next number in the array which is greater than it.

- If there is no element greater, print -1.

Example: 
```javascript
nextGreatest([4,3,5])
 
=>  {4:5, 3:5, 5:-1}
```
=end

def next_greatest_hash_n2(arr)
    # straight forward: iterate, for each element, iterate again. complexity n squared, so not ideal but we can put it down right quick. 
    solution = {}
    arr.each_with_index do |el, i|
        # make a slice of the array starting at the index following the index we are on
        greater = arr.slice(i, arr.length+1).find{|el2| el2 > el}
        solution[el] = greater ? greater : -1
    end
    puts solution
    return solution
end

def next_greatest_hash_2n(arr)
    # put the array in order and just give the next element. if the element doesnt exit, use -1
    arr.sort!
    solution = {}
    arr.each_with_index do |el, i|
        solution[el] = arr[i+1] ? arr[i+1] : -1
    end
    puts solution
    return solution
end

# the two above are flawed because there can be no duplicates AND, the question doesn't really imply sorting

def next_greatest_with_pointers(arr)
    trail = 0
    lead = 1
    while trail < arr.length do
        if trail == arr.length || lead == arr.length
            # if the trail OR the lead has reached the end, print a -1
            puts "#{arr[trail]} => -1"
            trail += 1
            lead = trail + 1
        elsif arr[trail] < arr[lead]
            # if the lead pointer is a higher number than the trail pointer, print that, increment trail by one, set lead to trail + 1
            puts "#{arr[trail]} => #{arr[lead]}"
            trail += 1
            lead = trail + 1
        elsif arr[trail] >= arr[lead]
            # if they are equal or less, increment the lead only
            lead += 1
        end 
    end
end

next_greatest_with_pointers([4,3,3,5,6,9,3,2,6,9,5,2,5,7])