# Hackville 2021 - RBC Challenge 
More information coming soon...


### Installation
To setup the back-end locally, please proceed with the steps below
1. Run ```npm install```
2. Create a directory called ```certs``` and place the ```cc-ca.crt``` file (provided in the Discord)
3. In the project directory, create a ```.env``` file to include our database information. Example below:
```
NODE_ENV=development
DB_HOST=
DB_PORT=
DB_USERNAME=
DB_PASSWORD=
DB_DATABASE=
```
3. Run ```npm run dev```

Voila! The back-end should be up and running