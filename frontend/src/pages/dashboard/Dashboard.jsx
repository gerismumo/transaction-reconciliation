import { faFile, faMoneyBillAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import { FiHeart, FiHome } from 'react-icons/fi';
import { Link } from 'react-router-dom';


function Dashboard() {
    return (
        <div className="dashboard">
            <div className="dash-page">
                <div className="sidebar">
                    <div className="sidebar-log">
                        <h3>Insure now</h3>
                    </div>
                    <div className="sidebar-links">
                        <ul>
                            <li>
                                <Link to="/home">
                                    <FiHome />
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/home">
                                    <FiHeart />
                                    Health
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="dash-content">
                    <div className="dash-header">
                        <div className="dash-log">
                            <h2>Dashboard</h2>
                        </div>
                        <div className="header-detail">
                            <div className="search">
                                <input 
                                type="text" 
                                value=""
                                placeholder="search"
                                />
                            </div>
                            <div className="branch-name">
                                <p>Mombasa Branch</p>
                            </div>
                        </div>
                    </div>
                    <div className="dash-main">
                        <div className="main-card">
                            <div className="transaction-card">
                                <div className="money-text-icon">
                                    <div className="money-icon">
                                    <FontAwesomeIcon icon={faMoneyBillAlt} />
                                    </div>
                                    <div className="money-text">
                                        <p>MONEY EARNED</p>
                                    </div>
                                </div>
                                <div className="money-rate">
                                    <div className="month-money">
                                        <p>current month</p>
                                        <p>$30000</p>
                                    </div>
                                    <div className="year-money">
                                        <p>current financial year</p>
                                        <p>$800000</p>
                                    </div>
                                </div>
                            </div>
                            <div className="policy-card">
                                <div className="policy-name">
                                    <p>POLICIES</p>
                                </div>
                                <div className="Policy-icon-total">
                                    <div className="policy-icon">
                                        <FontAwesomeIcon icon={faFile} />
                                    </div>
                                    <div className="policy-total">
                                        <p>30</p>
                                        <p>new policies</p>
                                    </div>
                                </div>
                                <div className="policy-category">
                                    <div className="pending-policy">
                                        <p>10</p>
                                        <p>pending</p>
                                    </div>
                                    <div className="inBind-policy">
                                        <p>9</p>
                                        <p>In bind</p>
                                    </div>
                                    <div className="closed-policy">
                                        <p>11</p>
                                        <p>Closed</p>
                                    </div>
                                </div>
                            </div>
                            <div className="claims-card">
                            <div className="policy-name">
                                    <p>CLAIMS</p>
                                </div>
                                <div className="Policy-icon-total">
                                    <div className="policy-icon">
                                        <FontAwesomeIcon icon={faFile} />
                                    </div>
                                    <div className="policy-total">
                                        <p>30</p>
                                        <p>New Claims</p>
                                    </div>
                                </div>
                                <div className="policy-category">
                                    <div className="pending-policy">
                                        <p>10</p>
                                        <p>Paid</p>
                                    </div>
                                    <div className="inBind-policy">
                                        <p>9</p>
                                        <p>Pending</p>
                                    </div>
                                    <div className="closed-policy">
                                        <p>11</p>
                                        <p>Rejected</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;