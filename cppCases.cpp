// C++ Source Code
#include <iostream>
#include <functional>

int global_x = 1; // global variable 


// Static Scoping:
int scoping() {
    //int global_x = 2
    return global_x;
}

// Static Binding:
int binding() {
    int global_x = 3; // local variable x
    return scoping(); // will still return global x = 1
}


// Variable Shadowing, Edge Cases, and Closures:
// Variable shadowing
int variableShadowing() {
    // shadowing global_x to print within the method
    int global_x = 4; // now a local case of variable x
    return global_x;
}
// global_x returns to a global variable = 1

//Closure
std::function<int()>create_closure() {
    int global_x = 10;
    // capturing x by reference
    return [global_x]() mutable -> int { 
        return ++global_x;
    };
}


int main() {
    // global variable at compile time
    std::cout << "The global variable x is: " << ::global_x << std::endl;
    // static binding at compile time
    std::cout << "The result of static binding variable x is: " << binding() << std::endl;
    // static scoping at compile time
std::cout << "The result of static scoping variable x is: " << scoping() << std::endl;
    // all cases will return the same value of x, despite changing x within the methods, this is the functionality of a purely static language 
    
    //closure case
    std::function<int()> closure = create_closure();
    std::cout << "The result of variable x in a closure is: " << closure() << std::endl;
    // variable shadowing case
    std::cout << "The result of variable shadowing variable x is: " << variableShadowing() << std::endl;

    return 0;
}
