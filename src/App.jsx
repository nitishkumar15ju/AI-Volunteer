import React from "react";
import LoginPage from "./pages/Login";
import Dashboard from "./pages/DashBoard"
import Volunteer from "./pages/VolunteerData"
import { Route, Routes } from "react-router-dom";
import { EventsDetails } from "./pages/EventsDetails";
import AIMatching from "./pages/AIMatching";
import { BloodDonation } from "./pages/BloodDonation";


function App() {
  return (
    <>
       <Routes>
         <Route path="/blooddonationdetails/:id" element={<BloodDonation/>}></Route>
            <Route path="/inforaimatching" element={<AIMatching/>}></Route>
         <Route path="/eventdetails" element={<EventsDetails/>}></Route>
        <Route path="/volunteerdata" element={<Volunteer/>}></Route>
       <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/" element={<LoginPage />}></Route>
           <Route path="/*" element={<div >No page exist with this name</div>}></Route>
      </Routes>
    </>
  );
}

export default App;
