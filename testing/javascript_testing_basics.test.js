/**
 * JAVASCRIPT TESTING - BASIC PRACTICE PROBLEMS
 * ============================================
 * 
 * Complete the test functions below. You'll be testing the functions in the 
 * corresponding implementation file.
 * 
 * Install Jest: npm install --save-dev jest
 * Run tests: npm test javascript_testing_basics.test.js
 * 
 * Start with problem 1 and work your way through.
 */

// ============================================
// FUNCTIONS TO TEST (These are already implemented)
// ============================================

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

function isEven(n) {
    return n % 2 === 0;
}

function reverseString(s) {
    return s.split('').reverse().join('');
}

function getMax(numbers) {
    if (numbers.length === 0) {
        throw new Error("Array cannot be empty");
    }
    return Math.max(...numbers);
}

// ============================================
// TEST PROBLEMS - Write tests for each function above
// ============================================

// PROBLEM 1: Test the add function
// Write a test that verifies add(2, 3) returns 5
test('add function adds two numbers', () => {
    // TODO: Write a test using expect
    // Example: expect(add(2, 3)).toBe(5);
});


// PROBLEM 2: Test add with negative numbers
// Write a test that verifies add(-5, 3) returns -2
test('add function handles negative numbers', () => {
    // TODO: Write a test for negative numbers
});


// PROBLEM 3: Test the multiply function
// Write a test that verifies multiply(4, 5) returns 20
test('multiply function multiplies two numbers', () => {
    // TODO: Write a test for multiply
});


// PROBLEM 4: Test multiply with zero
// Write a test that verifies multiply(10, 0) returns 0
test('multiply function handles zero', () => {
    // TODO: Write a test for multiplying by zero
});


// PROBLEM 5: Test the divide function
// Write a test that verifies divide(10, 2) returns 5
test('divide function divides two numbers', () => {
    // TODO: Write a test for divide
});


// PROBLEM 6: Test divide by zero
// Write a test that verifies divide throws an error when dividing by zero
test('divide function throws error when dividing by zero', () => {
    // TODO: Write a test using expect(() => ...).toThrow()
    // Example: expect(() => divide(10, 0)).toThrow("Cannot divide by zero");
});


// PROBLEM 7: Test isEven function
// Write tests for both even and odd numbers
test('isEven returns true for even numbers', () => {
    // TODO: Write a test for an even number (should return true)
});


test('isEven returns false for odd numbers', () => {
    // TODO: Write a test for an odd number (should return false)
});


// PROBLEM 8: Test reverseString function
// Write a test that verifies reverseString("hello") returns "olleh"
test('reverseString reverses a string', () => {
    // TODO: Write a test for reverseString
});


// PROBLEM 9: Test getMax function
// Write a test that verifies getMax([1, 5, 3, 9, 2]) returns 9
test('getMax returns the maximum value', () => {
    // TODO: Write a test for getMax
});


// PROBLEM 10: Test getMax with empty array
// Write a test that verifies getMax throws an error with empty array
test('getMax throws error with empty array', () => {
    // TODO: Write a test using expect(() => ...).toThrow()
});


// PROBLEM 11: Write multiple test cases using test.each
// Use test.each to test add with multiple inputs
test.each([
    [2, 3, 5],
    [0, 0, 0],
    [-1, 1, 0],
    [10, 20, 30],
])('add(%d, %d) returns %d', (a, b, expected) => {
    // TODO: Write the assertion
    // Example: expect(add(a, b)).toBe(expected);
});


// PROBLEM 12: Write a describe block
// Group related tests together using describe
describe('Math operations', () => {
    // TODO: Move some of the math-related tests (add, multiply, divide) into this describe block
});


// PROBLEM 13: Write tests with beforeEach
// Use beforeEach to set up test data
let testNumbers;

beforeEach(() => {
    // TODO: Initialize testNumbers as [1, 2, 3, 4, 5]
});

test('getMax works with beforeEach data', () => {
    // TODO: Write a test that uses testNumbers
});

