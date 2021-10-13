# password Strength Checker
## calculate the strength of your password and time to crack your password.
*Take input as your password.
*shows the time it will take to crack password using brute force method.
*Chacracter and Digits plays important role in password strength level.
##### [Check password strength here](https://99b5p.csb.app/)
### How password strength is calculated?
Strength of your password depends on three Factor:-
* The no of character you have in your password.eg:- lowercase(a-z), uppercase(A-Z), number(0-9) and symbols(!@#$%^&*(_)+=).
* How many digits your password have.eg:- 4 digits(asdf), 5 digits(4sdjg) etc.
* how many passwords can be cracked in a second using Brute-force method.
[click here](https://asecuritysite.com/encryption/passes) for details.

### Explanation:-
* If your password has only lower case it means maximum 26 characters is posssible and the digits will be the power 26 and the result would be the maximum password combinations 
 lower case:- 26^digit= max password combination for lower case
 include uppercase:- 52^digit= max password combination for both lower and upper.
 include number:- 62^digit= max possible password combinations.
 include symbols:- 72^digits will be max password combination including lower case, uppercase, number and symbols.
 ![alt text](./readme_images/image1).




