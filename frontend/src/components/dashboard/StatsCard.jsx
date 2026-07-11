const StatsCard = ({ title, value, description }) => {
  return (
    <div className="card bg-base-100 shadow-xl rounded-2xl">
      <div className="card-body">

        <h2 className="card-title">
          {title}
        </h2>

        <p className="text-4xl font-bold text-primary">
          {value}
        </p>

        <p className="text-sm text-base-content/60">
          {description}
        </p>

      </div>
    </div>
  );
};

export default StatsCard;