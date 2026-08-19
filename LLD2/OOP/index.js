// const student = {
//   name: "Shubham",
//   introduce: function () {
//     console.log("Hi I am , ", student.name);
//   },
// };

// student.introduce();

// const teacher = {
//   name: "ABC",
//   introduce: student.introduce,
// };

// teacher.introduce();

/**
 * this - spl JS keyword, whose val is determined when a function is called
 * this-> object before the dot
 */

function introduce2() {
  console.log("Hi , I am ", this.name);
}

const student = {
  name: "Shubham",
  introduce: introduce2,
};

// student.introduce();

const teacher = {
  name: "ABC",
  introduce: introduce2,
};

// teacher.introduce();

console.log(student.introduce === teacher.introduce); //

const mother = {
  bag: "handbag",
  bring() {
    console.log(this.bag);
  },
};

const brother = {
  bag: "backpack",
  bring: mother.bring,
};

// brother.bring();//

// Constructor Function
function Person(name, marks) {
  this.name = name;
  this.marks = marks;
}

const a = new Person("Priyanka", 90);
const b = new Person("Devendra", 93);

console.log(a);

const counter = {
  count: 0,
  increment() {
    this.count++;
    return this;
  },
};

counter.increment().increment().decrement();
