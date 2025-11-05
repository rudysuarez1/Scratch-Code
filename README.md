# Code Practice Repository

This repository is for practicing and experimenting with various coding concepts, algorithms, database schemas, and testing different approaches.

## 📁 Directory Structure

```
├── algorithms/         # Algorithm implementations and optimizations
│   ├── python_basics.py      # Python algorithms (10 problems)
│   ├── cpp_basics.cpp         # C++ algorithms (10 problems)
│   └── java_basics.java       # Java algorithms (10 problems)
├── databases/          # Database schema designs and SQL experiments
│   ├── sql_basics.sql              # SQL practice (15 problems)
│   ├── python_db_basics.py         # Python database programming (10 problems)
│   └── javascript_db_basics.js     # JavaScript database programming (10 problems)
├── testing/           # Code testing experiments and examples
│   ├── python_testing_basics.py    # Python testing with pytest (12 problems)
│   ├── javascript_testing_basics.test.js  # JavaScript testing with Jest (13 problems)
│   └── java_testing_basics.java    # Java testing with JUnit (13 problems)
└── experiments/       # General coding experiments and prototypes
```

## 🎯 Quick Start

1. **Read the Learning Roadmap**: Check out `LEARNING_ROADMAP.md` for a structured learning path
2. **Choose Your Language**: Start with algorithms in Python, C++, or Java
3. **Solve Problems**: Each file contains practice problems with TODO comments
4. **Track Progress**: Mark problems as you complete them

## 📚 Practice Problems

### Algorithms (30 problems total)
- **Python**: Basic algorithms - loops, conditionals, data structures
- **C++**: Same concepts in C++ with performance considerations
- **Java**: Object-oriented approach to algorithms

### Databases (35 problems total)
- **SQL**: Database design, queries, joins, aggregations
- **Python**: Database programming with Python
- **JavaScript**: Database operations with Node.js

### Testing (38 problems total)
- **Python**: pytest framework - assertions, fixtures, parametrization
- **JavaScript**: Jest framework - test suites, mocking, async testing
- **Java**: JUnit 5 - parameterized tests, nested classes, lifecycle

## 🚀 Usage

### Algorithms
1. Open a language file (e.g., `algorithms/python_basics.py`)
2. Complete each function marked with `TODO`
3. Test your solutions with the provided examples
4. Run the file to verify your implementations

### Databases
1. **SQL**: Set up a database and run queries from `databases/sql_basics.sql`
2. **Python/JavaScript**: Install dependencies and implement database functions
3. Practice CRUD operations and complex queries

### Testing
1. Read the functions to test (already implemented)
2. Write test cases for each function
3. Run tests using the appropriate test runner:
   - Python: `pytest testing/python_testing_basics.py -v`
   - JavaScript: `npm test testing/javascript_testing_basics.test.js`
   - Java: Run with your IDE or `mvn test`

## 📖 Learning Path

See `LEARNING_ROADMAP.md` for:
- Week-by-week learning schedule
- Problem-solving strategies
- Progress tracking
- Resources and next steps

## 💡 Tips

- Start with **basics** - don't skip problems, they build on each other
- **One language at a time** - master one before moving to others
- **Test your solutions** - verify your code works correctly
- **Document your learning** - add comments explaining your approach
- **Practice consistently** - daily practice beats cramming

## 🔧 Setup Requirements

### Python
```bash
pip install pytest
```

### JavaScript
```bash
npm init -y
npm install --save-dev jest
npm install sqlite3  # For database exercises
```

### Java
- Maven or Gradle for dependency management
- JUnit 5 dependencies (see `testing/java_testing_basics.java` for details)

### C++
```bash
g++ -o cpp_basics algorithms/cpp_basics.cpp
./cpp_basics
```

### SQL
- Any SQL database (MySQL, PostgreSQL, SQLite)
- SQLite is recommended for beginners (no setup required)

Happy coding! 🚀

