<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the correct answer from the following options and give an explanation (2-5 lines).

javascript
let greeting;
greetign = {};
console.log(greetign);


- A: {}
- B: ReferenceError: greetign is not defined
- C: undefined

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i>In the initial line of code, a variable called "greeting" was declared without being assigned a value.
Subsequently, in the second line, there was a typographical error where "greetign" was used instead of "greeting" when attempting to assign an empty object to the variable.
Consequently, if an attempt is made to log "greetign" (which is not a defined variable), it will result in a ReferenceError due to the improper declaration of the variable.</i>






</p>
</details>

###### 2. Write the correct answer from the following options and give an explanation (2-5 lines).

javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");


- A: NaN
- B: TypeError
- C: "12"
- D: 3

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>The "sum" function accepts two parameters, "a" and "b," and adds them together using the "+" operator.
If you invoke the "sum(1, "2")" function in JavaScript, it performs a process called type coercion, where it converts the number 1 into a string to facilitate the operation. Consequently, it combines the strings "1" and "2," resulting in the string "12.".</i>

</p>
</details>

###### 3. Write the correct answer from the following options and give an explanation (2-5 lines).

javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);


- A: ['🍕', '🍫', '🥑', '🍔']
- B: ['🍝', '🍫', '🥑', '🍔']
- C: ['🍝', '🍕', '🍫', '🥑', '🍔']
- D: ReferenceError

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>The food array is defined with initial values "🍕", "🍫", "🥑", "🍔".
The info object is created with a property favoriteFood set to the first element of the food array, which is "🍕".
Later,  change the value of info.favoriteFood to "🍝", but this does not modify the original food array.
Therefore, when  log the food array, it remains unchanged, and the output is ['🍕', '🍫', '🥑', '🍔']</i>

</p>
</details>

###### 4. Write the correct answer from the following options and give an explanation (2-5 lines).

javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());


- A: Hi there,
- B: Hi there, undefined
- C: Hi there, null
- D: ReferenceError

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i>The sayHi function expects a parameter name but when called with sayHi(), no argument is provided.
In JavaScript, when a function is called with missing arguments, the missing parameters are assigned the value undefined. Therefore, the result is "Hi there, undefined" because name is not passed a value in the function call.</i>

</p>
</details>

###### 5. Write the correct answer from the following options and give an explanation (2-5 lines).

javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);


- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>In the given JavaScript code, there's an array called nums containing [0, 1, 2, 3], and a variable count is initialized to 0. The code uses a forEach loop to iterate through the array elements. Inside the loop, a condition checks if the current element is truthy (not equal to 0), and if it is, it increments the count variable by 1. Since the loop encounters the values 1, 2, and 3, all of which are truthy, count gets incremented three times. As a result, when you log count to the console, it displays 3, indicating that there are three truthy values in the nums array.</i>

</p>
</details>