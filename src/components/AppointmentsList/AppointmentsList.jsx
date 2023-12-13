import './AppointmentsList.css';
import Appointment from '../Appointment/Appointment';

function AppointmentsList({ appointmentList, setAppointmentList }) {
  return (
    <div className="appointments-list-wrapper">
      {appointmentList.map((appointment, i) => (
        <Appointment
          key={i}
          appointment={appointment}
          appointmentIndex={i}
          appointmentList={appointmentList}
          setAppointmentList={setAppointmentList}
        />
      ))}
    </div>
  );
}

export default AppointmentsList;
