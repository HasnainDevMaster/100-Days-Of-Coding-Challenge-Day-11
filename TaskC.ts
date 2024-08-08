// 100 Days Of Coding Challenge!

/** Question 33:
Ordinal Numbers: Ordinal numbers indicate their position in a array,
such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.

* Store the numbers 1 through 9 in a array.
* Loop through the array.
* Use an if-else chain inside the loop to print the proper ordinal ending for each number.
* Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.*/

//---------------------------------------------------------------------------------------------------------------

// An array to store the numbers 1 through 9
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Loop through each number
for (const num of numbers) {
  let suffix = "th"; // Default suffix is "th"

  // Determine the appropriate suffix based on the number
  if (num === 1) {
    suffix = "st"; // Change to "st" for 1
  } else if (num === 2) {
    suffix = "nd"; // Change to "nd" for 2
  } else if (num === 3) {
    suffix = "rd"; // Change to "rd" for 3
  }

  // Print the number with its suffix
  console.log(`${num}${suffix}`);
}
// Output: 1st 2nd 3rd 4th 5th 6th 7th 8th 9th
