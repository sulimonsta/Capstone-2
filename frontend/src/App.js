import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Dashboard from './components/Dashboard/Dashboard';
import AppointmentList from './components/Appointments/AppointmentList';
import BookAppointment from './components/Appointments/BookAppointment';
import Feedback from './components/Feedback/Feedback';
import Prescriptions from './components/Prescriptions/Prescriptions';
import VideoCall from './components/Telemedicine/VideoCall';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/appointments" component={AppointmentList} />
          <Route path="/book-appointment" component={BookAppointment} />
          <Route path="/feedback" component={Feedback} />
          <Route path="/prescriptions" component={Prescriptions} />
          <Route path="/video-call" component={VideoCall} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
