import { useState } from 'react';
import './NewAppointmentForm.css';
import config from '../../config';

const { locationOptions } = config;

const blankAppointment = {
  date: '',
  time: '',
  location: '',
  description: '',
};

function NewAppointmentForm({ appointmentList, setAppointmentList}) {
  const [newAppointment, setNewAppointment] = useState(blankAppointment);

  const handleAddingAppointment = () => {
    setAppointmentList([newAppointment, ...appointmentList]);
    setNewAppointment(blankAppointment);
  }

  return (
    <div className="new-appointment-form-wrapper">
      <h1 className="form-title">Create New Appointment</h1>
      {/* Date */}
      <input
        className="input"
        type="date"
        value={newAppointment.date}
        onChange={(e) => setNewAppointment({ ...newAppointment, date: e.target.value })}
      />
      {/* Time */}
      <input
        className="input"
        type="time"
        value={newAppointment.time}
        onChange={(e) => setNewAppointment({ ...newAppointment, time: e.target.value })}
      />
      {/* Location */}
      <select
        className="select"
        value={newAppointment.location}
        onChange={(e) => setNewAppointment({ ...newAppointment, location: e.target.value })}
      >
        {locationOptions.map((location) => (
          <option key={location} value={location}>{location}</option>
        ))}
      </select>
      {/* Description */}
      <input
        className="input"
        type="text"
        value={newAppointment.description}
        placeholder="description"
        onChange={(e) => setNewAppointment({ ...newAppointment, description: e.target.value })}
      />
      <button className="add-button" onClick={handleAddingAppointment}>Add</button>
    </div>
  );
}

export default NewAppointmentForm;
