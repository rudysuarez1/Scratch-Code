/**
 * JAVA TESTING - BASIC PRACTICE PROBLEMS
 * =======================================
 * 
 * Complete the test methods below. You'll be testing the methods in the 
 * corresponding implementation class.
 * 
 * Using JUnit 5. Install JUnit 5 dependencies in your build tool.
 * 
 * For Maven, add to pom.xml:
 * <dependency>
 *     <groupId>org.junit.jupiter</groupId>
 *     <artifactId>junit-jupiter</artifactId>
 *     <version>5.9.2</version>
 *     <scope>test</scope>
 * </dependency>
 * 
 * Start with problem 1 and work your way through.
 */

import org.junit.jupiter.api.*;
import static org.junit.jupiter.api.Assertions.*;

// ============================================
// CLASS TO TEST (These methods are already implemented)
// ============================================

class MathUtils {
    public static int add(int a, int b) {
        return a + b;
    }
    
    public static int multiply(int a, int b) {
        return a * b;
    }
    
    public static double divide(int a, int b) {
        if (b == 0) {
            throw new IllegalArgumentException("Cannot divide by zero");
        }
        return (double) a / b;
    }
    
    public static boolean isEven(int n) {
        return n % 2 == 0;
    }
    
    public static String reverseString(String s) {
        return new StringBuilder(s).reverse().toString();
    }
    
    public static int getMax(int[] numbers) {
        if (numbers.length == 0) {
            throw new IllegalArgumentException("Array cannot be empty");
        }
        int max = numbers[0];
        for (int num : numbers) {
            if (num > max) {
                max = num;
            }
        }
        return max;
    }
}

// ============================================
// TEST PROBLEMS - Write tests for each method above
// ============================================

public class java_testing_basics {
    
    // PROBLEM 1: Test the add method
    // Write a test that verifies MathUtils.add(2, 3) returns 5
    @Test
    void testAddBasic() {
        // TODO: Write a test using assertEquals
        // Example: assertEquals(5, MathUtils.add(2, 3));
    }
    
    
    // PROBLEM 2: Test add with negative numbers
    // Write a test that verifies MathUtils.add(-5, 3) returns -2
    @Test
    void testAddNegative() {
        // TODO: Write a test for negative numbers
    }
    
    
    // PROBLEM 3: Test the multiply method
    // Write a test that verifies MathUtils.multiply(4, 5) returns 20
    @Test
    void testMultiplyBasic() {
        // TODO: Write a test for multiply
    }
    
    
    // PROBLEM 4: Test multiply with zero
    // Write a test that verifies MathUtils.multiply(10, 0) returns 0
    @Test
    void testMultiplyZero() {
        // TODO: Write a test for multiplying by zero
    }
    
    
    // PROBLEM 5: Test the divide method
    // Write a test that verifies MathUtils.divide(10, 2) returns 5.0
    @Test
    void testDivideBasic() {
        // TODO: Write a test for divide (remember it returns double)
        // Example: assertEquals(5.0, MathUtils.divide(10, 2));
    }
    
    
    // PROBLEM 6: Test divide by zero
    // Write a test that verifies divide throws IllegalArgumentException when dividing by zero
    @Test
    void testDivideByZero() {
        // TODO: Write a test using assertThrows
        // Example: assertThrows(IllegalArgumentException.class, () -> MathUtils.divide(10, 0));
    }
    
    
    // PROBLEM 7: Test isEven method
    // Write tests for both even and odd numbers
    @Test
    void testIsEvenTrue() {
        // TODO: Write a test for an even number (should return true)
    }
    
    
    @Test
    void testIsEvenFalse() {
        // TODO: Write a test for an odd number (should return false)
    }
    
    
    // PROBLEM 8: Test reverseString method
    // Write a test that verifies MathUtils.reverseString("hello") returns "olleh"
    @Test
    void testReverseString() {
        // TODO: Write a test for reverseString
    }
    
    
    // PROBLEM 9: Test getMax method
    // Write a test that verifies MathUtils.getMax([1, 5, 3, 9, 2]) returns 9
    @Test
    void testGetMax() {
        // TODO: Write a test for getMax
        // Example: int[] numbers = {1, 5, 3, 9, 2};
        //          assertEquals(9, MathUtils.getMax(numbers));
    }
    
    
    // PROBLEM 10: Test getMax with empty array
    // Write a test that verifies getMax throws IllegalArgumentException with empty array
    @Test
    void testGetMaxEmptyArray() {
        // TODO: Write a test using assertThrows
    }
    
    
    // PROBLEM 11: Write multiple test cases using @ParameterizedTest
    // Use @ParameterizedTest to test add with multiple inputs
    @ParameterizedTest
    @CsvSource({
        "2, 3, 5",
        "0, 0, 0",
        "-1, 1, 0",
        "10, 20, 30"
    })
    void testAddParameterized(int a, int b, int expected) {
        // TODO: Write the assertion
        // Example: assertEquals(expected, MathUtils.add(a, b));
    }
    
    
    // PROBLEM 12: Write a @BeforeEach method
    // Use @BeforeEach to set up test data
    int[] testNumbers;
    
    @BeforeEach
    void setUp() {
        // TODO: Initialize testNumbers as {1, 2, 3, 4, 5}
    }
    
    @Test
    void testGetMaxWithBeforeEach() {
        // TODO: Write a test that uses testNumbers
    }
    
    
    // PROBLEM 13: Write a @Nested class
    // Group related tests together using @Nested
    @Nested
    class MathOperationsTests {
        // TODO: Move some of the math-related tests (add, multiply, divide) into this nested class
    }
}


