import "./HealthStatusCards.css";

// Functional component for displaying health status cards
export default function HealthStatusCards() {
  const statuses = [
    // Array of health statuses
    { title: "Lungs", date: "26 Oct 2021", progress: 30, icon: "🫁" },
    { title: "Teeth", date: "26 Oct 2021", progress: 80, icon: "🦷" },
    { title: "Bone", date: "26 Oct 2021", progress: 40, icon: "🦴" },
  ];

  return (
    <div className="status-cards">
      <p className="text">This Week</p>
      {/* Render a card for each health status */}
      {statuses.map((item, index) => (
        <div className="status-card1">
          <div key={index} className="status-card">
            <div className="card-title">
              {item.icon} {item.title}
            </div>
            <p className="date">Date: {item.date}</p>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{
                  //setting width and color
                  width: `${item.progress}%`,
                  backgroundColor:
                    item.progress < 40
                      ? "red"
                      : item.progress < 70
                      ? "orange"
                      : "green",
                }}
              ></div>
            </div>
          </div>
        </div>
      ))}
      <p className="text">Details</p>
    </div>
  );
}
