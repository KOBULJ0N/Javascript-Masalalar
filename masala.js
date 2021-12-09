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

// var title = 'Webbrain Academy Is Number One';

// const res = title.split('').filter((value) => value !== (' ') &&  value === value.toUpperCase());

// console.log(res.join(''));

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

// daraja4 = (a) => {
//     return 4* ( a * a )
// }

// console.log(daraja4(3));

// showPrimeNumber = (number) => {
//   for (let i = 2; i <= number; i++) {
//     let isPrime = true;

//     for (j = 2; j < i; j++) {
//       if (i % j === 0) {
//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime) console.log(i);
//   }
// };
// showPrimeNumber(20);

// a = 'apple';
// b = 'WebBrain';
// c = 'G1';

// d = (a + ' ' + b + ' ' + c).split(' ')
//  console.log((d.sort((x,y) => y.length - x.length)).join(' '));

