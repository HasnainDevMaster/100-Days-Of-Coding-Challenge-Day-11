// 100 Days Of Coding Challenge!

/** Question 31:
No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

* If the list is empty, print the message We need to find some users!
* Remove all of the usernames from your array, and make sure the correct message is printed.*/

//---------------------------------------------------------------------------------------------

// An array of usernames, initially empty:
let usernames: string[] = []; // Empty array

// Check if the array is empty
if (usernames.length === 0) {
  console.log("We need to find some users!"); // Print the message if no users are found
} else {
  // Loop through the usernames (which is empty in this case)
  for (const username of usernames) {
    if (username === "admin") {
      console.log("Hello admin, would you like to see a status report?");
    } else {
      console.log(`Hello ${username}, thank you for logging in again.`);
    }
  }
}
// Since there are no usernames, the initial message is printed.
// Removing all usernames ensures the message "We need to find some users!" is printed.
