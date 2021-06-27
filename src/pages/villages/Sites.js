import React, {useState} from 'react';
import CardDeck from '@app/../node_modules/react-bootstrap/esm/CardDeck';
import Card from '@app/../node_modules/react-bootstrap/esm/Card';
import AreaTable from './Area';
import Supply from './Supply';
import Chemical from './Chemical';
import DLog from './DLog';

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
                    <Card.Title class=" text-center p-3 mb-1 bg-success text-white font-weight-bold h3">
                        Banivadi
                    </Card.Title>
                    <Card class="border border-success">
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
                                    Water
                                </button>
                            </li>
                            <li className="nav-item">
                                <button
                                    type="button"
                                    className={`nav-link ${
                                        activeTab === 'CHEMICAL' ? 'active' : ''
                                    }`}
                                    onClick={() => toggle('CHEMICAL')}
                                >
                                    chemical
                                </button>
                            </li>
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
                            </li>
                        </ul>
                    </Card.Header>
                    <div className="tab-content">
                        <Supply isActive={activeTab === 'WSUPPLY'} />
                        <Chemical isActive={activeTab === 'CHEMICAL'} />
                        <DLog isActive={activeTab === 'DLOG'} />
                    </div>
                </Card>
            </CardDeck>
        </div>
    );
};

export default Sites;
