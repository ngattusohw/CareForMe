### CareForMe

# How to contribute

Install docker, and docker compose. https://docs.docker.com/compose/install/

Next, create a new folder on the root called `certs`. cd into this folder. Once inside of certs, run the command below.

To generate certs:

`openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout cert.key -out cert.crt`

Follow the steps through the CLI.
