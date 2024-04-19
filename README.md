## DEPENDENCIES

Node.js version: v20.5.0

npm version: 9.8.0

yarn version: 1.22.19

Ruby version: ruby 3.0.6p216 (2023-03-30 revision 23a532679b) [x86_64-darwin22]

Rails version: Rails 7.0.8.1

PostgreSQL version: postgres (PostgreSQL) 15.3 (Homebrew)

## INITIALIZING SERVER

Clone the project into a new directory:
`git clone https://github.com/TGYK-1117/sApp`

In the /sApp directory, begin by first running 
`bundle install`

Precompile static assets and run yarn:
```
rails assets:precompile
yarn
```
Generate database and schema: 
```
bin/rails db:create
bin/rails db:schema:load
```
Seed the database with cats:
```
bin/rails db:seed
```

Finally, run the server:
```
rails s
```

This will run on port 3000 by default so visit the app by going to `localhost:3000`

## USING THE APP
After landing at `localhost:3000`, you can click "View Cats" to view a seeded list of 5 cats pulled from thecatapi.com, stored in your local database.

On `localhost:3000/cats` you'll see the 5 saved cats, a button that returns you 
to the landing page, a button to generate a new cat, and buttons that allow you 
to view each saved cat individually

Viewing an individual cat will take you to a new page that gives you a fact about the 
cat's breed.

Generating a new cat will take you to a page similar to viewing an individual cat, but 
the cat you view is freshly pulled from thecatapi.com 