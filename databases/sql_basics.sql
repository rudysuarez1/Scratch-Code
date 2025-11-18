-- SQL DATABASE BASICS - PRACTICE PROBLEMS
-- =======================================
-- 
-- Complete each section below. Start with problem 1 and work your way through.
-- Create a database and tables as needed to practice these queries.
-- 

-- ============================================
-- SETUP: Create a sample database and tables
-- ============================================

-- PROBLEM 1: Create a Database
-- Create a database called 'practice_db'
-- TODO: Write the CREATE DATABASE statement
-- Hint: CREATE DATABASE database_name;


-- PROBLEM 2: Create a Users Table
-- Create a table called 'users' with the following columns:
--   - id (INTEGER, PRIMARY KEY, AUTO_INCREMENT)
--   - name (VARCHAR(100), NOT NULL)
--   - email (VARCHAR(100), UNIQUE, NOT NULL)
--   - age (INTEGER)
--   - created_at (TIMESTAMP, DEFAULT CURRENT_TIMESTAMP)
-- TODO: Write the CREATE TABLE statement


-- PROBLEM 3: Create an Orders Table
-- Create a table called 'orders' with:
--   - id (INTEGER, PRIMARY KEY, AUTO_INCREMENT)
--   - user_id (INTEGER, FOREIGN KEY references users(id))
--   - product_name (VARCHAR(100))
--   - amount (DECIMAL(10, 2))
--   - order_date (DATE)
-- TODO: Write the CREATE TABLE statement


-- ============================================
-- BASIC QUERIES
-- ============================================

-- PROBLEM 4: Insert Data
-- Insert 5 sample users into the users table
-- TODO: Write INSERT statements for 5 users
-- Example: INSERT INTO users (name, email, age) VALUES ('John Doe', 'john@example.com', 25);


-- PROBLEM 5: Select All Users
-- Write a query to select all users from the users table
-- TODO: Write the SELECT statement


-- PROBLEM 6: Select Specific Columns
-- Write a query to select only name and email from users
-- TODO: Write the SELECT statement


-- PROBLEM 7: Filter by Age
-- Write a query to select all users who are older than 25
-- TODO: Write the SELECT statement with WHERE clause


-- PROBLEM 8: Order Results
-- Write a query to select all users ordered by age (descending)
-- TODO: Write the SELECT statement with ORDER BY


-- PROBLEM 9: Count Records
-- Write a query to count the total number of users
-- TODO: Write the SELECT COUNT statement


-- PROBLEM 10: Find Average Age
-- Write a query to find the average age of all users
-- TODO: Write the SELECT AVG statement


-- PROBLEM 11: Find Maximum Age
-- Write a query to find the oldest user's age
-- TODO: Write the SELECT MAX statement


-- PROBLEM 12: Update Record
-- Write a query to update a user's age (update user with id=1 to age 30)
-- TODO: Write the UPDATE statement


-- PROBLEM 13: Delete Record
-- Write a query to delete a user (delete user with id=5)
-- TODO: Write the DELETE statement


-- PROBLEM 14: Join Tables
-- Write a query to select all orders with their user names
-- Join the orders table with the users table
-- TODO: Write the SELECT with JOIN


-- PROBLEM 15: Group By
-- Write a query to count orders per user
-- TODO: Write the SELECT with GROUP BY


-- ============================================
-- PRACTICE SCENARIOS
-- ============================================

-- SCENARIO 1: Find all users who have placed orders
-- TODO: Write a query using JOIN or subquery


-- SCENARIO 2: Find the total amount spent by each user
-- TODO: Write a query with GROUP BY and SUM


-- SCENARIO 3: Find users who haven't placed any orders
-- TODO: Write a query using LEFT JOIN and WHERE IS NULL


-- SCENARIO 4: Find the most expensive order
-- TODO: Write a query to find the order with the highest amount


-- SCENARIO 5: Find users between ages 20 and 30
-- TODO: Write a query using WHERE with BETWEEN or comparison operators


