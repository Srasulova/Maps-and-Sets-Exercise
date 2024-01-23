// new Set([1,1,2,2,3,4])
// returns Set {1, 2, 3, 4}

[...new Set("referee")].join("")
// retured "ref"

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
console.log(m)
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


const hasDuplicate = arr => new Set(arr).size !== arr.length


const vowelCount = (str) => {
    let vowels = "aeiou";
    
}


