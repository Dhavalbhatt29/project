import React from 'react';
import '../App.css';  
  
function Dashboard() {
  return (
    <>
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Welcome to Your Dashboard</h1>
      </header>
      <main className="main-content">
        <section>
          <h2>Overview</h2>
          <>This is an overview of your activity and stats.</>
        </section>
        <section>
          <h2>Analytics</h2>
          <p>View detailed analytics about your data here.</p>
        </section>
        <section>
          <h2>Recent Activity</h2>
          <p>Chepck out recent activity and updates here.</p>
        </section> 
      </main>
    </div>
    </>
  );
}

export default Dashboard;
