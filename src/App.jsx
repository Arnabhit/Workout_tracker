import { useState } from "react";
import reactLogo from "./assets/react.svg";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Home1 from "./components/Home1";
import Registration from "./components/Registration";
import Login from "./components/Login";
import Tracker from "./components/Tracker";
import Workout from "./components/Workout";
import Schedule from "./components/Schedule";

function App() {
  const [count, setCount] = useState(0);

  return (
    // <>
     <div className=' flex flex-col justify-center items-center min-h-screen'>
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
          <Route path="/home" element={<Home1 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/tracker" element={<Tracker />} />
          <Route path="/workout" element={<Workout />} />
          {/* <Route path="*" element={<Schedule />} /> */}
      
      </Routes>
    </BrowserRouter>
     </div>

  );
}

export default App;
