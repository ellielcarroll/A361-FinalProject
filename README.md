```
# A361-FinalProject
Final project submission for A361-001.2025FA

Category B: Variables, Scoping & Type Systems
B1. Variable Binding and Scope Analysis

This project demonstrates variable binding, scoping rules, and type-system behavior across C++, JavaScript, and Python.
The goal is to compare how different programming languages handle:

Static vs. dynamic binding

Static vs. dynamic scoping

Variable shadowing

Closures and nested scopes

Binding times (compile-time vs. runtime)



OBJECTIVES

Provide language-specific code examples that illustrate:

  How each language resolves identifiers

  How shadowing behaves in nested scopes

  How closures capture variables

  Differences in static (lexical) vs. dynamic scoping

Compare the three languages using:

  A scoping-rules comparison table

  Annotated diagrams of scope chains and name resolution

  A written analysis of design trade-offs




DELIVERABLES SUMMARY

I. Code samples of scoping and binding in each language
V. Edge case tests (nested scopes, closures, and shadowing)
III. Explanatory analysis
II. Comparison table of scoping rules
IV. Visual diagrams of scoping chains



CODE STRUCTURE

├── cppCase.cpp/
│   ├── static scoping
|   ├── static binding
│   ├── variable shadowing     # C++ lacks closures traditionally; comments explain edge case workarounds
│
├── javascriptCase.js/
│   ├── static scoping
│   ├── simulated dynamic scoping    # Implemented through nested scoping
│   ├── dynamic binding
|   ├── variable shadowing with var
|   ├── variable shadowing with let and const
|   └── closure with currying
│
├── pythonCase.py/
│   ├── dynamic binding
│   ├── static scoping
│   └── simulated dynamic scoping   # Implemented through variable shadowing and nested scoping
│
└── 



RUNNING THE CODE

C++
g++ cppCases.cpp -o cppCases && ./cppCases

JavaScript (Node.js)
node javascriptCases.js

Python
python3 pythonCases.py




GITIGNORE FILE

Located in the diagrams/ folder:

Explanation of scoping rules

Table Comparison of scoping rules

Visual diagrams of scoping chains

Analysis of design trade-offs
```
