import "./CalendarView.css";

// Main component that renders the calendar view
export default function CalendarView() {
  // appointments mapped by date
  const appointments = {
    4: ["09:00"],
    7: ["11:00"],
    12: ["13:00"],
    16: ["15:00"],
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <h3>October 2021</h3>
        <div className="calendar-actions">
          <div className="arrow-btns">
            <span>&lt;</span> {/* Left arrow */}
            <span>&gt;</span> {/* Left arrow  */}
          </div>
        </div>
      </div>

      {/* Calendar grid layout */}
      <div className="calendar-grid">
        {["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"].map(
          (day, index) => (
            <div className="day-header" key={index}>
              {day}
            </div>
          )
        )}

        {/* Render calendar dates from 25 to 31 with hardcoded time slots */}
        {["25", "26", "27", "28", "29", "30", "31"].map((date, index) => (
          <div
            className={`calendar-date ${date === "26" ? "active-date" : ""}`}
            key={index}
          >
            <span>{date}</span>
            <div className="times">
              {date === "25" && (
                <div>
                  <span className="time-slot">10:00</span>
                  <span className="time-slot">11:00</span>
                  <span className="time-slot">12:00</span>
                </div>
              )}
              {date === "26" && (
                <div>
                  <span className="time-slot">08:00</span>
                  <span className="time-slot active">09:00</span>
                  <span className="time-slot">10:00</span>
                </div>
              )}
              {date === "27" && (
                <div>
                  <span className="time-slot">12:00</span>
                  <span className="time-slot">----</span>
                  <span className="time-slot">13:00</span>
                </div>
              )}
              {date === "28" && (
                <div>
                  <span className="time-slot">10:00</span>
                  <span className="time-slot active1">11:00</span>
                  <span className="time-slot">----</span>
                </div>
              )}
              {date === "29" && (
                <div>
                  <span className="time-slot">----</span>
                  <span className="time-slot">14:00</span>
                  <span className="time-slot">16:00</span>
                </div>
              )}
              {date === "30" && (
                <div>
                  <span className="time-slot active1">12:00</span>
                  <span className="time-slot">14:00</span>
                  <span className="time-slot">15:00</span>
                </div>
              )}
              {date === "31" && (
                <div>
                  <span className="time-slot active1">09:00</span>
                  <span className="time-slot">10:00</span>
                  <span className="time-slot">11:00</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="appointments">
        <div className="appointment-card dentist">
          <div className="appointment">
            <h4>
              Dentist <span>🦷</span>
            </h4>
            <p>09:00-11:00</p>
            <p>Dr. Cameron Williamson</p>
          </div>
        </div>
        <div className="appointment-card1 physio">
          <div className="appointment">
            <h4>
              Physiotherapy Appointment <span>💪</span>
            </h4>
            <p>11:00-12:00</p>
            <p>Dr. Kevin Djones</p>
          </div>
        </div>
      </div>
    </div>
  );
}
