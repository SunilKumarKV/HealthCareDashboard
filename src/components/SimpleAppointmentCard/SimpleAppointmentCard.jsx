import "./SimpleAppointmentCard.css";

export default function SimpleAppointmentCard({ title, time, icon }) {
  return (
    <div className="simple-card">
      <h4>
        {title} {icon}
      </h4>
      <p>{time}</p>
    </div>
  );
}
