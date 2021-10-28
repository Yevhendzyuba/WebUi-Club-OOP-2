class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    showFullName() {
        console.log(this.surname, this.name);
    }
}

class Student extends Person {
    constructor(name, surname, year) {
        super(name, surname)
        this.year = year;
    }
    showFullName(middleName) {
        console.log(this.surname, this.name, middleName);
    }
    showCourse() {
        return 2021 - this.year;
    }
}

const stud1 = new Student("Yevhen", "Dzyuba", 2017);
console.log(stud1.showFullName("Olehovych"));
console.log("Current course: " + stud1.showCourse());