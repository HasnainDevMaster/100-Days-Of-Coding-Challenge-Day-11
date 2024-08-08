// 100 Days Of Coding Challenge!

/** Question 32:
Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.

* Make a list of five or more usernames called 'current_users'.
* Make another list of five usernames called 'new_users'. Make sure one or two of the new usernames are also in the current_users list.
* Loop through the new_users list to see if each new username has already been used. If it has,
* print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
* Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.*/

//------------------------------------------------------------------------------------------------------------------------------------------------------------

// An array of current users
let current_users: string[] = ["Brian", "Julie", "Watson", "Maddie", "Elon"];

// An array of new users
let new_users: string[] = ["brian", "Hannah", "watson", "Gracie", "Stuart"];

// Check and validate availability of a username in new users (case-insensitive)
new_users.forEach((newUser) => {
  if (
    current_users.some(
      (currentUser) => currentUser.toLowerCase() === newUser.toLowerCase()
    )
  ) {
    console.log(`${newUser} will need to enter a new username.`); // Username already exists
  } else {
    console.log(`${newUser} is available.`); // Username is not taken
  }
});
