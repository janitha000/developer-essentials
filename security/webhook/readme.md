use secrets fro hash and generate signature

ex:- we expose a webhook api

- create a secret and shre with the other party
- when sending data create a signature for the body using the secret
- once recieved on other party, they can generate the hash again using the body and validate