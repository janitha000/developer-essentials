### why oop
- helps to think in terms of real world objects

### pillars in oop
- abstraction : show only what is necessary
- polymorphism : objects acts differently under different conditions
- inheritance : parent child relationship
- encapsulation : hide complexity which should not be known to public

### abstraction vs encapsulation
- abstraction : show only things needs outside when only needed (making fields/methids private)
    - done in design phase
- encapsulation : encapusation implements abstraction
    - done in execution/development phase    


### inheritance
- child parent relation
    - share all the properties of parent
    - can define own methids in child

### virtual
- overriding
- defined in parent where child can override

### overloading
- same method name with different signature

### polymorphism

```
Empolyee e = new Emplyee();
e = new Supervisor();
```
e can act as bth employee and supervisor in different conditions

- can polymorphism works without inheritance - NO
    - above example supervisor should inherit from Employee

### static and synamic polymorphism / compile time and runtime
- complie time : method overloading
- run time : method overriding


### Abstract class
- partially defined parent class
- methods in abstract classes are virtual by default
    - child will neeed to override the methods
    - it is complusory to override them 
- some methods can be already implemented

### Interface
- is a contract
- all methids and fields always public
- implement interface : promise that child will follow the contract
- multiple inheritance : handle changes in interface
    - create new interface
    - multiple inheritance where new method is needed
    `public interface IEmployeeWithAge : IEmployee `
    `public class Employee : IEmployee, IEmployeeWithAge`

- interface seggregration (solid I)
    - does not force child to implement unnessasary methods
    - can be done by multiple inheritance

### interface vs abstract
- abstract classes can have methods implemented
