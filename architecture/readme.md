### Layered pattern
- Presentation layer (UI)
- Application layer (service layer)
- Business logic layer (domain)
- Data access layer (persistence layer)


### Client Server pattern
- two tier architecture
- UI and application logic resides in the presentation tier
- data tier consists of databases

### Master slave pattern

### Pipe filter pattern

### Model View Controller (MVC)
- model : core 
- view : UI
- controller : connect UI with the core

### Micro service
- creating multiple services which can run independently
- seperate deployment units
- challenges
    - completely make independent services in a domian

### Three tier architecture
- organizes application into three logical and physical computing tires
    - presentation tier (UI) - React, Angular etc....
    - application tier (data is processed) - Nodejs, Java, .NET etc....
    - data tier (data) - SQL, MongoDB etc...

### Three tier vs 3 Layer architecture
- A 'layer' refers to a functional division of the software, but a 'tier' refers to a functional division of the software that runs on infrastructure separate from the other divisions. The Contacts app on your phone, for example, is a three-layer application, but a single-tier application, because all three layers run on your phone.

### Serverless
- Automatically provisions the computing resources required to run application code on demand, or in response to a specific event
- Automatically scales those resources up or down in response to increased or decreased demand
- Automatically scales resources to zero when the application stops running
- Serverless offloads all management responsibility for backend cloud infrastructure and operations tasks - provisioning, scheduling, scaling, patching and more - to the cloud provider

- For certain workloads, such as ones that require parallel processing, serverless can be both faster and more cost-effective than other forms of compute
- most suitable for event driven and stream processing workloads

- not good for
    - stable and predictable workloads which are long running
    - cold starts
    - montorting and debugging
    - vendor lock in

- kubernetis serverless : KNative

#### use cases
- micro services
- api backends
- data processing
- massively parellel computing
- event driven applications