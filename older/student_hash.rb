#given a hash of students and their grades, apply the following rounding rules:
# Every student receives a  in the inclusive range from 0 to 100.
# Any  less than 40 is a failing grade.
# If the difference between the grade and the next multiple of 5 is less than 3, round  up to the next multiple of 5.
# If the value of the grade is less than 38, no rounding occurs as the result will still be a failing grade.
#Example:
#round_grades({"jolie": 58, "nim": 71})
#   => {"jolie": 60, "nim": 71}

grades = {"tiff": 22, "shell": 61, "britt": 94, "barbara": 89, "talia": 78, "brionna": 83}