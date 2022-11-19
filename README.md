# HOW TO START THE PROJECT

First, make sure you have installed Docker Desktop, otherwise go to the next link: https://docs.docker.com/desktop/install/mac-install/. Once you installed Docker Desktop, go to your favorite terminal and go to the root of this project, then type:

`docker-compose up`

This will download the images for"

* **client**: It has node (to install the dependencies) and reactjs
*  **api**: It has laravel, and php.
* **db**: It has MySQL.

> IMPORTANT! **Create the db folder on the root of this project. It is ignored on the gitignore file**


### Access to the client
Go to: http://localhost:8080/


Feel free to check the whole code.

Final words, I didn't add recaptcha 100%. I ran out of time. There's a few tests on Laravel but not as much as I wanted and none for the components.

Thanks! <3
