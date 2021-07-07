import React from 'react';
import filterFactory, {textFilter} from 'react-bootstrap-table2-filter';
import Card from '@app/../node_modules/react-bootstrap/esm/Card';
import BootstrapTable from 'react-bootstrap-table-next';
//  import {UncontrolledCarousel} from 'reactstrap';
//  import AreaTable from '../Area';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {Scrollbars} from 'react-custom-scrollbars';
//  import Switch from 'react-switch';
//  import Areatable from '../Area';
import {
    Arsenic,
    Fluoride,
    Iron,
    FRC,
    Nitrate,
    PH,
    Pressure,
    Salanity,
    TDS
} from './Graphcomp';

const Real = ({isActive}) => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: {max: 4000, min: 3000},
            items: 2
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 2
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 2
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1
        }
    };
    const products = [
        {
            Date: '5/july/2021',
            Time: '10:27',
            Arsenic: 2.12,
            Fluoride: 3.4,
            FRC: 3.45,
            Iron: 3.45,
            Nitrate: 34,
            pH: 4.56,
            Pressure: 5.67,
            Salanity: 6.7,
            TDS: 7.4
        },
        {
            Date: '5/july/2021',
            Time: '10:28',
            Arsenic: 2.12,
            Fluoride: 3.4,
            FRC: 3.45,
            Iron: 3.45,
            Nitrate: 34,
            pH: 4.56,
            Pressure: 5.67,
            Salanity: 6.7,
            TDS: 7.4
        },
        {
            Date: '6/july/2021',
            Time: '10:29',
            Arsenic: 2.12,
            Fluoride: 3.4,
            FRC: 3.45,
            Iron: 3.45,
            Nitrate: 34,
            pH: 4.56,
            Pressure: 5.67,
            Salanity: 6.7,
            TDS: 7.4
        },
        {
            Date: '6/july/2021',
            Time: '10:30',
            Arsenic: 2.12,
            Fluoride: 3.4,
            FRC: 3.45,
            Iron: 3.45,
            Nitrate: 34,
            pH: 4.56,
            Pressure: 5.67,
            Salanity: 6.7,
            TDS: 7.4
        },
        {
            Date: '7/july/2021',
            Time: '10:31',
            Arsenic: 2.12,
            Fluoride: 3.4,
            FRC: 3.45,
            Iron: 3.45,
            Nitrate: 34,
            pH: 4.56,
            Pressure: 5.67,
            Salanity: 6.7,
            TDS: 7.4
        },
        {
            Date: '7/july/2021',
            Time: '10:32',
            Arsenic: 2.12,
            Fluoride: 3.4,
            FRC: 3.45,
            Iron: 3.45,
            Nitrate: 34,
            pH: 4.56,
            Pressure: 5.67,
            Salanity: 6.7,
            TDS: 7.4
        }
    ];
    const columns = [
        {
            dataField: 'Date',
            text: 'Date',
            filter: textFilter({})
        },
        {
            dataField: 'Time',
            text: 'Time',
            filter: textFilter({})
        },
        {
            dataField: 'Arsenic',
            text: 'Arsenic'
        },
        {
            dataField: 'Fluoride',
            text: 'Fluoride'
        },
        {
            dataField: 'FRC',
            text: 'FRC'
        },
        {
            dataField: 'Iron',
            text: 'Iron'
        },
        {
            dataField: 'Nitrate',
            text: 'Nitrate'
        },
        {
            dataField: 'pH',
            text: 'pH'
        },
        {
            dataField: 'Pressure',
            text: 'Pressure'
        },
        {
            dataField: 'Salanity',
            text: 'Salanity'
        },
        {
            dataField: 'TDS',
            text: 'TDS'
        }
    ];
    return (
        <div className={`tab-pane ${isActive ? 'active' : ''}`}>
            <Card.Title class="p-3">
                <b className="text-left ts-3">Data Statistics</b>
            </Card.Title>
            <Carousel
                style={{background: '#d2691e'}}
                responsive={responsive}
                showDots="true"
                infinite="true"
                keyBoardControl="true"
                focusOnSelect="true"
                className="ml-3 mr-3 border border-info"
            >
                <div className="ml-3 mr-3 mb-5">
                    <Arsenic />
                </div>
                <div className="ml-3 mr-3 mb-5">
                    <Fluoride />
                </div>
                <div className="ml-3 mr-3 mb-5">
                    <Iron />
                </div>
                <div className="ml-3 mr-3 mb-5">
                    <FRC />
                </div>
                <div className="ml-3 mr-3 mb-5">
                    <Nitrate />
                </div>
                <div className="ml-3 mr-3 mb-5">
                    <PH />
                </div>
                <div className="ml-3 mr-3 mb-5">
                    <Pressure />
                </div>
                <div className="ml-3 mr-3 mb-5">
                    <Salanity />
                </div>
                <div className="ml-3 mr-3 mb-5">
                    <TDS />
                </div>
            </Carousel>
            <Card>
                <Card.Title class=" mt-3 text-center p-3 bg-info text-white">
                    <b className="ts-3">Historical Data</b>
                </Card.Title>
                <Scrollbars style={{height: 350}} class="border border-info">
                    <BootstrapTable
                        class="text-center mb-2 bg-danger text-white"
                        keyField="id"
                        data={products}
                        columns={columns}
                        filter={filterFactory()}
                    />
                </Scrollbars>
            </Card>
        </div>
    );
};

export default Real;
