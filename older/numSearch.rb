

def numSearch(arr)	
	
	hashy = {}
	
	arr.each do |x|
		hashy[100-x] = x
	end
	
	arr.each do |y|
		if(hashy[y])
			puts "The pair is #{y} and #{hashy[y]}"
			return
		end
	end	

	puts "false"
end


numSearch([45,60,40,70,30])
numSearch([77,34,20,58,344546,23,10,2,3,4,4,4,4,4,44])
numSearch([1,2,3,4,98])
