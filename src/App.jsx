import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import DashboardMainContent from "./components/DashboardMain/DashboardMainContent";
import "./styles/App.css";

export default function App() {
  return (
    <div className="root">
      <div className="container">
        <div className="dashboard-container">
          <div className="app-container">
            <Sidebar />
            <div className="main-content">
              <Header />
              <DashboardMainContent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
