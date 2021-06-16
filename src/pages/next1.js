import React from 'react';
import SmallBox from '../components/small-box/SmallBox';

const next1 = () => {
    return (
        <div className="container-fluid1">
            <div className="row">
                <div className="col-lg-3 col-6">
                    <SmallBox
                        title="next1"
                        type="success"
                        icon="ion-android-people"
                        navigateTo="/"
                    />
                </div>
            </div>
        </div>
    );
};

export default next1;
