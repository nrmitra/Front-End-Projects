/*
    1. Create a class called "Student"

    2. Allow us to pass in 3 properties/fields to the
       Student constructor which get set to the instance:
       - name (String)
       - major (String)
       - grades (Array of Numbers)

    3. Create a method on "Student" called "addGrade" that
       has one paramater "grade". It will simply push the
       "grade" given on to the "grades" Array.

    4. Create a method on "Student" called "gpa" that will
       return the AVERAGE grade of the student's "grades"

    5. Create an instance of the Student class like so:
       const eva = new Student("Eva", "Arts", [95, 75, 83])

    4. Print out the "eva" instance

    6. Use the "gpa" method on "eva" to print out their average
       grade (Should be 84.33)
*/

class Student{

    constructor (name, major, grades){
        this.name = name;
        this.major = major;
        this.grades = grades;
    }

    addGrade(grade){
        this.grades.push(grade);
    }

    grade(){
        return (this.grades.reduce((sum,item) => sum = sum + Number(item),0));
    }
}

const eva = new Student("Eva", "Arts", [95, 75, 83])
console.log(eva);
console.log(eva.grade()/eva.grades.length);

eva.addGrade(90);
console.log(eva);
console.log(eva.grade()/eva.grades.length);