import React from 'react';
import SmallBox from '../components/small-box/SmallBox';

const Dashboard = () => {
    return (
        <div className="container-fluid1">
            <div className="row">
                <div className="col-lg-3 col-6">
                    <SmallBox
                        count={150}
                        title="New Orders"
                        type="success"
                        icon="ion-android-people"
                        navigateTo="/"
                    />
                </div>
                <div className="col-lg-3 col-6">
                    <SmallBox
                        count={53}
                        title="Bounce Rate"
                        type="success"
                        navigateTo="/"
                    />
                </div>
                <div className="col-lg-3 col-6">
                    <SmallBox
                        count={44}
                        title="User Registrations"
                        type="warning"
                        navigateTo="/"
                    />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
