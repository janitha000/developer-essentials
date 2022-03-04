### .net vs c#
- .net is a framework (collection of libraries and a runtime)
- c# is a programmming language (syntaxes, grammers, rules etc...)

### .net fraemwork vs .net core vs .net 5
- .net framework runs only in windows
- .net core cross platfrom
- .net 5 provide unified experience (.net framework, .net core, mono etc..) 

### IL(intermediate language) and JIT
- C# -> IL -> Machine language
- JIT complies IL to machine code (jsut in time) in execution time

### Why need IL (without compiling directly to machince code)
- due to difference between development env and runtime env
- dev can be done on windows 10 and runtime might be linux

### CLR (common language runtime)
- runtime execution envionement
- 1. converts IL to native/machine language
- 2. clr response for grabage collection (clean unused memory)

### Grabage collector
- unused, managed code will be cleared

### CTS (common type system)
- .net have many languages(c#, vb, f#)
- when coverting to IL needs common types 
- done by this this CTS 

### CLS (common language specification)
- common behaviour in languagee (some are case sensitive etc...)

### Stack vs heap
- stack stores primitive data : value types
- heap stores objects (actual data stored on heap/ pointer is still on stack) : reference types

### boxing and unboxing
- reference type -> value type : boxing
`int i =10; object y = i;`
- other way is unboxing

### array vs arraylist
- array have a fixed length
- array is strongly typed (only one type)
- generic collections are strongly typed (List<int>)

### threads vs tasks
- task does parellel processing
- threads will always run on one core while tasks are not

 