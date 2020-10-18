<p align="center">
  <img width="340" height="200" src="/web/src/images/logo.svg">
</p>

<br>
<p align="center">
  This is an app to connect the local community to it's local orphanages. The app works with Node.JS and React, if you would like to run it, please, follow the steps bellow
</p>
<br>

## If you want to run it:
* ## Server
  * ### Required technologies:
    * [Node.JS](https://nodejs.org/en/)
    * [Yarn](https://yarnpkg.com/getting-started/install)

  * ### To run:
    * Go to the server root folder and run "yarn", wait untill the downloads are completed;
    * Now run "yarn typeorm migration:run", this will populate the database with the necessary tables;
    * Finally, run "yarn dev:server", this will start the server;
    
* ## Web

  <p align="center">
    <img width="660" height="420" src="/web/src/images/landing-page.png">
  </p>
  
  * ### To run:
    * Go to the web root folder and run "yarn", wait untill the downloads are completed;
    * Run "yarn start", the web project will open;
    * If you want to test the web and server together, just leave the server running while using the web app;
    
* ## Mobile

  <p align="center">
    <img width="200" height="450" src="/mobile/src/images/landing-mobile.png">
  </p>

  * ### To run on your Smartphone:
    * Download the Expo App;
    * Go to the mobile root folder and run "yarn", wait untill the downloads are completed;
    * Run "yarn start", this will generate an QR Code;
    * With your smartphone, read the QR Code, that should be it;
    
  * ### To run on Android Emulator:
    * Open your Android or Iphone emulator;
    * Go to the mobile root folder and run "yarn", wait untill the downloads are completed;
    * Run "yarn start", that will open a new browser tab;
    * At this tab, select the option: "run project on emulator", that should be it;
