import anatomy from "../../../../assets/anatomy.png";
import { FaSearchPlus } from "react-icons/fa"; // Importing the icon from Font Awesome
import "./AnatomySection.css";

export default function AnatomySection() {
  return (
    <div className="anatomy-container">
      <h2>Dashboard</h2>
      <div className="anatomy-body">
        <div className="zoomplus">
          <FaSearchPlus />
        </div>
        <div className="anatomy-image-wrapper">
          <img src={anatomy} alt="Anatomy" className="anatomy-img" />
          <button className="healthy-btn heart">❤️ Healthy Heart</button>
          <button className="healthy-btn leg">💙 Healthy Leg</button>
        </div>
      </div>
    </div>
  );
}
