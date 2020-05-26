#given a string, return a compressed string counting the number of times each character appears.

fake = "whoopteedoo"

def compress_string(str)
    arr = str.chars
    hashy = {"o": 1}
    final_string = ''
    arr.each do |char|
        if hashy[char.to_sym]
            hashy[char.to_sym] += 1
        else
            hashy[char.to_sym] = 1
        end
    end
    hashy.map{|k,v| final_string +="#{k}#{v}"}
    puts final_string
end

compress_string(fake)