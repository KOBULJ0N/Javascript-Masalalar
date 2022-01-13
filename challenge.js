// /************CODING CHALLENGE 1**************** */

// let massMark = 80; //kg
// let heightMark = 1.7; // metres
// let massJohn = 60; //kg
// let heighJohn = 1.55; //metres

// let bmiMark = massMark / (heightMark ** 2);
// let bmiJohn = massJohn / (heighJohn ** 2);
// var higher = bmiJohn > bmiMark;
// console.log(`Is John's BMI higher than John's BMI ? ` + " " + higher);

/* **************CODING CHALLENGE 2*********************/

// var teamMark = (89 + 120 + 103) / 3;
// var teamJohn = (116 + 94 + 123) / 3;
// var teamMary = (97 + 134 + 105) / 3

// if (teamMark > teamJohn && teamMark > teamMary) {
//     console.log(` Mark's team Wins with ` + teamMark + ` points`);
// } else if (
//     teamJohn > teamMark && teamJohn > teamMary
// )  console.log( ` John's team Wins with ` + teamJohn + ` points`);
// else if (teamMary > teamJohn && teamMary > teamMark) {
//     console.log( ` Mary's team Wins with ` + teamMary + ` points`);
// } else {
//     console.log( 'There is a Draw !!!')
// }

/* **************CODING CHALLENGE 3*******************/

// var tipcalculate = (bills) => {
//   var percentage;
//   if (bills < 50) {
//     percentage = 0.2;
//   } else if ((bills) >= 50 && bills < 200) {
//     percentage = 0.15;
//   } else {
//     percentage = 0.1;
//   }
//   return percentage * bills;
// };

// var bill = [124, 48, 268];
// var tips = [
//   tipcalculate(bill[0]),
//   tipcalculate(bill[1]),
//   tipcalculate(bill[2]),
// ];
// var finalValue = [bill[0] + tips[0], bill[1] + tips[1], bill[2] + tips[2]];
// console.log(finalValue);

/* ******** coding challenge 4 ***********/

// var Mark = {
//   fullName: 'Mark Zukerberk',
//   mass: 80, //kg
//   height: 1.7, //metres
//   BMI: function () {
//     return this.mass / this.height ** 2;
//   },
// };

// var John = {
//   fullName: 'John Jones',
//   mass: 60, //kg
//   height: 1.6, // metres
//   BMI: function () {
//     return this.mass / this.height ** 2;
//   },
// };
// if (John.BMI() > Mark.BMI()) {
//     console.log(John.fullName + ' has higher BMI with = ' + John.BMI());
// } else if (John.BMI() < Mark.BMI()) {
//   console.log(Mark.fullName +  ' has higher BMI with = ' + Mark.BMI());
// } else {
//     console.log( 'Their BMI is the same' )
// }

// lastName = [3, 5, 7];
// lastName = [3];
// function lastName() {
//     console.log(lastName.length)

// }

/* ******** coding challenge 5 ***********/
// var john = {
//     bills: [124, 48, 268, 180, 42],
//     calcTips: function () {
//         this.tips = [];
//         this.finalValue = [];

//         for (i = 0; i < this.bills.length; i++) {
//             var percentage;
//             var bill = this.bills[i]
//             if (bill < 50) {
//                 percentage = .2;
//             } else if (bill >= 50 && bill < 200) {
//                 percentage = .15;
//             } else {
//                 percentage = .1
//             }
//             this.tips[i] = percentage * bill;
//             this.finalValue[i] = bill + percentage * bill;

//         }
//     }
// }
// john.calcTips();
// console.log(john)
