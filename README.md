# Hack-ncs16

Ncs Website for 2016

## Installation.

1. Install node in your Machine.

2. Install Mysql

3. Get the source code on your machine via git.

    ```shell
    git clone https://github.com/ncs-jss/hack-ncs16.git
    ```
    
4. Install node dependencies

    ```shell
    cd hack-ncs16
    npm install --save
    npm install  // again to see if things get install correctly.
    npm install nodemon -g
    ```
    
5. Change credential in `server.js` for mysql database

6. Start the server

  ```shell
  nodemon app.js
  ```

That's it, Now start development at [http://localhost:3000](http://localhost:3000) in your browser
