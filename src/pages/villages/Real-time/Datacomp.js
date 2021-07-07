import React from 'react';
import CardDeck from '@app/../node_modules/react-bootstrap/esm/CardDeck';
import Card from '@app/../node_modules/react-bootstrap/esm/Card';
import {Col} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    ResponsiveContainer,
    LineChart,
    Line /*   , AreaChart, Area, */
} from 'recharts';
import {
    faAngleUp
    /*  faAngleDown,
    faArrowLeft, 
    faArrowRight
        faEllipsisH,    */
} from '@fortawesome/free-solid-svg-icons';

const data = [
    {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
    {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
    {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
    {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
    {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
    {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
    {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
    {name: 'Page C', uv: 2000, pv: 6800, amt: 2290},
    {name: 'Page D', uv: 4780, pv: 7908, amt: 2000},
    {name: 'Page E', uv: 2890, pv: 9800, amt: 2181},
    {name: 'Page F', uv: 1390, pv: 3800, amt: 1500},
    {name: 'Page G', uv: 3490, pv: 4300, amt: 2100}
];
export const AF = () => {
    return (
        <CardDeck>
            <Col>
                <Card md="6" mb="2" className={{height: '20'}}>
                    <div className="card mb-3 bg-love-kiss widget-chart card-border">
                        <div className="widget-chart-content text-white">
                            <div className="icon-wrapper rounded-circle">
                                <div className="icon-wrapper-bg bg-white opacity-4" />
                                <i className="lnr-cog" />
                            </div>
                            <div className="widget-numbers">45.8k</div>
                            <div className="widget-subheading">Total Views</div>
                            <div className="widget-description">
                                <FontAwesomeIcon
                                    className="text-white opacity-5"
                                    icon={faAngleUp}
                                />
                                <span className="text-white">175.5%</span>
                            </div>
                        </div>
                        <div className="widget-chart-wrapper">
                            <ResponsiveContainer
                                width="100%"
                                aspect={3.0 / 1.0}
                            >
                                <LineChart
                                    data={data}
                                    margin={{
                                        top: 0,
                                        right: 5,
                                        left: 5,
                                        bottom: 0
                                    }}
                                >
                                    <Line
                                        type="monotone"
                                        dataKey="pv"
                                        stroke="#ffffff"
                                        strokeWidth={3}
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </Card>
                <Card className="widget-content mt-2">
                    <div className="widget-content-outer">
                        <div className="widget-content-wrapper">
                            <div className="widget-content-left pr-2 fsize-1">
                                <div className="widget-numbers mt-2 ml-2 fsize-3 text-success">
                                    40%
                                </div>
                            </div>
                            <div className="widget-content-right w-100">
                                <div className="progress-bar-xs progress">
                                    <h
                                        className="progress-bar bg-success"
                                        role="progressbar"
                                        aria-valuenow="20"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                        style={{width: '40%'}}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="widget-content-left fsize-1">
                            <div className="text-muted ml-2 opacity-6">
                                Income Target
                            </div>
                        </div>
                    </div>
                </Card>
            </Col>
            <Col>
                <Card md="6">
                    <div className="card mb-3 bg-grow-early widget-chart card-border">
                        <div className="widget-chart-content text-white">
                            <div className="icon-wrapper rounded-circle">
                                <div className="icon-wrapper-bg bg-white opacity-4" />
                                <i className="lnr-cog" />
                            </div>
                            <div className="widget-numbers">45.8k</div>
                            <div className="widget-subheading">Total Views</div>
                            <div className="widget-description">
                                <FontAwesomeIcon
                                    className="text-white opacity-5"
                                    icon={faAngleUp}
                                />
                                <span className="text-white">175.5%</span>
                            </div>
                        </div>
                        <div className="widget-chart-wrapper">
                            <ResponsiveContainer
                                width="100%"
                                aspect={3.0 / 1.0}
                            >
                                <LineChart
                                    data={data}
                                    margin={{
                                        top: 0,
                                        right: 5,
                                        left: 5,
                                        bottom: 0
                                    }}
                                >
                                    <Line
                                        type="monotone"
                                        dataKey="pv"
                                        stroke="#ffffff"
                                        strokeWidth={3}
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </Card>
                <Card className="widget-content mt-2">
                    <div className="widget-content-outer">
                        <div className="widget-content-wrapper">
                            <div className="widget-content-left pr-2 fsize-1">
                                <div className="widget-numbers mt-2 ml-2 fsize-3 text-danger">
                                    71%
                                </div>
                            </div>
                            <div className="widget-content-right w-100">
                                <div className="progress-bar-xs progress">
                                    <h
                                        className="progress-bar bg-danger"
                                        role="progressbar"
                                        aria-valuenow="71"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                        style={{width: '71%'}}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="widget-content-left fsize-1">
                            <div className="text-muted ml-2 opacity-6">
                                Income Target
                            </div>
                        </div>
                    </div>
                </Card>
            </Col>
        </CardDeck>
    );
};
export const FI = () => {
    return (
        <CardDeck>
            <Col>
                <Card md="6" mb="2">
                    <div className="card mb-3 bg-midnight-bloom widget-chart card-border">
                        <div className="widget-chart-content text-white">
                            <div className="icon-wrapper rounded-circle">
                                <div className="icon-wrapper-bg bg-white opacity-4" />
                                <i className="lnr-cog" />
                            </div>
                            <div className="widget-numbers">45.8k</div>
                            <div className="widget-subheading">Total Views</div>
                            <div className="widget-description">
                                <FontAwesomeIcon
                                    className="text-white opacity-5"
                                    icon={faAngleUp}
                                />
                                <span className="text-white">175.5%</span>
                            </div>
                        </div>
                        <div className="widget-chart-wrapper">
                            <ResponsiveContainer
                                width="100%"
                                aspect={3.0 / 1.0}
                            >
                                <LineChart
                                    data={data}
                                    margin={{
                                        top: 0,
                                        right: 5,
                                        left: 5,
                                        bottom: 0
                                    }}
                                >
                                    <Line
                                        type="monotone"
                                        dataKey="pv"
                                        stroke="#ffffff"
                                        strokeWidth={3}
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </Card>
                <Card className="widget-content mt-2">
                    <div className="widget-content-outer">
                        <div className="widget-content-wrapper">
                            <div className="widget-content-left pr-2 fsize-1">
                                <div className="widget-numbers mt-2 ml-2 fsize-3 text-danger">
                                    71%
                                </div>
                            </div>
                            <div className="widget-content-right w-100">
                                <div className="progress-bar-xs progress">
                                    <h
                                        className="progress-bar bg-danger"
                                        role="progressbar"
                                        aria-valuenow="71"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                        style={{width: '71%'}}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="widget-content-left fsize-1">
                            <div className="text-muted ml-2 opacity-6">
                                Income Target
                            </div>
                        </div>
                    </div>
                </Card>
            </Col>
            <Col>
                <Card md="6">
                    <div className="card mb-3 bg-premium-dark widget-chart card-border">
                        <div className="widget-chart-content text-white">
                            <div className="icon-wrapper rounded-circle">
                                <div className="icon-wrapper-bg bg-white opacity-4" />
                                <i className="lnr-cog" />
                            </div>
                            <div className="widget-numbers">45.8k</div>
                            <div className="widget-subheading">Total Views</div>
                            <div className="widget-description">
                                <FontAwesomeIcon
                                    className="text-white opacity-5"
                                    icon={faAngleUp}
                                />
                                <span className="text-white">175.5%</span>
                            </div>
                        </div>
                        <div className="widget-chart-wrapper">
                            <ResponsiveContainer
                                width="100%"
                                aspect={3.0 / 1.0}
                            >
                                <LineChart
                                    data={data}
                                    margin={{
                                        top: 0,
                                        right: 5,
                                        left: 5,
                                        bottom: 0
                                    }}
                                >
                                    <Line
                                        type="monotone"
                                        dataKey="pv"
                                        stroke="#ffffff"
                                        strokeWidth={3}
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </Card>
                <Card className="widget-content mt-2">
                    <div className="widget-content-outer">
                        <div className="widget-content-wrapper">
                            <div className="widget-content-left pr-2 fsize-1">
                                <div className="widget-numbers mt-2 ml-2 fsize-3 text-danger">
                                    71%
                                </div>
                            </div>
                            <div className="widget-content-right w-100">
                                <div className="progress-bar-xs progress">
                                    <h
                                        className="progress-bar bg-danger"
                                        role="progressbar"
                                        aria-valuenow="71"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                        style={{width: '71%'}}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="widget-content-left fsize-1">
                            <div className="text-muted ml-2 opacity-6">
                                Income Target
                            </div>
                        </div>
                    </div>
                </Card>
            </Col>
        </CardDeck>
    );
};

export const NP = () => {
    return (
        <CardDeck>
            <Col>
                <Card md="6" mb="2">
                    <div className="card mb-3 bg-love-kiss widget-chart card-border">
                        <div className="widget-chart-content text-white">
                            <div className="icon-wrapper rounded-circle">
                                <div className="icon-wrapper-bg bg-white opacity-4" />
                                <i className="lnr-cog" />
                            </div>
                            <div className="widget-numbers">45.8k</div>
                            <div className="widget-subheading">Total Views</div>
                            <div className="widget-description">
                                <FontAwesomeIcon
                                    className="text-white opacity-5"
                                    icon={faAngleUp}
                                />
                                <span className="text-white">175.5%</span>
                            </div>
                        </div>
                        <div className="widget-chart-wrapper">
                            <ResponsiveContainer
                                width="100%"
                                aspect={3.0 / 1.0}
                            >
                                <LineChart
                                    data={data}
                                    margin={{
                                        top: 0,
                                        right: 5,
                                        left: 5,
                                        bottom: 0
                                    }}
                                >
                                    <Line
                                        type="monotone"
                                        dataKey="pv"
                                        stroke="#ffffff"
                                        strokeWidth={3}
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </Card>
                <Card className="widget-content mt-2">
                    <div className="widget-content-outer">
                        <div className="widget-content-wrapper">
                            <div className="widget-content-left pr-2 fsize-1">
                                <div className="widget-numbers mt-2 ml-2 fsize-3 text-danger">
                                    71%
                                </div>
                            </div>
                            <div className="widget-content-right w-100">
                                <div className="progress-bar-xs progress">
                                    <h
                                        className="progress-bar bg-danger"
                                        role="progressbar"
                                        aria-valuenow="71"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                        style={{width: '71%'}}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="widget-content-left fsize-1">
                            <div className="text-muted ml-2 opacity-6">
                                Income Target
                            </div>
                        </div>
                    </div>
                </Card>
            </Col>
            <Col>
                <Card md="6">
                    <div className="card mb-3 bg-arielle-smile widget-chart card-border">
                        <div className="widget-chart-content text-white">
                            <div className="icon-wrapper rounded-circle">
                                <div className="icon-wrapper-bg bg-white opacity-4" />
                                <i className="lnr-cog" />
                            </div>
                            <div className="widget-numbers">45.8k</div>
                            <div className="widget-subheading">Total Views</div>
                            <div className="widget-description">
                                <FontAwesomeIcon
                                    className="text-white opacity-5"
                                    icon={faAngleUp}
                                />
                                <span className="text-white">175.5%</span>
                            </div>
                        </div>
                        <div className="widget-chart-wrapper">
                            <ResponsiveContainer
                                width="100%"
                                aspect={3.0 / 1.0}
                            >
                                <LineChart
                                    data={data}
                                    margin={{
                                        top: 0,
                                        right: 5,
                                        left: 5,
                                        bottom: 0
                                    }}
                                >
                                    <Line
                                        type="monotone"
                                        dataKey="pv"
                                        stroke="#ffffff"
                                        strokeWidth={3}
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </Card>
                <Card className="widget-content mt-2">
                    <div className="widget-content-outer">
                        <div className="widget-content-wrapper">
                            <div className="widget-content-left pr-2 fsize-1">
                                <div className="widget-numbers mt-2 ml-2 fsize-3 text-danger">
                                    71%
                                </div>
                            </div>
                            <div className="widget-content-right w-100">
                                <div className="progress-bar-xs progress">
                                    <h
                                        className="progress-bar bg-danger"
                                        role="progressbar"
                                        aria-valuenow="71"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                        style={{width: '71%'}}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="widget-content-left fsize-1">
                            <div className="text-muted ml-2 opacity-6">
                                Income Target
                            </div>
                        </div>
                    </div>
                </Card>
            </Col>
        </CardDeck>
    );
};
export const PS = () => {
    return (
        <CardDeck>
            <Col>
                <Card md="6" mb="2">
                    <div className="card mb-3 bg-midnight-bloom widget-chart card-border">
                        <div className="widget-chart-content text-white">
                            <div className="icon-wrapper rounded-circle">
                                <div className="icon-wrapper-bg bg-white opacity-4" />
                                <i className="lnr-cog" />
                            </div>
                            <div className="widget-numbers">45.8k</div>
                            <div className="widget-subheading">Total Views</div>
                            <div className="widget-description">
                                <FontAwesomeIcon
                                    className="text-white opacity-5"
                                    icon={faAngleUp}
                                />
                                <span className="text-white">175.5%</span>
                            </div>
                        </div>
                        <div className="widget-chart-wrapper">
                            <ResponsiveContainer
                                width="100%"
                                aspect={3.0 / 1.0}
                            >
                                <LineChart
                                    data={data}
                                    margin={{
                                        top: 0,
                                        right: 5,
                                        left: 5,
                                        bottom: 0
                                    }}
                                >
                                    <Line
                                        type="monotone"
                                        dataKey="pv"
                                        stroke="#ffffff"
                                        strokeWidth={3}
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </Card>
                <Card className="widget-content mt-2">
                    <div className="widget-content-outer">
                        <div className="widget-content-wrapper">
                            <div className="widget-content-left pr-2 fsize-1">
                                <div className="widget-numbers mt-2 ml-2 fsize-3 text-danger">
                                    71%
                                </div>
                            </div>
                            <div className="widget-content-right w-100">
                                <div className="progress-bar-xs progress">
                                    <h
                                        className="progress-bar bg-danger"
                                        role="progressbar"
                                        aria-valuenow="71"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                        style={{width: '71%'}}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="widget-content-left fsize-1">
                            <div className="text-muted ml-2 opacity-6">
                                Income Target
                            </div>
                        </div>
                    </div>
                </Card>
            </Col>
            <Col>
                <Card md="6">
                    <div className="card mb-3 bg-premium-dark widget-chart card-border">
                        <div className="widget-chart-content text-white">
                            <div className="icon-wrapper rounded-circle">
                                <div className="icon-wrapper-bg bg-white opacity-4" />
                                <i className="lnr-cog" />
                            </div>
                            <div className="widget-numbers">45.8k</div>
                            <div className="widget-subheading">Total Views</div>
                            <div className="widget-description">
                                <FontAwesomeIcon
                                    className="text-white opacity-5"
                                    icon={faAngleUp}
                                />
                                <span className="text-white">175.5%</span>
                            </div>
                        </div>
                        <div className="widget-chart-wrapper">
                            <ResponsiveContainer
                                width="100%"
                                aspect={3.0 / 1.0}
                            >
                                <LineChart
                                    data={data}
                                    margin={{
                                        top: 0,
                                        right: 5,
                                        left: 5,
                                        bottom: 0
                                    }}
                                >
                                    <Line
                                        type="monotone"
                                        dataKey="pv"
                                        stroke="#ffffff"
                                        strokeWidth={3}
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </Card>
                <Card className="widget-content mt-2">
                    <div className="widget-content-outer">
                        <div className="widget-content-wrapper">
                            <div className="widget-content-left pr-2 fsize-1">
                                <div className="widget-numbers mt-2 ml-2 fsize-3 text-danger">
                                    71%
                                </div>
                            </div>
                            <div className="widget-content-right w-100">
                                <div className="progress-bar-xs progress">
                                    <h
                                        className="progress-bar bg-danger"
                                        role="progressbar"
                                        aria-valuenow="71"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                        style={{width: '71%'}}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="widget-content-left fsize-1">
                            <div className="text-muted ml-2 opacity-6">
                                Income Target
                            </div>
                        </div>
                    </div>
                </Card>
            </Col>
        </CardDeck>
    );
};
export const TDS = () => {
    return (
        <CardDeck>
            <Col>
                <Card style={{width: '25rem'}}>
                    <div className="card mb-3 bg-premium-dark widget-chart card-border">
                        <div className="widget-chart-content text-white">
                            <div className="icon-wrapper rounded-circle">
                                <div className="icon-wrapper-bg bg-white opacity-4" />
                                <i className="lnr-cog" />
                            </div>
                            <div className="widget-numbers">45.8k</div>
                            <div className="widget-subheading">Total Views</div>
                            <div className="widget-description">
                                <FontAwesomeIcon
                                    className="text-white opacity-5"
                                    icon={faAngleUp}
                                />
                                <span className="text-white">175.5%</span>
                            </div>
                        </div>
                        <div className="widget-chart-wrapper">
                            <ResponsiveContainer
                                width="100%"
                                aspect={3.0 / 1.0}
                            >
                                <LineChart
                                    data={data}
                                    margin={{
                                        top: 0,
                                        right: 5,
                                        left: 5,
                                        bottom: 0
                                    }}
                                >
                                    <Line
                                        type="monotone"
                                        dataKey="pv"
                                        stroke="#ffffff"
                                        strokeWidth={3}
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </Card>
                <Card className="widget-content mt-2" style={{width: '25rem'}}>
                    <div className="widget-content-outer">
                        <div className="widget-content-wrapper">
                            <div className="widget-content-left pr-2 fsize-1">
                                <div className="widget-numbers mt-2 ml-2 fsize-3 text-danger">
                                    71%
                                </div>
                            </div>
                            <div className="widget-content-right w-100">
                                <div className="progress-bar-xs progress">
                                    <h
                                        className="progress-bar bg-danger"
                                        role="progressbar"
                                        aria-valuenow="71"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                        style={{width: '71%'}}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="widget-content-left fsize-1">
                            <div className="text-muted ml-2 opacity-6">
                                Income Target
                            </div>
                        </div>
                    </div>
                </Card>
            </Col>
        </CardDeck>
    );
};
