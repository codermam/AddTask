import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import DashboardLayout from "../components/dashboard/DashboardLayout";
import StatsCard from "../components/dashboard/StatsCard";
import ActivityCard from "../components/dashboard/ActivityCard";
import TaskForm from "../components/dashboard/TaskForm";
import TaskList from "../components/dashboard/TaskList";
import RecentTasks from "../components/dashboard/RecentTasks";
import TaskFilter from "../components/dashboard/TaskFilter";

import { getActivities } from "../services/activityService";
import {
  createTask,
  getTasks,
  getStats,
  toggleTask,
  deleteTask,
  updateTask,
} from "../services/taskService";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const [stats, setStats] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [activities, setActivities] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");


  const fetchStats = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await getStats(token);
      setStats(response.data);
    } catch (error) {
      console.log(error);
    }
  };


  const fetchTasks = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await getTasks(token);
      setTasks(response.data);
    } catch (error) {
      console.log(error);
    }
  };


  const fetchActivities = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await getActivities(token);
      setActivities(response.data);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    fetchStats();
    fetchTasks();
    fetchActivities();
  }, []);


  const handleAddTask = async (title) => {
    try {
      const token = localStorage.getItem("token");

      await createTask(token, { title });

      toast.success("Task added successfully");

      fetchTasks();
      fetchStats();
      fetchActivities();

    } catch (error) {
      toast.error(
        error.response?.data?.message ||
        "Failed to add task"
      );

      console.log(error);
    }
  };


  const handleToggleTask = async (id) => {
    try {
      const token = localStorage.getItem("token");

      await toggleTask(token, id);

      fetchTasks();
      fetchStats();
      fetchActivities();

    } catch (error) {
      console.log(error);
    }
  };


  const handleDeleteTask = async (id) => {
    try {
      const token = localStorage.getItem("token");

      await deleteTask(token, id);

      toast.success("Task deleted successfully");

      fetchTasks();
      fetchStats();
      fetchActivities();

    } catch (error) {
      toast.error(
        error.response?.data?.message ||
        "Failed to delete task"
      );

      console.log(error);
    }
  };


  const handleEditTask = async (id, title) => {
    try {
      const token = localStorage.getItem("token");

      await updateTask(token, id, {
        title,
      });

      toast.success("Task updated successfully");

      fetchTasks();
      fetchStats();
      fetchActivities();

    } catch (error) {
      toast.error(
        error.response?.data?.message ||
        "Failed to update task"
      );

      console.log(error);
    }
  };


 

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());


    const matchesFilter =
      filter === "all"
        ? true
        : filter === "completed"
        ? task.completed
        : !task.completed;


    return matchesSearch && matchesFilter;
  });


  return (
    <DashboardLayout>

      <h1 className="text-4xl font-bold mb-2">
        Welcome, {user?.fullName}
      </h1>

      <p className="mb-6 text-base-content/70">
        Dashboard Overview
      </p>


      <TaskFilter
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filter={filter}
        setFilter={setFilter}
      />


      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <StatsCard
          title="Total Tasks"
          value={stats?.totalTasks || 0}
          description="All Tasks"
        />

        <StatsCard
          title="Completed Tasks"
          value={stats?.completedTasks || 0}
          description="Tasks Completed"
        />

        <StatsCard
          title="Pending Tasks"
          value={stats?.pendingTasks || 0}
          description="Tasks Remaining"
        />

      </div>


      <div className="mt-8">

        <TaskForm
          onAdd={handleAddTask}
        />


        <div className="mt-6">

          <TaskList
            tasks={filteredTasks}
            onToggle={handleToggleTask}
            onDelete={handleDeleteTask}
            onEdit={handleEditTask}
          />

        </div>

      </div>



      {/* <div className="grid lg:grid-cols-2 gap-6 mt-8">

        <ActivityCard
          activities={activities}
        />


        <RecentTasks
          tasks={tasks}
        />

      </div> */}


    </DashboardLayout>
  );
};

export default Dashboard;