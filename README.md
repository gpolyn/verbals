# Verbals

Any *verbal* entity may consist of one string parameter, "name", possibly zero-length, and one ordered set, "values", possibly empty,
consisting of strings. An "ownerId" string is required. None of the parameters need be unique.

The service purpose is prototyping a microservices delivery model. The purpose will be fully met if similar services can be 
outsourced through dependence on the service contract standard developed for Verbals.

### Service-Level

* latency in single milliseconds
* fault-tolerance
* high-availability ((total time - downtime)/total time)
* data durability
* arbitrarily large total data storage
* item size up to 64 KB
* writes/reads up to 10,000 per second
* no maintenance

### Testing

WRITES
* total message
..1. POST request > 1MB, < 25 items fails
..2. POST request < 1MB, > 25 items fails 
..3. POST request < 1MB, < 25 items succeeds
* item 
..1. POST request < 1MB, < 25 items, item > 64 KB fails
..2. POST request < 1MB, < 25 items, item < 64 KB succeeds
READS
* total message
..1. GET request > 1MB, < 100 items fails
..2. GET request < 1MB, > 100 items fails
..3. GET request < 1MB, < 100 items succeeds
