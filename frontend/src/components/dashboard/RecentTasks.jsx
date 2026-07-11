const RecentTasks = ({
tasks=[]
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
"
>
✅ Recent Tasks
</h2>



{
tasks.length===0 ? (

<p className="text-sm opacity-60">
No tasks yet
</p>

)

:

(

<div className="
space-y-3
max-h-72
overflow-y-auto
pr-1
">


{
tasks.slice(0,4).map(task=>(


<div
key={task._id}
className="
flex
justify-between
items-center
bg-base-100
rounded-xl
p-3
shadow-sm
"
>


<span
className={
task.completed
?
"line-through opacity-50 text-sm"
:
"text-sm font-medium"
}
>
{task.title}
</span>



<span
className={`
badge
text-xs
${task.completed
?
"badge-success"
:
"badge-warning"
}
`}
>

{
task.completed
?
"Done"
:
"Pending"
}

</span>



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


export default RecentTasks;