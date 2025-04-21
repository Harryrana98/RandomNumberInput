const form = document.querySelector("form");
const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const result = document.querySelector(".result");

// let arr = [];

// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   let fInp = Number(input1.value);
//   let lInp = Number(input2.value);
//   if (fInp < lInp) {
//     for (let i = fInp; i <= lInp; i++) {
//       arr.push(i);
//     }
//     RandomNumber();
//   } else {
//     alert("Please Enter the Grater Value");
//     input1.value = "";
//     input2.value = "";
//   }
// });

// function RandomNumber() {
//   const Random = Math.floor(Math.random() * arr.length);
// //   console.log("hello");

//   console.log(Random);

//   let RandomIndex = arr[Random];

//   result.innerHTML = RandomIndex;
// }

// console.log(arr.length);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let max = Number(input1.value);
  let min = Number(input2.value);
  if (max < min) {
    function getRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }
    let RandomIndex = getRandomNumber(min, max);
    result.innerHTML = RandomIndex;
  } else {
    alert("Please Enter The Max in 1st Value ");
  }
});
