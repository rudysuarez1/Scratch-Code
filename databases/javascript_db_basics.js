/**
 * JAVASCRIPT DATABASE PROGRAMMING - BASIC PRACTICE PROBLEMS
 * ==========================================================
 * 
 * Complete each function below. You can use Node.js with sqlite3 or another database.
 * 
 * Install dependencies:
 *     npm install sqlite3
 *     # OR for PostgreSQL: npm install pg
 * 
 * Start with problem 1 and work your way through.
 */

const sqlite3 = require('sqlite3').verbose();
// For PostgreSQL, you would use: const { Client } = require('pg');

// Database connection
let db;

// PROBLEM 1: Create Database and Table
// Create a function that sets up the database with a users table
function setupDatabase() {
    /**
     * TODO: Implement this function
     * Create a connection to the database and create a table called 'users' with columns:
     * - id (INTEGER PRIMARY KEY)
     * - name (TEXT NOT NULL)
     * - email (TEXT UNIQUE NOT NULL)
     * - age (INTEGER)
     * - created_at (TIMESTAMP DEFAULT CURRENT_TIMESTAMP)
     */
}

// PROBLEM 2: Insert User
// Write a function that inserts a new user into the database
function insertUser(name, email, age) {
    /**
     * TODO: Implement this function
     * Insert a user and return a Promise that resolves with the inserted user's id
     * Example: insertUser("John Doe", "john@example.com", 25)
     */
    return new Promise((resolve, reject) => {
        // Your code here
    });
}

// PROBLEM 3: Get All Users
// Write a function that retrieves all users from the database
function getAllUsers() {
    /**
     * TODO: Implement this function
     * Return a Promise that resolves with an array of user objects
     * Example: [{id: 1, name: 'John Doe', email: 'john@example.com', age: 25}, ...]
     */
    return new Promise((resolve, reject) => {
        // Your code here
    });
}

// PROBLEM 4: Get User by ID
// Write a function that retrieves a user by their ID
function getUserById(userId) {
    /**
     * TODO: Implement this function
     * Return a Promise that resolves with a user object or null if not found
     */
    return new Promise((resolve, reject) => {
        // Your code here
    });
}

// PROBLEM 5: Update User
// Write a function that updates a user's information
function updateUser(userId, updates) {
    /**
     * TODO: Implement this function
     * Updates should be an object with optional fields: {name, email, age}
     * Update only the provided fields for the user
     * Return a Promise that resolves with true if successful, false if user not found
     */
    return new Promise((resolve, reject) => {
        // Your code here
    });
}

// PROBLEM 6: Delete User
// Write a function that deletes a user by ID
function deleteUser(userId) {
    /**
     * TODO: Implement this function
     * Return a Promise that resolves with true if user was deleted, false if user not found
     */
    return new Promise((resolve, reject) => {
        // Your code here
    });
}

// PROBLEM 7: Count Users
// Write a function that counts the total number of users
function countUsers() {
    /**
     * TODO: Implement this function
     * Return a Promise that resolves with the total count of users
     */
    return new Promise((resolve, reject) => {
        // Your code here
    });
}

// PROBLEM 8: Get Users by Age Range
// Write a function that retrieves users within an age range
function getUsersByAgeRange(minAge, maxAge) {
    /**
     * TODO: Implement this function
     * Return a Promise that resolves with all users where age is between minAge and maxAge (inclusive)
     */
    return new Promise((resolve, reject) => {
        // Your code here
    });
}

// PROBLEM 9: Get Average Age
// Write a function that calculates the average age of all users
function getAverageAge() {
    /**
     * TODO: Implement this function
     * Return a Promise that resolves with the average age as a number
     */
    return new Promise((resolve, reject) => {
        // Your code here
    });
}

// PROBLEM 10: Search Users by Name
// Write a function that searches users by name (partial match)
function searchUsersByName(searchTerm) {
    /**
     * TODO: Implement this function
     * Return a Promise that resolves with users whose name contains the searchTerm (case-insensitive)
     * Example: searchUsersByName("john") should find "John Doe"
     */
    return new Promise((resolve, reject) => {
        // Your code here
    });
}

// TEST YOUR FUNCTIONS HERE
async function testFunctions() {
    console.log("Testing your database functions...");
    
    // Example test flow:
    // await setupDatabase();
    // const userId = await insertUser("John Doe", "john@example.com", 25);
    // console.log(`Inserted user with ID: ${userId}`);
    // const users = await getAllUsers();
    // console.log(`All users:`, users);
}

// Uncomment to run tests
// testFunctions().catch(console.error);

module.exports = {
    setupDatabase,
    insertUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    countUsers,
    getUsersByAgeRange,
    getAverageAge,
    searchUsersByName
};

