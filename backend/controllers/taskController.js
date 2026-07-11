import Task from "../models/Task.js";
import logActivity from "../utils/logActivity.js";


// UPDATE TASK
export const updateTask = async (req, res) => {
  try {
    const task = await Task.findOneAndUpdate(
      {
        _id: req.params.id,
        user: req.user.id,
      },
      {
        title: req.body.title,
      },
      {
        new: true,
      }
    );

    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }


    await logActivity(
      req.user.id,
      "UPDATE_TASK",
      `Updated task "${task.title}"`
    );


    res.json(task);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};



// DELETE TASK
export const deleteTask = async (req, res) => {
  try {

    const task = await Task.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id,
    });


    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }


    await logActivity(
      req.user.id,
      "DELETE_TASK",
      `Deleted task "${task.title}"`
    );


    res.json({
      message: "Task deleted",
    });


  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};




// COMPLETE / UNCOMPLETE TASK
export const toggleTask = async (req, res) => {
  try {

    const task = await Task.findOne({
      _id: req.params.id,
      user: req.user.id,
    });


    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }


    task.completed = !task.completed;


    await task.save();



    await logActivity(
      req.user.id,
      task.completed
        ? "COMPLETE_TASK"
        : "PENDING_TASK",
      task.completed
        ? `Completed task "${task.title}"`
        : `Marked "${task.title}" as pending`
    );



    res.json(task);


  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};




// CREATE TASK
export const createTask = async (req, res) => {
  try {

    const { title } = req.body;


    const task = await Task.create({
      title,
      user: req.user.id,
    });



    await logActivity(
      req.user.id,
      "CREATE_TASK",
      `Created task "${task.title}"`
    );



    res.status(201).json(task);


  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};




// GET ALL TASKS
export const getTasks = async (req, res) => {
  try {

    const tasks = await Task.find({
      user: req.user.id,
    });


    res.json(tasks);


  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};




// DASHBOARD STATS
export const getDashboardStats = async (req, res) => {
  try {


    const totalTasks =
      await Task.countDocuments({
        user: req.user.id,
      });


    const completedTasks =
      await Task.countDocuments({
        user: req.user.id,
        completed: true,
      });


    const pendingTasks =
      await Task.countDocuments({
        user: req.user.id,
        completed: false,
      });



    res.json({
      totalTasks,
      completedTasks,
      pendingTasks,
    });


  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};