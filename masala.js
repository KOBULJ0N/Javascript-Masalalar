/*Bosh ogrigi 1 */ 

// obj = (num1 = 0, num2 = 0) => {
//   if (num2) console.log(num1 + num2);
//   return function (num3 = 0) {
//     console.log(num1 + num3);
//   };
// };

// obj(1, 2);
// obj(1)(2);

/*   Boshni ogritgan 2 chi masala */
// const obj1 = {
//   a: 1,
//   b: 2,
//   c: 3,
//   getA() {
//     console.log(this.a);
//     return this;
//   },


//   getB() {
//       console.log(this.b);
//       return this
//     },
//     getC() {
//         console.log(this.c);
//         return this
//   }
// };

// obj1.getA().getB().getC();


// count = 0;
// res = 0;

// const sum = (arr, num) => {
//   for (i = 0; i < arr.length; i++) {
//     (count += arr[i]) / (i + 1) == num && res++;

//     qosh = 0;
//     f = 1

//     for (j = i + 1; j < arr.length; j++) {
//       (qosh += arr[j]) / f == num && res++;
//       f++;
//     }
//   }
//   return res;
// };
// console.log(sum([1, 3, 2, 2], 2));



var a = 'Webbrain Academy Is Number One';

str = a.split('') 
res = '';
for (i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase() && str[i] !== ' ' ) {
        res += str[i]
        
    }
}
console.log(res)




// function sum(limit) {
//     counter = 0;
    
//     for (i = 0; i <=limit; i++) {
//         if (i % 3 === 0 || i % 5 === 0) {
//             counter += i
//             }
//     } 
//     return counter
        
// }

// console.log(sum(10));
