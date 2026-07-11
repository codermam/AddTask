const ProfileCard = ({ user }) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">
          User Profile
        </h2>

        <p>
          <strong>Name:</strong>{" "}
          {user?.fullName}
        </p>

        <p>
          <strong>Email:</strong>{" "}
          {user?.email}
        </p>

        <p>
          <strong>Status:</strong> Active
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;