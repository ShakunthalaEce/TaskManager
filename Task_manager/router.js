const express = require('express');
const router = express.Router();
const Task = require("./models/task");

//Get all tasks
// router.get('/tasks', async (req, res) => {
//   try {
//     const tasks = await Task.find();
//     res.json(tasks);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// Create a new task
// router.post('/tasks', async (req, res) => {
//   const task = new Task({
//     title: req.body.title,
//     description: req.body.description,
//   });

//   try {
//     const newTask = await task.save();
//     res.status(201).send("New Task created");
//   } catch (err) {
//     res.status(400).send("Cannot create new task");
//   }
// });

// Get a single task
// router.get('/tasks/:id', getTask, (req, res) => {
//   res.json(res.task);
// });

// Update a task
// router.patch('/tasks/:id', getTask, async (req, res) => {
//   if (req.body.title != null) {
//     res.task.title = req.body.title;
//   }

//   if (req.body.description != null) {
//     res.task.description = req.body.description;
//   }

//   try {
//     const updatedTask = await res.task.save();
//     res.json(updatedTask);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// Delete a task
//  router.delete('/tasks/:id', getTask, async (req, res) => {
//    try {
//      // await res.task.remove();
//     await res.task.deleteOne();
//     res.json({ message: 'Task deleted' });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // Middleware function to get a task by ID
// async function getTask(req, res, next) {
//   let task;
//   try {
//     task = await Task.findById(req.params.id);
//     if (task == null) {
//       return res.status(404).json({ message: 'Task not found' });
//     }
//   } catch (err) {
//     return res.status(500).json({ message: err.message });
//   }

//   res.task = task;
//   next();
// }
// module.exports = router;

router.post("/task/create",createTask);
router.get("/task/get");
router.patch("/task/edit/:id");
router.delete("task/delete/:id");

async function createTask(req,res){
    let body=req.body;
    console.log(body)
    let newTask=new Task({
        id: body.id,
        title:body.title,
        description:body.description,
        date:body.date,
    });
   await newTask.save();
   return res.status(201).send("Task created");
}

router.delete('/tasks/:id', getTask, async (req, res) => {
  try {
   await res.task.remove();
  await res.task.deleteOne();
   res.json({ message: 'Task deleted' });
 } catch (err) {
    res.status(500).json({ message: err.message });
 }
});
 async function getTask(req, res, next) {
    let task;
    try {
       task = await Task.findById(req.params.id);
       if (task == null) {
        return res.status(404).json({ message: 'Task not found' });
      }
    } catch (err) {
      return res.status(500).json({ message: err.message });
     }
  
     res.task = task;
     next();
    }

module.exports=router;
