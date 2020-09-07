# password-generator
Creating an application that generates a random password based on user-selected criteria from window prompts and confirms.

## script.js
After looking over the code given in this file, I created a function called 'generatePassword' where I have all of my code for getting password criteria from the user, creating the password, and returning a new and unique password.

The user's password criteria was gathered through the use of a prompt and confirms and they were all saved to their own variable.

The prompt was the password length which tells how long the user wants the random password to be. 
It checks a few conditions that require the password length to be:
* Greater than or equal to 8 characters
* Less than or equal to 128 characters
* A number
* And more specifically an integer

The other criteria, gathered from confirms, was to see whether or not the user wanted uppercase, lowercase letters, numbers, and special characters. I made it a requirement for the password to have at least one case type. They can either have uppercase letters or lowercase letters or both, but not neither.
Then the user could select numbers and special characters.

Once the criteria was all made out, I used four if statements to check whether or not the user confirmed to use the specific password characters. If they selected to use the certain character (true) the character variable I created would concatenate any existing charaters in the string with that set of characters.

I then converted the characters string into an array by using the split() string method.

Lastly, I created a for loop that iterates as many times as the number that is set for the passwordLength variable and randomly selects one character from the characters array by selecting an index number that is in the array. Each iteration adds to the user's password. Then it returns the concatenated password.