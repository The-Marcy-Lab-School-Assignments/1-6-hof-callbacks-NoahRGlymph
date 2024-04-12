//1
function myForEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

// Test case
const myNames1 = ['Alice', 'Bob', 'Charlie', 'Debbie'];
myForEach(myNames1, (name) => console.log(`Hi, ${name}!`)); // Output: Hi, Alice! Hi, Bob! Hi, Charlie! Hi, Debbie!

//2
function myMap(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}

// Test case
const myNums = [1, 4, 9, 16];
const myDoubledNums = myMap(myNums, (x) => x * 2);
console.log(myDoubledNums); // Output: [2, 8, 18, 32]

//3
function myFind(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      return arr[i];
    }
  }
}

// Test cases
const myNames2 = ['Alice', 'Bob', 'Charlie', 'Debbie', 'Barry'];
const nameHasB = myFind(myNames2, (name) => name.includes('B'));
console.log(nameHasB); // Output: 'Bob' (not 'Barry' because 'Bob' is first)

const nameHasZ = myFind(myNames2, (name) => name.includes('Z'));
console.log(nameHasZ); // Output: undefined

//4
function myFilter(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

// Test cases
const myNames3 = ['Alice', 'Bob', 'Charlie', 'Debbie', 'Barry'];
const namesWithB = myFilter(myNames3, (name) => name.includes('B'));
console.log(namesWithB); // Output: ['Bob', 'Barry']

const namesWithZ = myFilter(myNames3, (name) => name.includes('Z'));
console.log(namesWithZ); // Output: []

//5
function sortWords(words) {
  const sortedWords = words.slice();
  sortedWords.sort((a, b) => a.localeCompare(b));
  return sortedWords;
}

// Test case
const unsortedNames = ['Charlie', 'Debbie', 'Alice', 'Bob'];
const sortedNames = sortWords(unsortedNames);
console.log(sortedNames); // Output: ['Alice', 'Bob', 'Charlie', 'Debbie']

//6
function sortNumbers(numbers) {
  const sortedNumbers = numbers.slice();
  sortedNumbers.sort((a, b) => a - b);
  return sortedNumbers;
}

// Test case
const unsortedNums = [1, 100, 14, 3, 2, 11];
const sortedNums = sortNumbers(unsortedNums);
console.log(sortedNums); // Output: [1, 2, 3, 11, 14, 100]

//7
function sortNumbersBetter(numbers, isDescending = false) {
  const sortedNumbers = numbers.slice();
  sortedNumbers.sort((a, b) => (isDescending ? b - a : a - b));
  return sortedNumbers;
}

// Test cases
const bigToSmall = sortNumbersBetter(unsortedNums, true);
console.log(bigToSmall); // Output: [100, 14, 11, 3, 2, 1]

const smallToBig = sortNumbersBetter(unsortedNums); // default behavior (ascending)
console.log(smallToBig); // Output: [1, 2, 3, 11, 14, 100]

//8
function sortUsersByOrder(users) {
  const sortedUsers = users.slice();
  sortedUsers.sort((a, b) => a.order - b.order);
  return sortedUsers;
}

// Test case
const users1 = [
  { name: 'Alice', order: 1 },
  { name: 'Bob', order: 3 },
  { name: 'Charlie', order: 2 },
  { name: 'Debbie', order: 4 },
];

//9
function sortUsersByName(users) {
  const sortedUsers = [...users]; // Create a copy of the array to avoid modifying the original array

  sortedUsers.sort((a, b) => {
    // Convert names to lowercase before comparison to ensure case-insensitive sorting
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if (nameA < nameB) {
      return -1; // nameA comes before nameB
    } else if (nameA > nameB) {
      return 1; // nameA comes after nameB
    } else {
      return 0; // names are equal
    }
  });

  return sortedUsers;
}

// Test case
const users = [
{ name: 'Alice', order: 1 },
{ name: 'Bob', order: 3 },
{ name: 'Charlie', order: 2 },
{ name: 'Debbie', order: 4 },
];

const sortedUsers = sortUsersByName(users);
console.log(sortedUsers);

module.exports = {
  myForEach,
  myMap,
  myFind,
  myFilter,

  sortWords,
  sortNumbers,
  sortNumbersBetter,
  sortUsersByOrder,
  sortUsersByName,
}
