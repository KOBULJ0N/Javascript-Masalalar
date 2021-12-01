// let Status = 'Azo'
// console.log(result = Status === 'Azo' ? 'chegirmangiz 20%' : 'chegirmangiz 5%');

// let hour =9;

// if (hour >= 6 && hour < 12) {
//     console.log('Hayrli Tong. ');
// } else if (hour >= 12 && hour < 18) {
//     console.log('Hayrli Kun. ');
// } else {
//     console.log('Hayrli Kech');
// }

// str = ''
// for (let i = 0; i < 7; i++) {
//     console.log(str += '*', );
// }

// count = ' '
// for (i = 0; i < 7; i++) {
//  console.log( count+=  '*'  )
// }

// count = ' ';
// for (j = 0; j < 5; j++) {

//     for (i = 0; i < 5; i++) {
//         console.log((count += ''));
//     }
//      console.log((count += '*'));
// }

/* // function fizzBuzz(input) {
//   if (typeof input !== 'number') return 'Bu son emass !';
//   else if (input % 3 === 0 && input % 5 === 0) return 'fizBuzz';
//   else if (input % 3 === 0) return 'fizz';
//   else if (input % 5 === 0) return 'Buzz';
//   else return input;
// }

// console.log(fizzBuzz(16));


*/
// Tezlik cheklovi 70km/soat
// 70+  5 km ==> 1 point
// 10 point ==> Guvohnoma olib qoyilsin

// const SPEED_LIMIT = 70; // km/soat
// const KM_PER_POINT = 5; // km/soat
// checkSpeed(90);

// function checkSpeed(speed) {
//     if (speed < SPEED_LIMIT +KM_PER_POINT) console.log('OK');
//     else {
//         let point = Math.floor((speed - SPEED_LIMIT) / KM_PER_POINT);
//         if (point >= 10) {
//             console.log('Guvohnoma Olib qoyildi');
//         } else
//             console.log(( 10 -`${point}`) + ' point dan keyin Guvohnoma olinadi. Jarimalar soni :', `${point} ta`, );
//     }
// }

// str = ' WEB Academy';
// str1 = ''
// // str1 = str.repeat(10);
// // var str2;
// for (i = 0; i < 10; i++) {
//   str1 += str.replace('WEB', 'IT');
//   // console.log(  str2 = str1.replace('WEB', 'IT'));
// }

// console.log(str1);



// const letterCapital = (string) => {
//     res = '';
//    for (i = 0; i < string.length; i++) {
//      if (string[i] === string[i].toUpperCase() && string[i] !== ' ') {
//        res += string[i];
//      }
//    } return res
// }
// console.log(letterCapital('Webbrain Academy Is Number One'));





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


 