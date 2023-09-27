def lampposts(int, arr)
    street = {} # something to keep track of what positions are lit and what points aren't
    int.times do |i|
        street[i+1] = nil
    end

    arr = arr.sort{|a, b| b[1] - a[1]} # sorts all lampposts by radius size (largest first)

    arr.each_with_index do |lamppost, index|
        # check what positions are covered by each lamppost
        position = lamppost[0]
        radius = lamppost[1]

        beginning = position - radius < 1 ? 1 : position - radius # no negatives / 0
        ending = (position + radius) > int ? int : (position + radius) # if it's greater than the length of the street, stop at the end
        (beginning..ending).to_a.each do |covered_position| 
            if !street[covered_position]
                street[covered_position] = index
            end
        end
    end

    # determine how many unique lampposts were used
    used_posts = {}
    street.each do |key, value|
        if !value
            used_posts = {}
            break
        else
            used_posts[value] = true
        end
    end
    puts used_posts.length > 0 ? used_posts.length : -1
    return used_posts.length > 0 ? used_posts.length : -1
end

lampposts(5, [[1,2], [2,1], [3,1], [4,2], [5,2]]) # => 2
# (10, [[1,2], [2,1], [3,1], [4,2], [5,2]]) => -1
