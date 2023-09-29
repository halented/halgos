# follow up question about the constraints: is it true that they will only intersect in one location? 

def find_intersection(arr1, arr2)
    intersection = []

    # set up a hash of one of the arrays. keys => array elements, values => array of indicies 
    dictionary_of_elements = {}
    arr1.each_with_index do |el, index|
        if dictionary_of_elements[el]
            dictionary_of_elements[el].push(index)
        else
            dictionary_of_elements[el] = [index]
        end
    end

    arr2.each_with_index do |arr2_el, arr2_index|
        if dictionary_of_elements[arr2_el]
            # check if the element following the location of the element in the og array matches the next element for our current array.
            dictionary_of_elements[arr2_el].each do |arr1_index|
                if arr1[arr1_index+1] == arr2[arr2_index+1]
                    # we have found an intersection
                    intersection.push(arr2_el)
                    while (arr1[arr1_index+1] == arr2[arr2_index+1]) && (arr2_index < arr2.length && arr1_index < arr1.length)
                        # while the elements match and we haven't reached the end of either array
                        intersection.push(arr1[arr1_index+1])
                        arr1_index += 1
                        arr2_index += 1
                    end
                    break
                end
            end
        end
    end
    puts intersection
    intersection
end

find_intersection([1,2,3,4,5,6,7,8,9,0],[0,1,2,3,4,5,6,7,8,9,0])