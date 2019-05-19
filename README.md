### CareForMe

# How to contribute/Use

Install docker, and docker compose. https://docs.docker.com/compose/install/

Next, create a new folder on the root called `certs`. cd into this folder. Once inside of certs, run the command below.

To generate certs:

`openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout cert.key -out cert.crt`

Follow the steps through the CLI.

Next, cd into client, and run npm i.
Repeat this process by going back to root, and cding into server.

Now, run `docker-compose up --build`

If everything was done correctly, you should be able to go to https://localhost , bypass the secuirty warning, and see our project!

Code base for our project is hosted at www.github.com/ngattusohw/CareForMe
