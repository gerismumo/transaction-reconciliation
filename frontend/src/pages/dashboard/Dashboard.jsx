import React from 'react';

function Dashboard() {
    return (
        <div className="dashboard">
            <div className="dash-page">
                <div className="sidebar">
                    <h1>sidebar</h1>
                </div>
                <div className="dash-content">
                    <div className="dash-header">
                        <h1>nav dashbaosrd</h1>
                    </div>
                    <div className="dash-main">
                        <h1> dashboard main contents </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;