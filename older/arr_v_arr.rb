#given an array of items and an array of less important items, return the first item from the less important list that matches *any* item from the important list

necessaries = ["toothbrush", "cell phone charger", "the new adventures of winnie the pooh season 2 box set"]
 
all_items = ["shoes", "lemons", "the president", "the new adventures of winnie the pooh season 2 box set"]

#ex input: match_items(necessaries, all_items)
#   => "the new adventures of winnie the pooh season 2"

def match_items(imp_arr, arr)
    arr.each do |item|
        if(imp_arr.include? item)
            puts item
            return
        end
    end
end

match_items(necessaries, all_items)