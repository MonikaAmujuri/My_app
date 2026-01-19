import React from "react";
import Sidebar from "./components/sidebar";
import Overview from "./components/overview";
import "./components/ChartComponent";




import "./App.css";
import MetricCard from "./components/MetricCard";


function App() {
  return (
    <div className="dashboard">
      <Sidebar />
      <Overview />
    </div>

  );
}




export default App;