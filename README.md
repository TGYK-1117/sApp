Node.js version: v20.5.0
npm version: 9.8.0
yarn version: 1.22.19
Ruby version: ruby 3.0.6p216 (2023-03-30 revision 23a532679b) [x86_64-darwin22]
Rails version: Rails 7.0.8.1
PostgreSQL version: postgres (PostgreSQL) 15.3 (Homebrew)

--------------------------INITIALIZING SERVER-------------------------------

----in a new directory clone the react-branch of the remote repo

git clone -b react-branch https://github.com/TGYK-1117/sApp

----in the /sApp directory, run yarn

yarn

----generate database table 

bin/rails db:schema:load

----seed the database 

bin/rails db:seeds

----run the server

rails s

----in browser, connect to:

localhost:3000

-------------------------USING APP-------------------------------

after landing at localhost:3000, you can click "View Cats" 
to view a seeded list of 5 cats pulled from thecatapi.com, stored in your 
local database

on localhost:3000/cats youll see the 5 saved cats, a button that returns you 
to the landing page, a button to generate a new cat, and buttons that allow you 
to view each saved cat individually

viewing an individual cat will take you to a new page that gives you a fact about the 
cat's breed

generating a new cat will take you to a page similar to viewing an individual cat, but 
the cat you view is freshly pulled from thecatapi.com 






