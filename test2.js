// let str = 'w1felimf123';
// sum = str.split('');
// counter = 0;
// for (i = 0; i < sum.length; i++) {
//     if (Number(sum[i]) % 1 === 0) {
//         counter += +sum[i]
//     } continue
// }
// console.log(counter);

// const sum2 = (str) => {
//   let yigindi = 0;
//   str.split('').forEach((i) => {
//     if (Number(i)) yigindi += Number(i);
//   });console.log(yigindi);};
// sum2('12');





// const students = [
//     { name: 'Eshmat', surname: 'Eshmatov', status: 'student' },
//     { name: 'Toshmat', surname: 'Toshmatov', status: 'student' },
//     { name: 'Gulmat', surname: 'Gulmatov', status: 'student' },
//     { name: 'Holmat', surname: 'Holmatov', status: 'student' }
    
// ]


// const Search = (input) => {
//     const searched = [];
//     students.map((item) =>
//       item.surname.toLowerCase().includes(input.toLowerCase()) ||
//       item.name.toLowerCase().includes(input.toLowerCase()) ||
//       item.status.toLowerCase().includes(input.toLowerCase())
//         ? searched.push(item)
//         : []
//     );
//     console.log(searched);
// }

// Search('tosh')










// const students = [
//   { id:5, name: 'Eshmat', surname: 'Eshmatov', status: 'student' },
//   { id:1, name: 'Toshmat', surname: 'Toshmatov', status: 'student' },
//   { id:2, name: 'Gulmat', surname: 'Gulmatov', status: 'student' },
//   { id:3, name: 'Holmat', surname: 'Holmatov', status: 'student' },
// ];
// const search = input => {
//      var res = Object.entries(students).filter(([key,value])=>students[key]===input)
//     return res;
// }

// function pyramid() {
//   var n = 5;
//   var output = '';
//   for (var i = 0; i < n; i++) {
//     var myspace = '';
//     for (let s = 0; s < n - i - 1; s++) {
//       myspace += ' ';
//     }
//     for (var j = 1; j <= 2 * i + 1; j++) {
//       output += '*';
//     }
//     console.log(myspace + output);
//     output = '';
//   }
// }
// pyramid();

// a = ['*']
// for (let i = 0; i < 10; i++) {
//    a = a.push['*']
// }
// console.log(a.join());



// var a = '*';

// for (let i = 1; i <= 5; i++) {
//     // console.log(a);
//     a = a + '*'
// }
// console.log(a);



// var c = ''
// task = (a, b) => {
//      c = a.splice(a.length - b, b)
//     console.log(c.concat(a));
// }
// task([5, 6, 2, 3,],6);



task = (a, b) => {
    for (let i = 0; i < b; i++) {
        a.unshift(a[a.length - 1])
        a.pop()
    }
    console.log(a);
};

task([5, 6, 2, 3], 2);


