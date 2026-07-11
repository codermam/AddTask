import { Link } from "react-router-dom";
import RecentTasks from "./RecentTasks";
import ActivityCard from "./ActivityCard";


const Sidebar = ({
  tasks=[],
  activities=[]
}) => {


return (

<aside
className="
w-80
min-h-screen
bg-base-100
shadow-xl
hidden
md:flex
flex-col
"
>


<ul
className="
menu
p-4
text-lg
"
>


<li>
<Link to="/dashboard">
📊 Dashboard
</Link>
</li>


<li>
<Link to="/profile">
👤 Profile
</Link>
</li>


<li>
<Link to="/analytics">
📈 Analytics
</Link>
</li>


<li>
<a>
💬 Messages
</a>
</li>


<li>
<a>
⚙️ Settings
</a>
</li>


</ul>



<div className="
divider
px-4
">
Overview
</div>



<div
className="
px-4
space-y-5
overflow-hidden
"
>


<ActivityCard
activities={activities}
/>


<RecentTasks
tasks={tasks}
/>



</div>


</aside>


);

};


export default Sidebar;