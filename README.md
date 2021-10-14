API Backend for <a href="https://github.com/bfab11/myFlix-client">myFlix React</a> and <a href="https://github.com/bfab11/myFlix-Angular-client">myFlix Angular</a>
This movie API can be used to access a list of movie details, like:

- Movie Title
- Movie Genre
- Director
- Movie Description

### Description

Movie Database based on two collections: movies and users.
movies collection contains data about the movie, movie poster, genre, and director, while
user collection contains data about user name, email, password, birthday, and favorite movies

### Tools used

- JavaScript   
- MongoDB     
- Express
- Node.js
- Morgan
- Passport
- Mongoose
- JSON Webtoken
- Heroku

### Dependencies

- express-validator
- jsonwebtoken
- lodash
- morgan
- mongoose
- passport
- passport-jwt
- passport-local
- body-parser
- cors

### User Stories (applicable for React & Angular clients)

- As a user, I want to be able to receive information on movies, directors, and genres so that I
can learn more about movies I’ve watched or am interested in.
- As a user, I want to be able to create a profile so I can save data about my favorite movies.


### API endpoints table

<table>
             <thead>
                 <tr>
                     <th>Request</th>
                     <th>URL</th>
                     <th>Method</th>
                     <th>Body data</th>
                     <th>Response</th>
                 </tr>
             </thead>
                <tr>
                    <td>Display Welcome Page to the user</td>
                    <td>/</td>
                    <td>GET</td>
                    <td>None</td>
                    <td>A text message welcoming the user</td>
                </tr>
                <tr>
                    <td>Get a list of all movies</td>
                    <td>/movies</td>
                    <td>GET</td>
                    <td>None</td>
                    <td>A JSON object containing data about all movies</td>
                </tr>
                <tr>
                    <td>Get a movie by title</td>
                    <td>/movies/:Title</td>
                    <td>GET</td>
                    <td>None</td>
                    <td>A JSON object containing data(description, genres, director, image URL) about the selected movie</td>
                </tr>
                <tr>
                    <td>Get info about a genre</td>
                    <td>/movies/genres/:Name</td>
                    <td>GET</td>
                    <td>None</td>
                    <td>A JSON object contain data about a genre</td>
                </tr>
                <tr>
                    <td>Get information about a movies director</td>
                    <td>movies/directors/:Name</td>
                    <td>GET</td>
                    <td>None</td>
                    <td>A JSON object containing data about the director (name, bio, birthyear and death year)</td>
                </tr>
                <tr>
                    <td>Register a new user</td>
                    <td>/users</td>
                    <td>POST</td>
                    <td>A JSON object holding data about the new user to register</td>
                    <td>A JSON object containing data about user that has been registered</td>
                </tr>
                <tr>
                    <td>Deregister an existing user</td>
                    <td>/users/:Username</td>
                    <td>DELETE</td>
                    <td>None</td>
                    <td>A text message indicating user was successfully removed</td>
                </tr>
                <tr>
                    <td>Update the data (username, password, birthday) of an existing user</td>
                    <td>/users/:Username</td>
                    <td>PUT</td>
                    <td>A JSON object containing the data that should be updated</td>
                    <td>A JSON object containing all the data about the updated user info</td>
                </tr>
                <tr>
                    <td>Add movie to the list of favorites</td>
                    <td>/users/:Username/favorites/:movieID</td>
                    <td>POST</td>
                    <td>None</td>
                    <td>A JSON object containing all the data about the user including the updated favoritemovies</td>
                </tr>
                <tr>
                    <td>Remove movie from the favorite list</td>
                    <td>/users/:Username/favorites/:movieID</td>
                    <td>DELETE</td>
                    <td>None</td>
                    <td>A text message indicating that a movie was successfully removed</td>
                </tr>
         </table>

### Data structure

the collections are structured in the following format

##### movies

```
            /    _id: string,                       \
            |    Title: string,                     |
            |    Description: string,               |
movies =  <      ImagePath: string                    >
            |    Director:   .Name: string,         |
            |                .Description: string,  |
            |                .Birth: number,        |
            |                .Death: number,        |
            |    Genre:      .Name: string,         |
            \                .Description: string, /
```

##### users

```
            /    _id: ObjectId,                     \
            |    Username: string,                  |
users =    <     Password: string,                   >
            |    Email: string,                     |
            |    Birth_Date: number,                |
            \    FavoriteMovies: array              /
```

