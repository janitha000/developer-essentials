### normalization
- avoid redundant data
- implemented by splitting tables

### denormalization
- imporve search performence (read performence)
- by normalization we have to fetch from multiple tables
- merge the tables

### OLAP vs OLTP
- online transtion processing and online analytical processing
- high load
    - insert/update/delete -> oltp : follow normalisation
    - select/reads -> olap : follow denormalisation

### Normalization forms
 APT
 - Atomic (colum should have only one value)
 - Partial Dependency (non key columns should fully dependent on primary key)
 - Transient (non key columns should not depend on other non key columns)

 ### char vs varchar
 - char : fixed length - char(3) if we pride US it will still have 3 length
 - varchar : variable lenght

 ### nchar vs char
 - non english (can support non english characters | unicode characters) : takes 2 bytes


### functio  vs stored procedure
- fucntions : to do computation
    - cannot do insert/update or other permenant changes
    - reuse same cumputation logic
- stored procedures - mini batch program
    - can do changes


### transaction
- either all are done or if one fails rollback everything


### inner join
- get matching records in both


### left join
- all from left and only matching from right

