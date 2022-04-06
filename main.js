
// 1 masala togri
// let arr = [10,1,3,5,8,9]
// for (let i = 0; i < arr.length; i++) {
// for (let j = 0; j < arr.length; j++) {
//   if (arr[j] > arr[j + 1]) {
//     let a = arr[j + 1]
//     arr[j + 1] = arr[j] 
//     arr[j]= a
//   }
// }
// }
// console.log(arr)



// 2 masala
// let elArr = [
//   {
//     login : " forever    ",
//     pass : "forever123"
//   }
// ];
// elArr.forEach((item) => {
//   if(item.login.trim().length < 3 && item.pass.trim().length < 8){
//     console.log("login 3ta belgidam iborat bolish kerak kamida");
//     console.log("parol 8ta belgidan iborat bolish kere");
//   }
//   else if(item.login.trim().length < 3){
//     console.log("login kamida 3ta belgidan iborat bolish kere");
//   } else if(item.pass.trim().length < 8){
//     console.log("parol kamida 8ta belgidan iborat bolish kerak");
//   } else{
//     console.log("Siz muvaffaqqiyatli ro'yxatdan o'tdingiz");
//   }
// })



// 3 masal problem 4 
// let n = 10
// let k = 2
// let Sum = 0

// for(let i = 1; i <= n; i++){
//   if(i > 1){
//     let elsumma = 1;
//     for(let j = 0; j < k; j++){
//       elsumma *= i;
//     }
//     Sum += elsumma;
//   } else if(i == 1){
//     Sum += i;
//   }
// }
// console.log(Sum);


// 4 masala problem 6
// let newarr = [7,5,3,2];
// let b = Math.floor(newarr.length / 2);
// let k = b;
// for(let i = 0; i < b; i++){
//   let c = newarr[i];
//   newarr[i] = newarr[k];
//   newarr[k] = c;
//   k++;
// }
// console.log(newarr);


// 5 masala problem5
// let arr = [1,[2,3],undefined,{x: 1}];
// let arr2 = [];
// for(let i = 0; i < arr.length; i++){
//   if(Number.isInteger(arr[i])){
//     arr2.push(arr[i]);
//   } else if (Array.isArray(arr[i])){
//     arr[i].forEach((item) => {
//       arr2.push(item);
//     })
//   } else if(typeof arr[i] === "object"){
//     arr2.push(Object.keys(arr[i])[0]);
//     arr2.push(Object.values(arr[i])[0]);
//   } else{
//     arr2.push(arr[i]);
//   }
// }
// console.log(arr2);





// // DOM
let input = document.querySelector("#input")
let spetial = document.querySelector("#Spetial")
let btnxspetial = document.querySelector("#btnxspetial")
let eye = document.querySelector("#eye")
let list = document.querySelector("#list")
let elNumber = document.querySelector("#Number")
let btnnum = document.querySelector("#btnnum")
let form = document.querySelector("#form")

let numm = 1
eye.addEventListener("click" ,(e) => {
  e.preventDefault()
  if (numm % 2 ==0 ) {
    form.classList.add("blue")
    input.classList.add("dark")
  }
  else if (numm % 2 != 0 ) {
    form.classList.remove("blue")
    input.classList.remove("dark")
  }
  numm++
})



input.addEventListener("keyup" ,(e) => {
  e.preventDefault()
  list.classList.add("db")

  let a = input.value.includes("@")
  let elq = input.value.includes(1)
  let elw = input.value.includes(2)
  let ele = input.value.includes(3)
  let elr = input.value.includes(4)
  let elt = input.value.includes(5)
  let ely = input.value.includes(6)
  let elu = input.value.includes(7)
  let eli = input.value.includes(8)
  let elo = input.value.includes(9)
  let elp = input.value.includes(0)

  // console.log(elq);

  if (a == true) {
    spetial.classList.add("ff")
    btnxspetial.classList.add("ff")
  }
  else if (a != true) {
    spetial.classList.remove("ff")
    btnxspetial.classList.remove("ff")
  }
// 111111111111111
  if (elq == true) {
    console.log("bir");
    elNumber.classList.add("ff")
    btnnum.classList.add("ff")
  }
  else if (elq != true) {
    console.log("bir");
  }
// llllllllllll
  if (elw == true) {
    console.log("ikki");
    elNumber.classList.add("ff")
    btnnum.classList.add("ff")
  }
// pppppppppppppp

  if (ele == true) {
    console.log("uch");
    elNumber.classList.add("ff")
    btnnum.classList.add("ff")
  }
  if (elr == true) {
    console.log("tort");
    elNumber.classList.add("ff")
    btnnum.classList.add("ff")
  }
  if (elt == true) {
    console.log("besh");
    elNumber.classList.add("ff")
    btnnum.classList.add("ff")
  }
  if (ely == true) {
    console.log("olti");
    elNumber.classList.add("ff")
    btnnum.classList.add("ff")
  }
  if (elu == true) {
    console.log("yetti");
    elNumber.classList.add("ff")
    btnnum.classList.add("ff")
  }
  if (eli == true) {
    console.log("sakkiz");
    elNumber.classList.add("ff")
    btnnum.classList.add("ff")
  }
  if (elo == true) {
    console.log("toqqiz");
    elNumber.classList.add("ff")
    btnnum.classList.add("ff")
  }
  if (elp == true) {
    console.log("nol");
    elNumber.classList.add("ff")
    btnnum.classList.add("ff")
  }

    // console.log(spetial.textContent);
    // console.log(input.value.lenght);
})































































































