# Welcome to "The Celebrity Friend_Finder"

Find a celebrity friend that likes what you like:
  Provide your responses to 10 questions that tell us a little about yourself.  Then the App will do the rest.

Once you find your new Celebrity Friend, the App will then store your profile into the database to be matched up with new friends after you.

## About the App
 * The Directory structure is as follows:

 * FriendFinder  (Github directory)
    - .gitignore  (Used to prevent node modules from being pushed into the Github)
    - app  (Root Directory)
      - data  (Stores the "FriendsData" array)
        - friends.js
      - public  (Houses the "html" files for the browser)
        - home.html
        - survey.html
      - routing  (Where our "routes" reside)
        - apiRoutes.js  
        - htmlRoutes.js
    - node_modules
    - package.json
    - server.js  (Our "Express Server" is started, and runs here)

## Built with
 * HTML and CSS
   - using Bootstrap package for CSS frame and styling
 * JQuery
 * Express framework
 * NPM installed packages:
   * JSON for text handling
   * Body-Parsing for data handling
* Deployed to Heroku under https://git.heroku.com/limitless-oasis-00079.git
* Deployed to my personal gitHub https://github.com/mj777n/Friend_Finder

## Functionality

