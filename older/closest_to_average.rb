#given an array of ints, find the int that is closest to the average of all ints added together.

arr = [1,2,3,4]
arr_one = [1,6,89,32,4,76,3,22,358,95]
arr_two=[10, 11, 12, 13, 14, 15,16,17,18,19,20]
arr_three = [1,2,3,4,5]

def find_closest_to_average(arr)
    arr = arr.sort
    index = 0

    if arr.length % 2 == 0
        # do stuff to find the average so we can compare the two possibilities 
        total = 0
        arr.each do |t|
            total += t
        end
        average = total/arr.length
        indexOne = (arr.length/2)
        # find out if the average is closer to the option 1 or 2 in the array
        differenceOne = (average - arr[indexOne]).abs
        differenceTwo = (average - arr[(indexOne + 1)]).abs
        differenceOne <= differenceTwo ? index = indexOne : index = (indexOne+ 1)
    else
        # in a sorted array it's just gonna be the index in the middle
     index = (arr.length/2) + 0.5
    end

    puts arr[index]
    return arr[index]
end

find_closest_to_average(arr)

# older
# def closest_to_median(arr)
#     total = 0
#     arr.each {|num| total += num}
#     avg = (total/arr.length)
#     arr = arr.sort
#     arr.each_with_index do |num, index|
#         if(num==avg)
#             puts num
#             return
#         elsif(num>avg)
#             comp2 = num - avg
#             comp1 = avg - arr[index-1]
#             if(comp1>comp2)
#                 puts num
#                 return
#             elsif(comp2>comp1)
#                 puts arr[index-1]
#                 return
#             end
#         end
#     end
# end

# closest_to_median(newTest)
# closest_to_median(testArr)