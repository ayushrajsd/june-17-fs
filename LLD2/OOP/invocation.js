/**
 * 
 * 1. normal invocation - fn()
 * 2. method invocation - obj.fn()
 * 3. constructor function - new 
 * 4. call , bind, apply
 * 5. arrow

 */
function Person(name, marks) {
  this.name = name;
  this.marks = marks;
}

const person1 = new Person("Abc", 100);
/**
 * 1. person1 = {}
 * 2. prototype is set
 * 3. this
 * 4. return the new object
 */
