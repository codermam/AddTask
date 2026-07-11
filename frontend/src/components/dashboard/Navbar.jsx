const Navbar = ({ onLogout }) => {
  return (
    <div className="navbar bg-base-100 shadow-lg">
      <div className="flex-1">
        <h1 className="text-2xl font-bold px-4">
          My Dashboard
        </h1>
      </div>

      <div className="flex-none px-4">
        <button
          onClick={onLogout}
          className="btn btn-error"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;