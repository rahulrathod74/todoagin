## Express Todo CRUD
## Overview

In this particular problem statement, you have to create basic APIs for a Todo Application, Your APIs should be able to perform CRUD oprations on the `todo` data. Create a `db.json` file and add radom todos as per your creativity. consider this as your database.

## Detailed Explanation

### Topics

- HTTP Methods.
- Express.
- File System Module.
- CRUD Operations.
- Using External Modules.
- Nodemon.

### Setup Guidelines and Instructions

- The code should be written in Node.js.
- Add comments throughout your code to explain the logic behind each step.
- Initialize a new `node` project.
- Install `express` to manage APIs.
- `nodemon` should be used to run the server.
- Write the `nodemon` script to handle the server running process.

### Problem Statement

- Create a file `db.json` and add `todos` data as per your creativity but follow the following structure.
```jsx
  {
    "todos" : [
      {},
      {},
      {},
    ]
  }
```
- An API to get all the `todos` present in the database.
- An API to add a new `todo` in the database.
- An API to update the status of all the `todos` that have `even` ID from `false` to `true`. This will work only if the todo with even ID has a status as false.
- An API to Delete all the todos whose `status` is `true`.

## Submission Guidelines

- Commit your code regularly to the Masai Repo
- Submit the github Link for the assignment.

---