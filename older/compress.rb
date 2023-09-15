#given a string, return a compressed string counting the number of times each character appears.

given = "whoopteedoo"

def compress_string(str)
    counter = {}
    str.split("").each do |l|
        counter[l] ? counter[l] += 1 : counter[l] = 1
    end
    compressed = ''
    counter.each {|key, value| compressed += "#{value} #{key}#{value > 1 ? "'s" : ""}, "}
    puts compressed[0...-2]
end


# prev solution below (idk when that was done.)

# def compress_string(str)
#     arr = str.chars
#     hashy = {"o": 1}
#     final_string = ''
#     arr.each do |char|
#         if hashy[char.to_sym]
#             hashy[char.to_sym] += 1
#         else
#             hashy[char.to_sym] = 1
#         end
#     end
#     hashy.map{|k,v| final_string +="#{k}#{v}"}
#     puts final_string
# end

compress_string(given)