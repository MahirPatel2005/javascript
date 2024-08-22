//1
console.log("Hello, World!")

//2
function sum(a, b) {
    return a + b;
  }
  console.log(sum(5, 5))  

//3
function findLargest(a, b, c) {
    if (a >= b && a >= c) {
      return a;
    } else if (b >= a && b >= c) {
      return b;
    } else {
      return c;
    }
}

findLargest(3,9,5)
  //OR//
function findLargest(a, b, c) {
    console.log(Math.max(a, b, c)) ;
}
findLargest(3,9,5)

//4
A = 9
function even_or_odd(){
    if(A%2==0){
        console.log(A,"is an even number")
    }else{
        console.log(A,"it is an odd numner")
    }
    
}
even_or_odd()

//5
function factorial(n){
    fact =1;
    for(i=n;i>=1;i--){
        fact*=i
        
    }console.log("the factorial of",n,"is",fact)
}
factorial(5)

//6
str = "hello"
spl = str.split("");
rev = spl.reverse();
revstr = rev.join("");
console.log(revstr)


str = "racecar"
spl = str.split("");
rev = spl.reverse();
revstr = rev.join("");
console.log(revstr)
if(str==revstr){
    console.log("this is a palindrome")
}else{
    console.log("this is not a palindrome")
}

//7
function findMin(arr) {
    return Math.min(...arr);
  }
  
console.log("the minimum numer from the array is",findMin([3, 1, 4, 1, 5])); // Output: 1


A = [3, 1, 4, 1, 5]
Asort = A.sort()
console.log(Asort)


A = [3, 1, 4, 1, 5]
Asort = A.sort()
rev = Asort.reverse()
console.log(rev)


function containsSubstring(str, substr) {
    for (i = 0; i < str.length; i++) {
      for (j = 0; j < substr.length; j++) {
        if (str[i + j] !== substr[j]) break;
      }
      if (j === substr.length) return true;
    }
    return false;
  }
  
console.log(containsSubstring('hello world', 'world'));


array = [1, 2, 3, 4, 5]
function sum_Array(){
    sum=0;
    for(i of array){
        sum+=i;
    }console.log(sum)
}
sum_Array()


n = 5
function fibonacci(n) {
    let result = [];
    let a = 0;
    let b = 1;
    for (let i = 0; i < n; i++) {
      result.push(a);
      let temp = a;
      a = b;
      b = temp + b;
    }
    return result;
}
console.log(fibonacci(5)); 


function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) return false;
    }console.log(n,"is a prime number");
    
}
console.log(isPrime(8)); 


string = "hello world"
split = string.split("")
count=0;
for (i of split){
    
    if(i=="a"||i=="e"||i=="i"||i=="o"||i=="u"){
        count+=1;
        
    }
}console.log("the number of vowels in string is",count)


function findIndex(arr, target) {
    return arr.indexOf(target);
}
  
console.log("the index is",findIndex([1, 2, 3, 4, 5], 3));


function removeDuplicates(arr) {
    return [...new Set(arr)];
}
  
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));


function findIntersection(arr1, arr2) {
    const result = [];
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] === arr2[j]) {
          let duplicate = false;
          for (let k = 0; k < result.length; k++) {
            if (result[k] === arr1[i]) {
              duplicate = true;
              break;
            }
          }
          if (!duplicate) {
            result.push(arr1[i]);
          }
        }
      }
    }
    return result;
}
  
console.log(findIntersection([1, 2, 3], [2, 3, 4])); 


function areAnagrams(str1, str2) {
    if (str1.length !== str2.length) {
      return false;
    }
  
    const count1 = {};
    const count2 = {};
  
    for (let i = 0; i < str1.length; i++) {
      const char1 = str1.charCodeAt(i);
      const char2 = str2.charCodeAt(i);
    //The charCodeAt() method is a Javascript function that returns a Unicode value representing the character at the specified index in a string. Unicode is a standard encoding system that is used to represent character from almost all languages. Every character has a unique Unicode value.
      if (!count1[char1]) {
        count1[char1] = 1;
      } else {
        count1[char1]++;
      }
  
      if (!count2[char2]) {
        count2[char2] = 1;
      } else {
        count2[char2]++;
      }
    }
  
    for (const key in count1) {
      if (count1[key] !== count2[key]) {
        return false;
      }
    }
  
    return true;
  }
  
console.log(areAnagrams('cartk', 'track')); 


function capitalizeWords(str) {
    let result = '';
    let capitalizeNext = true;
  
    for (let i = 0; i < str.length; i++) {
      const charCode = str.charCodeAt(i);
  
      if (charCode === 32) { // space character
        result += ' ';
        capitalizeNext = true;
      } else {
        if (capitalizeNext) {
          result += String.fromCharCode(charCode - 32); // convert to uppercase
          capitalizeNext = false;
        } else {
          result += String.fromCharCode(charCode); // keep as lowercase
        }
      }
    }
  
    return result;
  }
  
console.log(capitalizeWords('hello world')); 


function flattenArray(arr) {
    while (arr.some(Array.isArray)) {
      arr = [].concat(...arr);
    }
    return arr;
}
console.log(flattenArray([1, [2, 3], [4, [5, 6]]]));


function isValidEmail(email) {
    var parts = email.split('@');
    if (parts.length !== 2) return false;
    var username = parts[0];
    var domain = parts[1];
    if (username.length < 1) return false;
    if (domain.indexOf('.') === -1) return false;
    return true;
}
  
console.log(isValidEmail('mahir.patel.cg@gmail.com')); 

celsius=1
function toFahrenheit() {
    return (celsius * 9/5) + 32;
}
  
console.log(toFahrenheit()); 


function removeElement(arr, element) {
    const index = arr.indexOf(element);
    if (index !== -1) {
      arr.splice(index, 1);
    }
    return arr;
}
console.log(removeElement([3, 1, 4, 1, 5],4))


function secondLargest(arr) {
    let max = -Infinity;
    let secondMax = -Infinity;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        secondMax = max;
        max = arr[i];
      } else if (arr[i] > secondMax && arr[i] !== max) {
        secondMax = arr[i];
      }
    }
  
    return secondMax;
}
console.log(secondLargest([1, 2, 3, 4, 5]));


function longestWord(str) {
    let words = [];
    let word = '';
    let maxLength = 0;
    let longestWord = '';
  
    for (let i = 0; i < str.length; i++) {
      if (str[i] === ' ') {
        if (word.length > maxLength) {
          maxLength = word.length;
          longestWord = word;
        }
        word = '';
      } else {
        word += str[i];
      }
    }
  
    if (word.length > maxLength) {
      maxLength = word.length;
      longestWord = word;
    }
  
    return longestWord;
}
console.log(longestWord('The quick brown fox jumped over the lazy dog')); 


function findMissingNumber(arr) {
    let n = arr.length + 1;
    let totalSum = (n * (n + 1)) / 2;
    let actualSum = arr.reduce((a, b) => a + b, 0);
    return totalSum - actualSum;
}

console.log(findMissingNumber([1, 2, 4, 5, 6]));


function gcd(a, b) {
    if (b === 0) {
        return a;
    } else {
        return gcd(b, a % b);
    }
}

console.log(gcd(12, 18)); 


function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

function gcd(a, b) {
    if (b === 0) {
        return a;
    } else {
        return gcd(b, a % b);
    }
}

console.log(lcm(4, 6));


function isBalanced(str) {
    let stack = [];
    let pairs = {')': '(', '}': '{', ']': '['};

    for (let char of str) {
        if (char in pairs) {
            if (stack.pop() !== pairs[char]) return false;
        } else {
            stack.push(char);
        }
    }

    return stack.length === 0;
}
console.log(isBalanced('()')); 


function countWords(str) {
    return str.split(' ').length;
}
console.log(countWords("This is a test string"));


function replaceSpaces(str) {
    return str.replace(/ /g, '-');
}
console.log(replaceSpaces("Mahir PATEL"))


function isNumeric(str) {
    return /^\d+$/.test(str);
}
console.log(isNumeric("12345")); 


function removeDuplicates(str) {
    return [...new Set(str)].join('');
}
console.log(removeDuplicates("PROGRAMING"))


function repeatString(str, n) {
    let result = '';
    for (let i = 0; i < n; i++) {
      result += str;
    }
    return result;
}
console.log(repeatString("mahir",3))


S = "This is a test"
console.log(typeof(S))
L = S.split()
console.log(typeof(L))
//the type of an array is object


function truncateString(str, length) {
    if (str.length <= length) {
      return str;
    } else {
      return str.substring(0, length) + "...";
    }
}
console.log(truncateString("this is only test",10))


console.log("this codes are written by Mahir patel")

function startsWith(str, substr) {
    return str.indexOf(substr) === 0;
}
console.log(startsWith("hello world", "hello"));


// function endsWith(str, substr) {
//     return str.indexOf(substr) === str[str.length-1];
// }
// console.log(startsWith("hello world", "world"));
//not functioning


function insertSubstring(str, substr, position) {
    let strArr = [...str];
    strArr.splice(position, 0, ...substr);
    return strArr.join('');
}
console.log(insertSubstring("Hello World", "Beautiful ", 6));


Ar = [1,2,3,4,5]
sum = 0;
for (i of Ar){
    sum+=i;
}console.log(sum)



// function findLargest(arr) {
//     console.log(Math.max(...arr));
// }
// console.log(findLargest([1, 5, 3, 9, 2]));


function findSmallest(a) {
    return Math.min(...a);
}
console.log(findSmallest([1, 5, 3, 9, 2])); 


list = [1, 5, 3, 9, 2]
lsort = list.sort()
console.log(lsort)


list = [1, 5, 3, 9, 2]
lsort = list.sort()
lsr = lsort.reverse()
console.log(lsr)


list = [1, 5, 3, 9, 2]
rev = list.reverse()
console.log(rev)


function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}
console.log(mergeArrays([1, 2, 3], [4, 5, 6])); 
//we can also use concat method.


test = [1,2,3,4,5]
tsort = test.sort()
if(test==tsort){
    console.log("it is sorted")
}else{
    console.log("it is not sorted")
}


function rotateArray(arr, k) {
    k = k % arr.length;
    for (let i = 0; i < k; i++) {
      arr.unshift(arr.pop());
    }
    return arr;
}
console.log(rotateArray([1,2,3,4,5],2))

obj = {name:"Mahir",age:18,city:"Bharuch"}
console.log(obj)
console.log(obj.name)
obj.course = "B.Tech"; 
console.log(obj)
delete obj.course
console.log(obj)


function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}
let obj1 = {name:"mahir",surname:"patel"}
let obj2 = {age:18,city:"Bharuch"}
console.log(mergeObjects(obj1, obj2))

// const obj = { name: 'mahir', age: 17, city: 'Bharuch                                        ' };
// function countProperties(obj) {
//     return Object.keys(obj).length;
// }
// console.log(countProperties(obj)); 


// function objectKeysToArray(obj) {
//     return Object.keys(obj);
// }
// const obj = { name: 'mahir', age: 17, city: 'Bharuch' };
// console.log(objectKeysToArray(obj));


const items = [
    { name: 'item1', price: 10 },
    { name: 'item2', price: 15 },
    { name: 'item3', price: 20 }
  ];
  
  a = items[0].price;
  b = items[1].price;
  c = items[2].price;
  
  console.log(a + b + c); 