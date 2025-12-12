pythonCases.py

#Python Source Code
# Dynamic Binding:
class shape:
    def draw(self):
        print ("Draw a shape")
        return

class triangle(shape):
    def draw(self):
        print ("Draw a triangle")
        return

class square(shape):
    def draw(self):
        print ("Draw a square")
        return

# dynamically binds the class shapes to support the objects passed
shapes = [triangle(), square()]
for shp in shapes:
   shp.draw()



#Static Scoping:
a = 1 # global scope

def outer_scope():
    a = 2 

    def inner_scope():
        a = 3
        # local scope --> a = 3
        print(f"Value of a in the inner scope is: {a}") 

    inner_scope()
    # outer scope --> a = 2
    print(f"Value of a in the outer scope is: {a}")

outer_scope()
# global scope --> a = 1
print(f"Value of a in the global scope is: {a}")



#Attempted Dynamic Scoping Using Variable Shadowing, Edge Cases, and Closures:
b = 1 # global variable
def func1():
    print(f"Value of b: {b}") 

def func2():
    b = 2
    func1() # b will return the global variable
    # however, using variable shadowing, b can be returned as its value in the inner scope
    print(f"Value of b using variable shadowing in func2: {b}")

def func3():
    b = 3
    func1() # b will return the global variable
    # however, using an edge case, b can be incremented as a nonlocal value
    def edge_case():
        nonlocal b
        b = b + 1
    edge_case()
    print(f"Value of b using edge case in func3: {b}")
    
    
#If python was dynamic, func2 would return 2 and func3 would return 3
# however, the global variable b = 1 is used for both functions
func2() 
func3()

