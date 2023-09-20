#given a hash of students and their grades, apply the following rounding rules:
# Every student receives a  in the inclusive range from 0 to 100.
# Any  less than 40 is a failing grade.
# If the difference between the grade and the next multiple of 5 is less than 3, round  up to the next multiple of 5.
# If the value of the grade is less than 38, no rounding occurs as the result will still be a failing grade.
#Example:
#round_grades({"jolie": 58, "nim": 71})
#   => {"jolie": 60, "nim": 71}

grades = {"tiff": 22, "shell": 61, "britt": 94, "barbara": 89, "talia": 78, "brionna": 83, "nala": 82}

def round_grades(student_hash)
    new_h = student_hash.map do |key, value| 
        mod_val = value % 5
        if(value < 38 || mod_val < 3)
            [key, value]
        else
            value = value + (5 - mod_val)
            [key, value]
        end
    end.to_h

    puts new_h
end

round_grades(grades)
