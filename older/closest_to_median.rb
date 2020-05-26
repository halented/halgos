#given an array of ints, find the int that is closest to the average of all ints added together.

testArr = [1,6,89,32,4,76,3,22,358,95,34]
newTest=[10, 11, 12, 13, 14, 15,16,17,18,19,20]

def closest_to_median(arr)
    total = 0
    arr.each {|num| total += num}
    avg = (total/arr.length)
    arr = arr.sort
    arr.each_with_index do |num, index|
        if(num==avg)
            puts num
            return
        elsif(num>avg)
            comp2 = num - avg
            comp1 = avg - arr[index-1]
            if(comp1>comp2)
                puts num
                return
            elsif(comp2>comp1)
                puts arr[index-1]
                return
            end
        end
    end
end

closest_to_median(newTest)
closest_to_median(testArr)