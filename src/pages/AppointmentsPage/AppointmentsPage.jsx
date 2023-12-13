import { useState } from "react";
import "./AppointmentsPage.css";
import NewAppointmentForm from "../../components/NewAppointmentForm/NewAppointmentForm";
import AppointmentsList from "../../components/AppointmentsList/AppointmentsList";

function AppointmentsPage() {
  const [appointmentList, setAppointmentList] = useState([]);

  return (
    <div className="appointments-wrapper">
      <NewAppointmentForm
        appointmentList={appointmentList}
        setAppointmentList={setAppointmentList}
      />
      <h2 className="title">
        {appointmentList.length ? "Appointments" : "No Appointments Yet"}
      </h2>
      <AppointmentsList
        appointmentList={appointmentList}
        setAppointmentList={setAppointmentList}
      />
    </div>
  );
}

export default AppointmentsPage;
