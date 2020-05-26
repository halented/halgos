#given a string, return true or false based on whether it has valid parens "(())" valid parens problem
def yolo(str)
    hash = {"("=> ")"}
        str.each do |t|
            if(hash[t])
    
        end
    end
    
    #trapping rain water. 2 dimensional stack of bricks represented as an array. with values 2,0,2 => 2. each index of the array reps a stack of bricks. with a variable number of brick heights, how much water would be held in between the stacks? 3,0,0,2,0,4=> ?
    #2,0,1,0,2 =>5        0,2,3,0,5 => 3 determine highest brick stack to the left of any index and the right of any index