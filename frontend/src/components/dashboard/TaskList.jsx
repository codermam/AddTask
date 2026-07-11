import { useState } from "react";
import {
  CheckCircle,
  Circle,
  Pencil,
  Trash2,
  Save,
  X,
} from "lucide-react";


const TaskList = ({
  tasks,
  onToggle,
  onDelete,
  onEdit,
}) => {

  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState("");


  const handleEditClick = (task) => {
    setEditId(task._id);
    setEditTitle(task.title);
  };


  const handleSave = (id) => {
    if (!editTitle.trim()) return;

    onEdit(id, editTitle);

    setEditId(null);
    setEditTitle("");
  };


  const handleCancel = () => {
    setEditId(null);
    setEditTitle("");
  };


  return (
    <div className="space-y-4">

      {tasks.length === 0 ? (

        <div className="bg-base-100 rounded-2xl shadow p-10 text-center">
          <h3 className="text-lg font-semibold">
            No Tasks Found
          </h3>

          <p className="text-base-content/60 mt-2">
            Create your first task to get started.
          </p>
        </div>

      ) : (

        tasks.map((task) => (

          <div
            key={task._id}
            className={`
              flex items-center justify-between
              p-5 rounded-2xl shadow-md
              border transition-all duration-300
              hover:shadow-xl
              ${
                task.completed
                  ? "bg-green-50 border-green-200"
                  : "bg-base-100 border-base-200"
              }
            `}
          >

            <div className="flex items-center gap-4 flex-1">


              {task.completed ? (

                <CheckCircle
                  size={32}
                  className="text-green-500 shrink-0"
                />

              ) : (

                <Circle
                  size={32}
                  className="text-gray-400 shrink-0"
                />

              )}



              <div className="flex-1">


                {editId === task._id ? (

                  <input
                    value={editTitle}
                    onChange={(e) =>
                      setEditTitle(e.target.value)
                    }
                    className="
                      input input-bordered
                      w-full max-w-md
                    "
                  />

                ) : (

                  <h3
                    className={`
                      text-lg font-bold
                      ${
                        task.completed
                          ? "line-through text-gray-400"
                          : "text-base-content"
                      }
                    `}
                  >
                    {task.title}
                  </h3>

                )}



                <span
                  className={`
                    text-sm font-medium
                    ${
                      task.completed
                        ? "text-green-600"
                        : "text-orange-500"
                    }
                  `}
                >
                  {task.completed
                    ? "Completed"
                    : "Pending"}
                </span>


              </div>

            </div>



            <div className="flex items-center gap-2 ml-4">


              {editId === task._id ? (

                <>

                  <button
                    onClick={() =>
                      handleSave(task._id)
                    }
                    className="
                      btn btn-success btn-sm
                      rounded-full
                    "
                  >
                    <Save size={16} />
                    Save
                  </button>


                  <button
                    onClick={handleCancel}
                    className="
                      btn btn-ghost btn-sm
                      rounded-full
                    "
                  >
                    <X size={16} />
                    Cancel
                  </button>

                </>

              ) : (

                <>

                  <button
                    onClick={() =>
                      onToggle(task._id)
                    }
                    className={`
                      btn btn-sm rounded-full
                      px-5 text-white
                      ${
                        task.completed
                          ? "bg-yellow-500 hover:bg-yellow-600"
                          : "bg-green-500 hover:bg-green-600"
                      }
                    `}
                  >
                    {task.completed
                      ? "Undo"
                      : "Complete"}
                  </button>



                  <button
                    onClick={() =>
                      handleEditClick(task)
                    }
                    className="
                      btn btn-info btn-sm
                      rounded-full
                    "
                  >
                    <Pencil size={16} />
                    Edit
                  </button>



                  <button
                    onClick={() =>
                      onDelete(task._id)
                    }
                    className="
                      btn btn-error btn-sm
                      rounded-full
                    "
                  >
                    <Trash2 size={16} />
                    Delete
                  </button>

                </>

              )}

            </div>


          </div>

        ))

      )}

    </div>
  );
};


export default TaskList;