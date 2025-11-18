"""
PYTHON TESTING - BASIC PRACTICE PROBLEMS
=========================================

Complete the test functions below. You'll be testing the functions in the 
corresponding implementation file.

Install pytest: pip install pytest
Run tests: pytest python_testing_basics.py -v

Start with problem 1 and work your way through.
"""

import pytest

# ============================================
# FUNCTIONS TO TEST (These are already implemented)
# ============================================

def add(a, b):
    """Adds two numbers"""
    return a + b

def multiply(a, b):
    """Multiplies two numbers"""
    return a * b

def divide(a, b):
    """Divides a by b"""
    if b == 0:
        raise ValueError("Cannot divide by zero")
    return a / b

def is_even(n):
    """Checks if a number is even"""
    return n % 2 == 0

def reverse_string(s):
    """Reverses a string"""
    return s[::-1]

def get_max(numbers):
    """Gets the maximum value from a list"""
    if not numbers:
        raise ValueError("List cannot be empty")
    return max(numbers)

# ============================================
# TEST PROBLEMS - Write tests for each function above
# ============================================

# PROBLEM 1: Test the add function
# Write a test that verifies add(2, 3) returns 5
def test_add_basic():
    """
    TODO: Write a test using assert
    Example: assert add(2, 3) == 5
    """
    pass


# PROBLEM 2: Test add with negative numbers
# Write a test that verifies add(-5, 3) returns -2
def test_add_negative():
    """
    TODO: Write a test for negative numbers
    """
    pass


# PROBLEM 3: Test the multiply function
# Write a test that verifies multiply(4, 5) returns 20
def test_multiply_basic():
    """
    TODO: Write a test for multiply
    """
    pass


# PROBLEM 4: Test multiply with zero
# Write a test that verifies multiply(10, 0) returns 0
def test_multiply_zero():
    """
    TODO: Write a test for multiplying by zero
    """
    pass


# PROBLEM 5: Test the divide function
# Write a test that verifies divide(10, 2) returns 5
def test_divide_basic():
    """
    TODO: Write a test for divide
    """
    pass


# PROBLEM 6: Test divide by zero
# Write a test that verifies divide raises ValueError when dividing by zero
def test_divide_by_zero():
    """
    TODO: Write a test using pytest.raises to check for ValueError
    Example: with pytest.raises(ValueError):
                 divide(10, 0)
    """
    pass


# PROBLEM 7: Test is_even function
# Write tests for both even and odd numbers
def test_is_even_true():
    """
    TODO: Write a test for an even number (should return True)
    """
    pass


def test_is_even_false():
    """
    TODO: Write a test for an odd number (should return False)
    """
    pass


# PROBLEM 8: Test reverse_string function
# Write a test that verifies reverse_string("hello") returns "olleh"
def test_reverse_string():
    """
    TODO: Write a test for reverse_string
    """
    pass


# PROBLEM 9: Test get_max function
# Write a test that verifies get_max([1, 5, 3, 9, 2]) returns 9
def test_get_max():
    """
    TODO: Write a test for get_max
    """
    pass


# PROBLEM 10: Test get_max with empty list
# Write a test that verifies get_max raises ValueError with empty list
def test_get_max_empty_list():
    """
    TODO: Write a test using pytest.raises to check for ValueError
    """
    pass


# PROBLEM 11: Write multiple test cases using parametrize
# Use pytest.mark.parametrize to test add with multiple inputs
@pytest.mark.parametrize("a, b, expected", [
    (2, 3, 5),
    (0, 0, 0),
    (-1, 1, 0),
    (10, 20, 30),
])
def test_add_parametrize(a, b, expected):
    """
    TODO: Complete this test - it should already work with parametrize
    but verify the assertion is correct
    """
    # TODO: Write the assertion
    pass


# PROBLEM 12: Write a fixture
# Create a fixture that provides a list of numbers for testing
@pytest.fixture
def sample_numbers():
    """
    TODO: Create a fixture that returns [1, 2, 3, 4, 5]
    """
    pass


def test_get_max_with_fixture(sample_numbers):
    """
    TODO: Write a test that uses the sample_numbers fixture
    """
    pass


