import { formatDistanceToNow } from "date-fns";


const ActivityCard = ({
  activities=[]
}) => {


return (

<div
className="
card
bg-base-200
shadow-md
rounded-2xl
"
>


<div className="card-body p-4">


<h2
className="
font-bold
text-lg
flex
items-center
gap-2
"
>
⚡ Recent Activity
</h2>



{
activities.length === 0 ? (

<p className="text-sm opacity-60">
No activity yet
</p>


) : (


<div className="space-y-3">


{
activities.slice(0,4).map((activity)=>(


<div
key={activity._id}
className="
bg-base-100
rounded-xl
p-3
shadow-sm
"
>


<p className="
text-sm
font-medium
">
{activity.message}
</p>


<p
className="
text-xs
opacity-60
mt-1
"
>

{
formatDistanceToNow(
new Date(activity.createdAt),
{
addSuffix:true
}
)
}

</p>


</div>


))
}


</div>


)


}


</div>


</div>

)

};


export default ActivityCard;