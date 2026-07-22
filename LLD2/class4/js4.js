// // /**
// //  * 1. asdasd
// //  * 2. asads
// //  *
// //  *
// //  */

// // // Q1. temperature converter

// // function convertTemp(temp, unit) {
// //   if (unit === "C") {
// //     const fahrenheit = (temp * 9) / 5 + 32;
// //     return `${temp}°C is ${fahrenheit}°F`;
// //   } else if (unit === "F") {
// //     const celcius = ((temp - 32) * 5) / 9;
// //     return `${temp}°F is ${celcius}°C`;
// //   } else {
// //     return `Invalid unit. use 'C' or 'F'`;
// //   }
// // }

// // console.log(convertTemp(100, "C"));

// // function reverseWords(sentence) {
// //   /**
// //    * 1. if input string is empty or not
// //    * 2. convert string to array
// //    * 3. loop over the array and
// //    *   3.1 for every word -> loop and reverse the order
// //    * 4. push the reversed word into array
// //    * 5. join the array to get the result string
// //    */
// //   const words = sentence.split(" ");
// //   console.log(words);
// //   const reversedWords = [];

// //   for (const word of words) {
// //     // let reversed = "";
// //     // for (let i = word.length - 1; i >= 0; i--) {
// //     //   reversed += word[i];
// //     // }
// //     // console.log(reversed);
// //     const temp = word.split("");
// //     const reversed = temp.reverse().join("");
// //     reversedWords.push(reversed);
// //   }
// //   return reversedWords.join(" ");
// //   console.log(reversedWords);
// // }

// // console.log(reverseWords("hello world"));

// /**
//  *
//  * @param {
//  * } students
//  * const students = [
//   { name: "Alice", score: 92 },
//   { name: "Bob", score: 65 },
//   { name: "Charlie", score: 45 },
//   { name: "Diana", score: 88 },
//   { name: "Eve", score: 30 },
//   { name: "Frank", score: 72 }
// ];
//  */

// // const students = [
// //   { name: "Alice", score: 92 },
// //   { name: "Bob", score: 65 },
// //   { name: "Charlie", score: 45 },
// //   { name: "Diana", score: 88 },
// //   { name: "Eve", score: 30 },
// //   { name: "Frank", score: 72 },
// // ];
// // function categorizeStudents(students) {
// //   const result = {
// //     toppers: [],
// //     cool: [],
// //     superCool: [],
// //   };

// //   for (const student of students) {
// //     if (student.score >= 80) {
// //       result.toppers.push(student.name);
// //     } else if (student.score >= 50) {
// //       result.cool.push(student.name);
// //     } else {
// //       result.superCool.push(student.name);
// //     }
// //   }
// //   return result;
// // }

// // console.log(categorizeStudents(students));

// // function createEncoder(shift) {
// //   const alphabets = "abcdefghijklmnopqrstuvwxyz";
// //   return function (message) {
// //     // some logic to use shift to update my message
// //     let encoded = "";
// //     for (let i = 0; i < message.length; i++) {
// //       const char = message[i];
// //       const index = alphabets.indexOf(char);
// //       console.log(char, ":", index);
// //       if (index !== -1) {
// //         // they are alphabets
// //         const newIndex = (index + shift) % 25;
// //         encoded += alphabets[newIndex];
// //       } else {
// //         // they are non aplhabets
// //         encoded += char;
// //       }
// //     }
// //     return encoded;
// //   };
// // }

// // const encode3 = createEncoder(3); // return a function
// // console.log(encode3("ahello@123")); // "khoor"

// function limitCalls(originalFn, maxCalls) {
//   let callCount = 0;
//   return function (name) {
//     // if call count > = maxCalls then call limit else invoke function(fn)
//     if (callCount >= maxCalls) {
//       return "Call limit reached";
//     }
//     callCount++;
//     return originalFn(name);
//   };
// }

// function sayHello(name) {
//   return `Hello, ${name}!`;
// }
// function greet() {
//   return `Hello, ${name}!`;
// }

// sayHello("asd");

// const limitedHello = limitCalls(sayHello, 3); // limitedHello -> inner fn
// console.log(limitedHello("abhishek"));
// console.log(limitedHello("Priyanka"));
// console.log(limitedHello("Shrey"));
// console.log(limitedHello("Ayush"));

const students = [
  { name: "Alice", score: 92 },
  { name: "Bob", score: 65 },
  { name: "Charlie", score: 45 },
  { name: "Diana", score: 88 },
  { name: "Eve", score: 30 },
  { name: "Frank", score: 72 },
];
function categorizeStudents(students) {
  const result = {
    toppers: [],
    cool: [],
    superCool: [],
  };
  students.map((item) => {
    if (item.score >= 80) {
      result.toppers.push(item.name);
    } else if (item.score >= 50 && item.score <= 79) {
      result.cool.push(item.name);
    } else if (item.score < 50) {
      result.superCool.push(item.name);
    }
  });
  return result;
}

console.log(categorizeStudents(students));
