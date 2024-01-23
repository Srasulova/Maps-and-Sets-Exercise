// new Set([1,1,2,2,3,4])
// returns Set {1, 2, 3, 4}

[...new Set("referee")].join("");
// retured "ref"

let m = new Map();
m.set([1, 2, 3], true);
m.set([1, 2, 3], false);
console.log(m);
// it returns
// new Map([
//     [
//         [
//             1,
//             2,
//             3
//         ],
//         true
//     ],
//     [
//         [
//             1,
//             2,
//             3
//         ],
//         false
//     ]
// ])

const hasDuplicate = (arr) => new Set(arr).size !== arr.length;

// const vowelCount = (str) => {
//   const vowels = ["a", "e", "i", "o", "u"];
//   let vowelsAmount = 0;
//   for (let char of str) {
//     if (vowels.includes(char)) {
//       vowelsAmount++;
//     }
//   }
//   const vowelsObj = new Map();
// };

// console.log(vowelCount("sabina"));

function isVowel(char) {
  return "aeiuo".includes(char);
}

function vowelCount(str) {
  const vowelMap = new Map();
  for (let char of str) {
    let lowerCaseChar = char.toLowerCase();
    if (isVowel(lowerCaseChar)) {
      if (vowelMap.has(lowerCaseChar)) {
        vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
      } else {
        vowelMap.set(lowerCaseChar, 1);
      }
    }
  }
  return vowelMap;
}

console.log(vowelCount("sabina"));
