 ## String Calculator – TDD Kata 

Welcome! This repository contains the implementation of the String Calculator Kata as part of the Incubyte Software Craftsperson recruitment process. The objective is to showcase my ability to write clean, test-driven, maintainable, and readable code using ReactJS and Jest.

---

## Problem Statement

Implement a function `add(numbers: string): number` which returns the sum of numbers in a string. The function should support:

- Comma (`,`) and newline (`\n`) as delimiters
- A custom delimiter defined in the format: `//[delimiter]\n[numbers]`
- Handling of any number of input values
- Throwing an exception when negative numbers are present (listing all of them)

---

##  TDD Approach Followed

This project was developed using the **Red → Green → Refactor** test-driven development cycle:

1.Write a failing test
2.Make the test pass
3.Refactor the code for clarity and simplicity
4.Repeat for the next test case

All commits are atomic and traceable to TDD steps. You can follow my test-driven development flow through the commit history.



## How to Run

git clone https://github.com/your-username/string-calculator.git
cd string-calculator
npm install
