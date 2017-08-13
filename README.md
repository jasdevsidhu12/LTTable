# Welcome to my League Table project #

This project displays the league table standings of __Superliga Seasons__ teams.

---

## Prerequisites ##

You can try running this app at your own __node version__ that you have.<return>
If not, you can try installing node version 6.3.0 at the following link
<a href="https://nodejs.org/en/blog/release/v6.3.0/">https://nodejs.org/en/blog/release/v6.3.0/</a> as I build this application on it, on the site scroll to below until you find the installer respective to the OS.

---

## Running this App ##
Go to the main project directory and do
```
cd server
```
Inside "server" directory do
```
npm install
npm start
```
than click at the <a href="http://localhost:8000">http://localhost:8000</a> you should see my application running. :) <return>
*installation won't take long as you're only installing an 'express module' because the files(js, css, images) are already bundle into a single JS file*

---



## Running the unit test ##
Go to the main project directory and do
```
npm install
npm test
```

You should be able to see the unit test execution in cmd or terminal
*installation will take time as it has to install all the required dependecies stated at package.json file in main directory*

---



## Code ##

The development code(React,Redux, SASS) is place at "src" folder whereas the unit tests(enzyme) are place at "test" folder.<return>
The development code is compress into a single JS file(app.min.js) at "dist" directory using the beauty of webpack :) so that it can be served at the express server.
Most of my files prefix name starts with 'LT' or 'lt', it stands for League Table.