// regular fn
function add(a, b) {
  return a + b;
}

// same thing - arrow
const add2 = (a, b) => {
  return a + b;
};

/**
 * Regular function decide this at call time
 * Arrow -> decide this at defintion time -> lexical this
 *
 * ARROW - do not have this of their own
 *        - lexical scope
 */

const obj = {
  value: "Scaler",
  regularFn: function () {
    console.log(this.value);
  },
  arrowFunc: () => {
    console.log("Arrow", this.value);
  },
};

// obj.regularFn();
// obj.arrowFunc();

const person = {
  fName: "ABC",
  greet: function () {
    console.log(this); // person
    setTimeout(function () {
      //   console.log(this);
      console.log("Hello", this.fName);
    }, 1000);
    setTimeout(() => {
      console.log("Hello", this.fName);
    }, 2000);
  },
};

person.greet();
cb(); // undefined
