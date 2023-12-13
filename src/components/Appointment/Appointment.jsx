import "./Appointment.css";
import config from "../../config";

const { locationOptions } = config;

function Appointment({
  appointment,
  appointmentIndex,
  appointmentList,
  setAppointmentList,
}) {
  const handleUpdatingAppointment = (updatedAppointment) => {
    const updatedAppointmentList = [...appointmentList];
    updatedAppointmentList[appointmentIndex] = updatedAppointment;
    setAppointmentList(updatedAppointmentList);
  };

  const handleDelete = () => {
    const updatedAppointmentList = [...appointmentList];
    updatedAppointmentList.splice(appointmentIndex, 1);
    setAppointmentList(updatedAppointmentList);
  };

  return (
    <div className="appointment-wrapper">
      {/* Date */}
      <input
        className="input"
        type="date"
        value={appointment.date}
        onChange={(e) =>
          handleUpdatingAppointment({ ...appointment, date: e.target.value })
        }
      />
      {/* Time */}
      <input
        className="input"
        type="time"
        value={appointment.time}
        onChange={(e) =>
          handleUpdatingAppointment({ ...appointment, time: e.target.value })
        }
      />
      {/* Location */}
      <select
        className="select"
        value={appointment.location}
        onChange={(e) =>
          handleUpdatingAppointment({
            ...appointment,
            location: e.target.value,
          })
        }
      >
        {locationOptions.map((location) => (
          <option key={location} value={location}>
            {location}
          </option>
        ))}
      </select>
      {/* Description */}
      <input
        className="input"
        type="text"
        value={appointment.description}
        placeholder="description"
        onChange={(e) =>
          handleUpdatingAppointment({
            ...appointment,
            description: e.target.value,
          })
        }
      />
      <button className="delete-button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}

export default Appointment;
