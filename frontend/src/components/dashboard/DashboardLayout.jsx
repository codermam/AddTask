import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { getTasks } from "../../services/taskService";
import { getActivities } from "../../services/activityService";


const DashboardLayout = ({ children }) => {

  const [tasks, setTasks] = useState([]);
  const [activities, setActivities] = useState([]);


  const fetchSidebarData = async () => {

    try {

      const token = localStorage.getItem("token");


      const taskResponse = await getTasks(token);
      const activityResponse = await getActivities(token);


      setTasks(taskResponse.data);
      setActivities(activityResponse.data);


    } catch(error){

      console.log(error);

    }

  };



  useEffect(()=>{

    fetchSidebarData();

  },[]);



  return (

    <div className="
      flex
      min-h-screen
      bg-base-200
    ">


      <Sidebar
        tasks={tasks}
        activities={activities}
      />



      <main
        className="
          flex-1
          p-6
        "
      >

        {children}

      </main>


    </div>

  );
};


export default DashboardLayout;