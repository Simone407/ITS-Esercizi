'''
1. School Grading System:
Create a function that takes a student's name and their scores in different subjects as input.
The function calculates the average score and prints the student's name, average, and a message indicating whether 
the student passed the exam (average >= 60) or failed.
Create a for loop to iterate over a list of students and scores, calling the function for each student.

'''

def gradingsystem(name:str, scores:list[float]):

    average = sum(scores) / len(scores)
    
    if average >= 60:
        print(f"{name} passed with an average of {average:.2f}")
    else:
        print(f"{name} failed with an average of {average:.2f}")



students = [
    ("Alex", [85, 90, 78]),
    ("Mark", [55, 60, 65]),
    ("Simon", [70, 75, 80])
]


for student in students:
    name, scores = student
    gradingsystem(name, scores)
