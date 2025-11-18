"""
PYTHON DATABASE PROGRAMMING - BASIC PRACTICE PROBLEMS
======================================================

Complete each function below. You'll need to install sqlite3 (comes with Python)
or use another database library like psycopg2 for PostgreSQL.

Install dependencies:
    pip install sqlite3  # Usually built-in
    # OR for PostgreSQL: pip install psycopg2-binary

Start with problem 1 and work your way through.
"""

import sqlite3
from typing import List, Dict, Optional

# Database connection helper
def get_connection():
    """Returns a connection to the database"""
    conn = sqlite3.connect('practice.db')
    return conn

# PROBLEM 1: Create Database and Table
# Create a function that sets up the database with a users table
def setup_database():
    """
    TODO: Implement this function
    Create a table called 'users' with columns:
    - id (INTEGER PRIMARY KEY)
    - name (TEXT NOT NULL)
    - email (TEXT UNIQUE NOT NULL)
    - age (INTEGER)
    - created_at (TIMESTAMP DEFAULT CURRENT_TIMESTAMP)
    """
    pass


# PROBLEM 2: Insert User
# Write a function that inserts a new user into the database
def insert_user(name: str, email: str, age: int) -> int:
    """
    TODO: Implement this function
    Insert a user and return the inserted user's id
    Example: insert_user("John Doe", "john@example.com", 25)
    """
    pass


# PROBLEM 3: Get All Users
# Write a function that retrieves all users from the database
def get_all_users() -> List[Dict]:
    """
    TODO: Implement this function
    Return a list of dictionaries, each representing a user
    Example: [{'id': 1, 'name': 'John Doe', 'email': 'john@example.com', 'age': 25}, ...]
    """
    pass


# PROBLEM 4: Get User by ID
# Write a function that retrieves a user by their ID
def get_user_by_id(user_id: int) -> Optional[Dict]:
    """
    TODO: Implement this function
    Return a dictionary representing the user, or None if not found
    """
    pass


# PROBLEM 5: Update User
# Write a function that updates a user's information
def update_user(user_id: int, name: Optional[str] = None, 
                email: Optional[str] = None, age: Optional[int] = None) -> bool:
    """
    TODO: Implement this function
    Update only the provided fields for the user
    Return True if successful, False if user not found
    """
    pass


# PROBLEM 6: Delete User
# Write a function that deletes a user by ID
def delete_user(user_id: int) -> bool:
    """
    TODO: Implement this function
    Return True if user was deleted, False if user not found
    """
    pass


# PROBLEM 7: Count Users
# Write a function that counts the total number of users
def count_users() -> int:
    """
    TODO: Implement this function
    Return the total count of users
    """
    pass


# PROBLEM 8: Get Users by Age Range
# Write a function that retrieves users within an age range
def get_users_by_age_range(min_age: int, max_age: int) -> List[Dict]:
    """
    TODO: Implement this function
    Return all users where age is between min_age and max_age (inclusive)
    """
    pass


# PROBLEM 9: Get Average Age
# Write a function that calculates the average age of all users
def get_average_age() -> float:
    """
    TODO: Implement this function
    Return the average age as a float
    """
    pass


# PROBLEM 10: Search Users by Name
# Write a function that searches users by name (partial match)
def search_users_by_name(search_term: str) -> List[Dict]:
    """
    TODO: Implement this function
    Return users whose name contains the search_term (case-insensitive)
    Example: search_users_by_name("john") should find "John Doe"
    """
    pass


# TEST YOUR FUNCTIONS HERE
if __name__ == "__main__":
    print("Testing your database functions...")
    
    # Example test flow:
    # setup_database()
    # user_id = insert_user("John Doe", "john@example.com", 25)
    # print(f"Inserted user with ID: {user_id}")
    # users = get_all_users()
    # print(f"All users: {users}")
    
    pass


