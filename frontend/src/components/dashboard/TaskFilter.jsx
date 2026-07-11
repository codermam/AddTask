const TaskFilter = ({
  searchTerm,
  setSearchTerm,
  filter,
  setFilter,
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mt-6 mb-6">
      <input
        type="text"
        placeholder="Search tasks..."
        className="input input-bordered w-full"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <select
        className="select select-bordered w-full md:w-52"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="all">All Tasks</option>
        <option value="completed">Completed</option>
        <option value="pending">Pending</option>
      </select>
    </div>
  );
};

export default TaskFilter;