import SimpleAppointmentCard from "../../SimpleAppointmentCard/SimpleAppointmentCard";
import "./UpcomingSchedule.css";

export default function UpcomingSchedule() {
  return (
    <div className="upcoming-container">
      <h3>The Upcoming Schedule</h3>

      <h5>On Thursday</h5>
      <div className="schedule-row">
        <SimpleAppointmentCard
          title="Health checkup complete"
          time="11:00 AM"
          icon="💉"
        />
        <SimpleAppointmentCard
          title="Ophthalmologist"
          time="14:00 PM"
          icon="👁️"
        />
      </div>

      <h5>On Saturday</h5>
      <div className="schedule-row">
        <SimpleAppointmentCard title="Cardiologist" time="12:00 AM" icon="❤️" />
        <SimpleAppointmentCard title="Neurologist" time="16:00 PM" icon="🧑‍⚕️" />
      </div>
    </div>
  );
}
