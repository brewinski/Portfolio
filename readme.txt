1. To run this site you need to make sure the mongo DB windows service is running.
    To view mongo DB data go to the "c:\MongoDB\bin" directory and type "mongo"

2. To start the node API go to the project folder "c:\Projects\newmoonMEAN" and use the command "npm start"

to start the angular CLI go the the angular source folder "C:\Projects\newmoonMEAN\angular-newmoon" and use the command "ng serve"

3. Pushing to production (heroku)
    in the "C:\Projects\newmoonMEAN" folder run the "git add ." command to add all files to the checkin
    then in the same folder run "git commit -am 'Db Changes'" to commit the changes.
    push the updates the heroku with "git push heroku master"
    
