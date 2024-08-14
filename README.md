# Task Management System API

This is a RESTful API for managing tasks, including user registration, authentication, and task assignment.

## Prerequisites

- Node.js (v14.x or later)
- npm (v6.x or later)
- MongoDB (local instance or cloud-based like MongoDB Atlas)
- Git

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. Install the dependencies
   npm install

3. Create a .env file in the root directory with the following environment variables:
   MONGODB_URI=your-mongodb-url
   JWT_SECRET=your-jwt-secret

4. Run the project
   npm start
5. Connecting to database involves the use of mongodb compass where you can create your database and use that data base URL inside the .env file along with your own jwt secret I have used MongoDB as a database and ODM is mongoose.
6. http://localhost:3200/api/user/signup provide the paramenters inside the req.body for signing up
7. http://localhost:3200/api/user/signin provides the jwt token use that inside every task route's headers key authorization's value
8. http://localhost:3200/api/tasks/createtask provide the task inside the req.body and provide authorization header's value as the token that we recieved previously
9. http://localhost:3200/api/tasks/gettasks provides the tasks associated to that user Id of the logged in user also we can provide the query parameters here for status,priority etc for each of task schema's properties
10. http://localhost:3200/api/tasks/updatetasks updates the tasks provided the updated task inside req.body and the id of that task in the query parameters
11. http://localhost:3200/api/tasks/deletetask for deleting a specific task provided the id of that task in the query parameters
