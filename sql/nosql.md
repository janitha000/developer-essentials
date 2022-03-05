### sql vs nosql when to use
- when there is variable schema : use nosql
- horizontal scalability : use nosql
    - sql vertical scalable : adding more resources

- fast
    - when there are cross table queries sql will be faster with joins etc...
    - if all are in single location nosql will be faster since no joins needs to happen

- big data
    - no sql due to flexibility of schema
    - horizontal scaling

- highly structured data
    - sql since can be use all denomalisation and joins etc efficiently
    - have acid

- semi structured or unstructured
    - nosql

- transaction oriented accouting, financial etc
    - use sql due to acid and maturity



### nosql database types
- key value databases (redis, dynmodb)
- document databases (Mongodb)
- column oriented databases (HBase)
- Graph databases (neo4j)


### nosql comment
Though I’ve used relational databases for the better part of my career I find document databases more convenient. When my team designs the application model its not in terms of relationship, storage efficiency, etc.; Rather its in terms of application/domain-specific and store and retrieve data almost exactly as the application needs. No intermediate step of normalizing and denormalizing data. Faster application development, able to update the model as needed, and of course smaller (human) resource pool!