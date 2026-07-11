import { useEffect, useState } from "react";
import DashboardLayout from "../components/dashboard/DashboardLayout";
import { getStats } from "../services/taskService";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

const Analytics = () => {
  const [stats, setStats] = useState({
    totalTasks: 0,
    completedTasks: 0,
    pendingTasks: 0,
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await getStats(token);

      setStats(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const data = {
    labels: ["Completed", "Pending"],
    datasets: [
      {
        data: [
          stats.completedTasks,
          stats.pendingTasks,
        ],
        backgroundColor: [
          "#22c55e",
          "#f97316",
        ],
      },
    ],
  };

  return (
    <DashboardLayout>
      <h1 className="text-4xl font-bold mb-6">
        Analytics
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="card bg-base-100 shadow-xl">
          <div className="card-body text-center">
            <h2 className="text-lg font-bold">
              Total Tasks
            </h2>

            <p className="text-4xl font-bold text-primary">
              {stats.totalTasks}
            </p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <div className="card-body text-center">
            <h2 className="text-lg font-bold">
              Completed
            </h2>

            <p className="text-4xl font-bold text-success">
              {stats.completedTasks}
            </p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <div className="card-body text-center">
            <h2 className="text-lg font-bold">
              Pending
            </h2>

            <p className="text-4xl font-bold text-warning">
              {stats.pendingTasks}
            </p>
          </div>
        </div>

      </div>

      <div className="mt-10 bg-base-100 p-6 rounded-xl shadow-xl max-w-md mx-auto">

        <h2 className="text-2xl font-bold text-center mb-6">
          Task Progress
        </h2>

        <Doughnut data={data} />

      </div>

    </DashboardLayout>
  );
};

export default Analytics;