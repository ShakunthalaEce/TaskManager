// let mongoose = require("mongoose")

// let expenseSchema=mongoose.Schema({
//     title:{type:String},
//     amount:{type:Number},
//     date:{type:String},
// });
// module.exports=mongoose.model("expenses",expenseSchema);
const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    // required: true
  },
  description: {
    type: String,
    // required: true
  },
  createdAt: {
    type:Date,
    default: Date.now
  }
});

// const Task = mongoose.model('task', taskSchema);


// module.exports = Task;
module.exports=mongoose.model("tasks",taskSchema);
