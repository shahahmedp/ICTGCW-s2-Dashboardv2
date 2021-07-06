import React, {useState} from 'react';
import CardDeck from '@app/../node_modules/react-bootstrap/esm/CardDeck';
import Card from '@app/../node_modules/react-bootstrap/esm/Card';
import AreaTable from './Area';
import Supply from './supply/Supply';
import Real from './Real-time/Real';
import Range from './Range/Range';
//  import DLog from './DLog';

const Sites = () => {
    const [activeTab, setActiveTab] = useState('WSUPPLY');
    //  setting the state with activity or timeline or settings
    const toggle = (tab) => {
        if (activeTab !== tab) setActiveTab(tab);
    };
    return (
        <div className="container-fluid1">
            <CardDeck className="row">
                <Card className="col-md-4">
                    <Card.Title className=" text-center p-3 mb-1 bg-success text-white font-weight-bold h3">
                        Banivadi
                    </Card.Title>
                    <Card className="border border-success mt-3 ">
                        <Card.Title class=" text-center p-2 mb-1 bg-info text-white font-weight-bold">
                            Area Statistics
                        </Card.Title>
                        <AreaTable />
                    </Card>
                </Card>
                <Card className="col-md-8">
                    <Card.Header className=" text-center p-1 mb-1 font-weight-bold h5 bg-muted">
                        <ul className="nav nav-pills">
                            <li className="nav-item">
                                <button
                                    type="button"
                                    className={`nav-link ${
                                        activeTab === 'WSUPPLY' ? 'active' : ''
                                    }`}
                                    onClick={() => toggle('WSUPPLY')}
                                >
                                    Water Supply
                                </button>
                            </li>
                            <li className="nav-item">
                                <button
                                    type="button"
                                    className={`nav-link ${
                                        activeTab === 'Real' ? 'active' : ''
                                    }`}
                                    onClick={() => toggle('Real')}
                                >
                                    Real time
                                </button>
                            </li>
                            <li className="nav-item">
                                <button
                                    type="button"
                                    className={`nav-link ${
                                        activeTab === 'Range' ? 'active' : ''
                                    }`}
                                    onClick={() => toggle('Range')}
                                >
                                    Range
                                </button>
                            </li>
                        </ul>
                    </Card.Header>
                    <div className="tab-content">
                        <Supply isActive={activeTab === 'WSUPPLY'} />
                        <Real isActive={activeTab === 'Real'} />
                        <Range isActive={activeTab === 'Range'} />
                    </div>
                </Card>
            </CardDeck>
        </div>
    );
};

export default Sites;
/*  
<li className="nav-item">
                                <button
                                    type="button"
                                    className={`nav-link ${
                                        activeTab === 'DLOG' ? 'active' : ''
                                    }`}
                                    onClick={() => toggle('DLOG')}
                                >
                                    Data
                                </button>
                            </li>   */
