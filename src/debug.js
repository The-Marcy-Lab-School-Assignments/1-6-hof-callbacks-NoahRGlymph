//10
function myEvery(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
      if (!callback(arr[i])) {
          return false; // If any element fails the test, return false
      }
  }
  return true; // If all elements pass the test, return true
}

// Test cases
const numbers = [1, 2, 3, 4, 5];

// Check if all numbers are even
const areAllEven = myEvery(numbers, (num) => num % 2 === 0);
console.log(areAllEven); // Output: false (not all numbers are even)

// Check if all numbers are greater than 0
const areAllPositive = myEvery(numbers, (num) => num > 0);
console.log(areAllPositive); // Output: true (all numbers are greater than 0)

//11
function sortUsersBy(users, sortingFunction) {
  // Create a copy of the array to avoid modifying the original array
  const sortedUsers = users.slice();

  // Sort the copied array using the provided sorting function
  sortedUsers.sort(sortingFunction);

  return sortedUsers;
}

//12
const logEachName = (names) => {
  names.forEach((name, index, array) => {
    console.log(name, index, array);
  });
};

const logEachUserBio = (users) => {
  users.forEach((user) => {
    console.log(user.bio);
  });
};


module.exports = {
  myEvery,
  sortUsersBy,
  logEachName,
  logEachUserBio,
};
