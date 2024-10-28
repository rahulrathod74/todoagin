// - Create a file `db.json` and add `todos` data as per your creativity but follow the following structure.
// ```jsx
//   {
//     "todos" : [
//       {},
//       {},
//       {},
//     ]
//   }
// ```
// - An API to get all the `todos` present in the database. [x]
// - An API to add a new `todo` in the database. [x]
// - [x] An API to update the status of all the `todos` that have `even` ID from `false` to `true`. This will work only if the todo with even ID has a status as false.
// // - An API to Delete all the todos whose `status` is `true`. [x]
const express = require("express");
const fs = require("fs");

const app = express();

const dbFilePath = "./db.json";

app.use(express.json())

const readDatabase = () => {
  // Reads data synchronously
  const data = fs.readFileSync(dbFilePath, "utf-8");
  return JSON.parse(data);
};

const writeDatabase = (data) => {
  // Write in the syncronously
  fs.writeFileSync(dbFilePath, JSON.stringify(data, null, 2));
};

app.post("/todo", (req, res) => {
    // console.log(typeof req)
    // console.log(req.params)
    // console.log(req.param)
    // for(let k in req){
    //     console.log(k)
    // }
  console.log(req.body);
  try {
    const { task, status } = req.body;

    if (!task || typeof status != "boolean") {
      return res.status(400).json({ message: "Invalid Input" });
    }

    // All data are valid, proceed with the function
    const data = readDatabase();
    // Generate the new ID based on the last id in the array
    const newId = data.todos.length
      ? data.todos[data.todos.length - 1].id + 1
      : 1;
    // Create the task object
    const newTodo = { id: newId, task, status };
    // Update the task array
    data.todos.push(newTodo);
    // Write to the db.json file with updated task array
    writeDatabase(data);

    res.status(200).json(newTodo);
  } catch (e) {
    res.status(500).json({ message: `Internal Server error ${e}` });
  }
});

app.get("/todo", (req, res) => {
  const data = readDatabase();
  res.status(200).json(data.todos);
});

// If id is even and status is false, then make status true
app.put("/todo/even", (req, res) => {
  const data = readDatabase();
  let updatedTodo = data.todos.map((todo) => {
    if (todo.id % 2 == 0 && !todo.status) {
      todo.status = true;
    }
    return todo;
  });
  data.todos = updatedTodo;
  writeDatabase(data);
  res.status(200).json({ message: "Data Updated successfully" });
});

app.delete("/todo", (req, res) => {
  const data = readDatabase();

  data.todos = data.todos.filter((todo) => {
    return !todo.status;
  });

  writeDatabase(data);

  res.status(200).json({ message: "Data deleted successfully" });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
