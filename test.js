// // let getId = (function() {
// //   let id = 0;
// //   return function() {
// //     return id++;
// //   } 
// // })();


// // console.log(getId());

// // console.log(getId());

// // console.log(getId())
// var x = 1;
// function fn() {
//   const x = 2;
//   const a = {
//     x: 3,
//     fn1() {
//       console.log(this.x);
//     },
//     fn2: () => {
//       console.log(this.x);
//     }
//   }
//   const fn3 = a.fn1
//   a.fn1();
//   a.fn2();
//   fn3.x = 5;
//   fn3();
// }
// fn.call({x: 5});
// // setTimeout(() => {
// //   console.log(0);
// // }, 0)
// // new Promise((res, rej) => {
// //   console.log(1);
// //   for (let i = 0;i < 10000;i++) {
// //     if (i === 9999) {
// //       res();
// //     }
// //   }
// //   console.log(2)
// // }).then(res => console.log(4));
// // console.log(5)

// // const find = (start, end, arr) => {
// //   if (start >= end) {
// //     return
// //   }
// //   let i = quickSort(start, end, arr);
// //   find(start, i - 1, arr);
// //   find(i + 1, end, arr);
// // }


// // const quickSort = (start, end, arr) => {
// //   let flag = arr[start];
// //   let left = start;
// //   let right = end;

// //   while(left < right) {
// //     while(arr[right] >= flag && right > left) {
// //       right--;
// //     }
// //     arr[left] = arr[right];
// //     while(arr[left] <= flag && right > left) {
// //       left++;
// //     }
// //     arr[right] = arr[left];
// //   }
// //   arr[left] = flag;
// //   return left;
// // }

// // const arr = [1, 4, 2, 5, 7, 3]
// // find(0, arr.length-1, arr)
// // console.log(arr)
// var num = 3;
// function func() {
//   var num = 2;
//   // this.num = 8;
//   console.log(this.num)
// }
// const obj = {
//   num: 10,
//   func: func.bind(this),
// }
// obj.func();
// // func()

// let time = readline();
// let map = {
//     '000': '000',
//     '001': '111',
//     '010': '111',
//     '011': '000',
//     '100': '111',
//     '101': '000',
//     '110': '000',
//     '111': '111',
// }
// for (let i = 0;i < time;i++) {
//     let flag = true;
//     let arr = readline().split('');
//     if (arr.length === 1 || arr.length === 3) {
//         console.log('Yes');
//         continue;
//     }
//     if (arr.length === 2) {
//         if (arr[0] === arr[1]) {
//             console.log('Yes')
//         } else {
//           console.log('No');  
//         }
//         continue;
//     }
//     for (let j = 0;j < arr.length - 2;j++) {
//         if (arr[j] === arr[j + 1]) {
//             j = j + 1;
//             continue;
//         }
//         let son = arr.slice(j, j + 3);
//         let sonStr = son.join('') + '';
//         let change = map[sonStr].split('');
//         for (let k = 0;k < 3;k++) {
//             arr[j + k] = change[k];
//         }
//         j = j + 1;
//         let rest = arr.length - j - 1
//         if (rest < 2) {
//             console.log(rest, j)
//             break;
//         }
//         if (rest === 2) {
//             if (arr[j + 1] === arr[j + 2]) {
//                 break;
//             } else {
//                 flag = false;
//             }
//         }
//     }
//     if (flag) {
//         console.log('Yes')
//     } else {
//         console.log('No')
//     }
// }

// let length = readline();
// let arr = readline().split(' ');
// let res = 0;
// if (length < 3) {
//     for (let i = 0;i < length;i++) {
//         res = res + parseInt(arr[i]);
//     }
// } else {
//    for (let i = 0;i < length;i++) {
//        if (i < length - 2 && arr[i] >= 1 && arr[i + 1] >= 2 && arr[i + 2] >= 3) {
//           while (arr[i] >= 1 && arr[i + 1] >= 2 && arr[i + 2] >= 3) {
//                 res = res + 5;
//                 arr[i] = arr[i] - 1;
//                 arr[i + 1] = arr[i + 1] - 2;
//                 arr[i + 2] = arr[i + 2] - 3;
//             } 
//            res = res + parseInt(arr[i]);
//            arr[i] = 0;
//        } else {
//             res = res + parseInt(arr[i]);
//            arr[i] = 0;
//        }
//     }
// }
// console.log(res-1)

// const debounce = (func, wait) => {
//     let timeout;

//     return function () {
//         let context = this;
//         let args = [...arguments];

//         if (timeout) {
//             timeout = null;
//         }
//         timeout = setTimeout(() => {
//             func.apply(context, args);
//         }, wait);
//     }
// }

// const throttle = (func, wait) => {
//     let timeout;

//     return function () {
//         let context = this;
//         let args = [...arguments];

//         if (timeout) {
//             return;
//         }
//         timeout = setTimeout(() => {
//             func.apply(context, args);
//             timeout = null;
//         }, wait);
//     }
// }
let arr = ['fl', 'f'];

// let prefix = '';
// let first = arr[0];
// let rest = arr.slice(1);
// for (let i in first) {
//   const f = rest.every(item => item[i] === first[i]);
//   if (f) {
//     prefix += first[i];
//   } else break
// }
// console.log(prefix)
// let str = 'abcccbakkka'
// const dp = [];
// const len = str.length;
// for (let i = 0;i < len;i++) {
//     let temp = [];
//     for (let j = 0;j < len;j++) {
//         if (i === j) temp.push(1);
//         else temp.push(0);
//     }
//     dp.push(temp);
// }

// for (let i = len - 2;i >= 0;i--) {
//   for (let j = i + 1;j < len;j++) {
//     if (str[i] === str[j]) {
//       dp[i][j] = dp[i][j - 1];
//     } else {
//       let min;
//       for (let p = i;p < j;p++) {
//         min = p === i ? dp[i][p] + dp[p + 1][j] : Math.min(min, dp[i][p] + dp[p + 1][j]);
//       }
//       dp[i][j] = min
//     }
//   }
// }
// console.log(dp[0][len - 1]);
// function intToRoman( num ) {
//     // write code here
//     if (num === 4) {
//         return 'IV';
//     } else if (num === 9) {
//         return 'IX';
//     } else if (num === 40) {
//         return 'XL';
//     } else if (num === 90) {
//         return 'XC';
//     } else if (num === 400) {
//         return 'CD';
//     } else if (num === 900) {
//         return 'CM'
//     } else {
//         let res = num;
//         let result = [];
//         while(res > 0) {
//             if (res >= 1000) {
//                 result.push('M');
//                 res = res - 1000;
//             } else if (res >= 500) {
//                 result.push('D');
//                 res = res - 500;
//             } else if (res >= 100) {
//                 result.push('C');
//                 res = res - 100;
//             } else if (res >= 50) {
//                 result.push('L');
//                 res = res - 50;
//             } else if (res >= 10) {
//                 console.log(res)
//                 result.push('X');
//                 res = res - 10;
//             } else if (res >= 5) {
//                 result.push('V');
//                 res = res - 5;
//             } else if (res >= 1) {
//                 result.push('I');
//                 res = res - 1;
//             }
//         }
//         return result.join('');
//     }
// }
// console.log(intToRoman(204))

// let red = false;
// let green = false;
// let yellow = false;
// const green2yellow = () => {
//     return new Promise((resolve, reject) => {
//         green = true;
//         let timer = setTimeout(() => {
//             green = false;
//             yellow = true;
//             timer = null;
//             resolve(true);
//         }, 5000)
//     }).then((data) => {
//         if (data) {
            
//         }
//     })
// }

new Date().