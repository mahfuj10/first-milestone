// function object

function Student(name,age,cgpa,lang){
    this.name = name;
    this.age = age;
    this.cgpa = cgpa;
    this.lang = lang;
}

var student1 = new Student('Mahfuj', 16, 3.95, 'english,bangla');
var student2 = new Student('Rahim', 14, 2.95, 'english,bangla');
var student3 = new Student('Anis', 25, 4.25, 'english,bangla');

console.log(student2.name);


// object declare

var student = {
    name:'mahfuj',
    age: 15,
    roll:15,
}
console.log(student);



/* for (var i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  } */