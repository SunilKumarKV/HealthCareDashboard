import "./ActivityFeed.css";

export default function ActivityFeed() {
  return (
    <div className="activity-container">
      <div className="activity-header">
        <h3>Activity</h3>
        <p>3 appointment on this week</p>
      </div>
      {/* For Activity create a Graph */}
      <div className="activity-graph">
        {["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"].map(
          (day, idx) => (
            <div key={idx} className="bar-group">
              <div
                className="bar bar-primary"
                style={{ height: `${20 + idx * 10}px` }}
              ></div>
              <div
                className="bar bar-secondary"
                style={{ height: `${15 + idx * 5}px` }}
              ></div>
              <span className="day-label">{day}</span>
            </div>
          )
        )}
      </div>
    </div>
  );
}
