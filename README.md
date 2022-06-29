# GetOut API

## Tools/Technologies Used
* [Node Js](https://nodejs.org/en/)
* [Express Js](https://www.npmjs.com/package/express)
* [Mongo DB](https://www.mongodb.com/)
* [Axios](https://www.npmjs.com/package/axios)

### How to Setup
1. run npm install to set up the dependencies.
2. Provide the MongoDB connection string url in ./config/mongoose.js in place of <b>MONGO_DB_CONNECTION_STRING_URL</b> as it requires a mongo db database
3. run <b><i>npm start</i></b> to start the application.

### Endpoints Available
1. GET localhost:8000 ---> to check if application is up
2. GET localhost:8000/api ---> to check if api server is up (optional)
3. GET localhost:8000/api/album/loadData ---> to load the JSON data from the link to the database for ease of use.
4. GET localhost:8000/api/album/getAlbums
   * localhost:8000/api/album/getAlbums?page=PAGE_NUMBER ---> to get list of albums on a specific page
   * localhost:8000/api/album/getAlbums?order=ORDER ---> to get list of albums on a latest by date (ORDER can be newToOld/oldToNew)
   * localhost:8000/api/album/getAlbums?order=ORDER&page=PAGE_NUMBER ---> to get list of albums on a specific page by specific order(ORDER can be newToOld/oldToNew)
5. GET localhost:8000/api/album/searchByName?name=NAME ---> to get list of albums by matching name
6. GET localhost:8000/api/album/searchByArtist?artist=ARTIST_NAME ---> to get list of albums by matching artist name
7. GET localhost:8000/api/album/searchByCategory?category=CATEGORY ---> to get list of albums by matching category
