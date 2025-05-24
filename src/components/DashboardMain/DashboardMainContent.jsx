import DashboardOverview from "./DashboardOverview/DashboardOverview";
import CalendarView from "./CalendarView/CalendarView";
import UpcomingSchedule from "./UpcomingSchedule/UpcomingSchedule";
import ActivityFeed from "./ActivityFeed/ActivityFeed";
import "./DashboardMainContent.css";

export default function DashboardMainContent() {
  return (
    <div className="dashboard-main-content">
      <div className="left-panel">
        <DashboardOverview />
        <div className="act-panel">
          <ActivityFeed />
        </div>
      </div>
      <div className="right-panel">
        <CalendarView />
        <UpcomingSchedule />
      </div>
    </div>
  );
}
