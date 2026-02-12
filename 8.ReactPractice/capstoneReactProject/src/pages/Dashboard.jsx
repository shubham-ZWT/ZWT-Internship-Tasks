import { useEffect, useState, useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import DepartmentCard from "../components/departments/DepartmentCard";
import { IoFolderOpen, IoBriefcase } from "react-icons/io5";
import dashboardService from "../services/dashboard";
import { List } from "react-window";

export default function Dashboard() {
  const [dashData, setDashData] = useState([]);
  const { isAuthenticated, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      navigate("/login");
      return;
    }

    const fetchDashboardData = async () => {
      try {
        const response = await dashboardService.getDashboardData();
        setDashData(response.data || []);
      } catch (error) {
        console.error("Failed to fetch dashboard:", error);
      }
    };

    if (isAuthenticated) {
      fetchDashboardData();
    }
  }, [isAuthenticated, loading, navigate]);

  const { Total_Departments = 0, Total_Employees = 0 } = dashData[0] || {};

  if (loading) return <div>Loading...</div>;
  if (!isAuthenticated) return null;

  
  const ProjectRow = ({ index, style }) => {
    const project = dashData[index];
    if (!project) return null;

    return (
      <div style={style} className="px-2 text-app-text bg-app-bg">
        <div className="flex items-center justify-between p-4 bg-white dark:bg-black/40 border border-gray-200 rounded-lg shadow-sm hover:border-amber-500 transition-colors">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-100 text-amber-600 rounded-full">
              <IoBriefcase size={20} />
            </div>
            <div>
              <p className="font-bold text-gray-800 dark:text-app-text">{project.project_name}</p>
              <p className="text-xs text-gray-500">
                Ends:{" "}
                {project.end_date
                  ? new Date(project.end_date).toLocaleDateString()
                  : "N/A"}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col p-4 bg-app-bg text-app-text h-screen">
      <h1 className="text-4xl font-bold tracking-tighter">Dashboard</h1>

      <div className="flex flex-row pt-6 gap-6">
    
        <div className="flex flex-col gap-4">
          <DepartmentCard
            name="Total Departments"
            count={Total_Departments}
            icon={<IoFolderOpen />}
          />
          <DepartmentCard
            name="Total Employees"
            count={Total_Employees}
            icon={<IoFolderOpen />}
          />
        </div>

       
        <div className="flex flex-col flex-1">
          <h2 className="text-2xl tracking-tighter mb-4">Project Summary</h2>

          {dashData.length > 0 ? (
            <List
              rowComponent={ProjectRow}
              rowCount={dashData.length}
              rowHeight={80}
              rowProps={{ dashData }}
              height={600}
              width="100%"
            >
              {ProjectRow}
            </List>
          ) : (
            <p className="text-gray-400">No Projects Found</p>
          )}
        </div>
      </div>
    </div>
  );
}
