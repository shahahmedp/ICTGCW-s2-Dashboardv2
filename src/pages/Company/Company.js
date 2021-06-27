import React from 'react';
import Leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import CardDeck from '@app/../node_modules/react-bootstrap/esm/CardDeck';
import Card from '@app/../node_modules/react-bootstrap/esm/Card';
import {Scrollbars} from 'react-custom-scrollbars';
import ListGroup from '@app/../node_modules/react-bootstrap/esm/ListGroup';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
//  import {JsonToTable} from 'react-json-to-table';
import Dropdown from './Dropdown';
//  import mydata from '../data/Table3';
import SitesTable from '../Sites/SitesTable';

<link
    rel="stylesheet"
    href="https://unpkg.com/leaflet@1.0.1/dist/leaflet.css"
/>;
Leaflet.Icon.Default.imagePath =
    '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/';

const Company = () => {
    return (
        <div className="container-fluid1">
            <CardDeck className="row">
                <Card className="col-md-4">
                    <ListGroup class="border border-info">
                        <Card>
                            <MapContainer
                                center={[19.7617, 74.5222]}
                                zoom={3}
                                style={{height: '20vh', width: '50wh'}}
                            >
                                <TileLayer
                                    attribution='&copy; <a href="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"'
                                    url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                                />
                                <Marker position={[17.3112, 74.1739]}>
                                    <Popup>
                                        Banvadi, Maharashtra
                                        <br />
                                        GlobalM Pvt Ltd
                                    </Popup>
                                </Marker>
                                <Marker position={[19.7617, 74.5222]}>
                                    <Popup>
                                        Pimpalwadi, Maharashtra
                                        <br />
                                        GlobalM Pvt Ltd
                                    </Popup>
                                </Marker>
                                <Marker position={[17.8165, 73.8162]}>
                                    <Popup>
                                        Chorambe, Maharashtra
                                        <br />
                                        GlobalM Pvt Ltd
                                    </Popup>
                                </Marker>
                                <Marker position={[19.2405, 73.9683]}>
                                    <Popup>
                                        Tikekarwadi, Maharashtra
                                        <br />
                                        GlobalM Pvt Ltd
                                    </Popup>
                                </Marker>
                                <Marker position={[18.2724, 73.6934]}>
                                    <Popup>
                                        Lavhi Bk, Maharashtra
                                        <br />
                                        GlobalM Pvt Ltd
                                    </Popup>
                                </Marker>
                                <Marker position={[16.3647, 80.5827]}>
                                    <Popup>
                                        Chiluvuru, Andhra Pradesh
                                        <br />
                                        GlobalM Pvt Ltd
                                    </Popup>
                                </Marker>
                                <Marker position={[16.3451, 80.6153]}>
                                    <Popup>
                                        Manchikallupudi, Andhra Pradesh
                                        <br />
                                        GlobalM Pvt Ltd
                                    </Popup>
                                </Marker>
                                <Marker position={[16.5704, 80.02702]}>
                                    <Popup>
                                        K R Konduru, Andhra Pradesh
                                        <br />
                                        GlobalM Pvt Ltd
                                    </Popup>
                                </Marker>
                                <Marker position={[16.3344, 80.6042]}>
                                    <Popup>
                                        Penumuli, Andhra Pradesh
                                        <br />
                                        GlobalM Pvt Ltd
                                    </Popup>
                                </Marker>
                                <Marker position={[15.9573, 80.8703]}>
                                    <Popup>
                                        Singupalem, Andhra Pradesh
                                        <br />
                                        GlobalM Pvt Ltd
                                    </Popup>
                                </Marker>
                                <Marker position={[15.9594, 80.8769]}>
                                    <Popup>
                                        Visweswaram, Andhra Pradesh
                                        <br />
                                        GlobalM Pvt Ltd
                                    </Popup>
                                </Marker>
                                <Marker position={[16.033, 80.8703]}>
                                    <Popup>
                                        Penumudi, Andhra Pradesh
                                        <br />
                                        GlobalM Pvt Ltd
                                    </Popup>
                                </Marker>
                                <Marker position={[16.059, 80.8142]}>
                                    <Popup>
                                        Karumuru, Andhra Pradesh
                                        <br />
                                        GlobalM Pvt Ltd
                                    </Popup>
                                </Marker>
                                <Marker position={[16.3149, 80.177]}>
                                    <Popup>
                                        Bethapudi, Andhra Pradesh
                                        <br />
                                        GlobalM Pvt Ltd
                                    </Popup>
                                </Marker>
                                <Marker position={[16.3398, 80.4912]}>
                                    <Popup>
                                        Pedakakani, Andhra Pradesh
                                        <br />
                                        GlobalM Pvt Ltd
                                    </Popup>
                                </Marker>
                                <Marker position={[16.3513, 80.4799]}>
                                    <Popup>
                                        Venigandla, Andhra Pradesh
                                        <br />
                                        GlobalM Pvt Ltd
                                    </Popup>
                                </Marker>
                                <Marker position={[16.1116, 80.5536]}>
                                    <Popup>
                                        Dandamudi, Andhra Pradesh
                                        <br />
                                        GlobalM Pvt Ltd
                                    </Popup>
                                </Marker>
                                <Marker position={[17.1, 80.5391]}>
                                    <Popup>
                                        Gopalapuram, Andhra Pradesh
                                        <br />
                                        GlobalM Pvt Ltd
                                    </Popup>
                                </Marker>
                                <Marker position={[16.2078, 80.1108]}>
                                    <Popup>
                                        Kanaparru, Andhra Pradesh
                                        <br />
                                        GlobalM Pvt Ltd
                                    </Popup>
                                </Marker>
                                <Marker position={[16.2537, 80.1756]}>
                                    <Popup>
                                        Gorijavolu, Andhra Pradesh
                                        <br />
                                        GlobalM Pvt Ltd
                                    </Popup>
                                </Marker>
                                <Marker position={[24.8057, 93.8592]}>
                                    <Popup>
                                        Thaoroijam, Manipur
                                        <br />
                                        GlobalM Pvt Ltd
                                    </Popup>
                                </Marker>
                                <Marker position={[24.7396, 93.8662]}>
                                    <Popup>
                                        Yarou Bamdiar, Manipur
                                        <br />
                                        GlobalM Pvt Ltd
                                    </Popup>
                                </Marker>
                                <Marker position={[24.7076, 93.8719]}>
                                    <Popup>
                                        Lairenjam, Manipur
                                        <br />
                                        GlobalM Pvt Ltd
                                    </Popup>
                                </Marker>
                                <Marker position={[24.7252, 93.8764]}>
                                    <Popup>
                                        Wakching Khullen, Manipur
                                        <br />
                                        GlobalM Pvt Ltd
                                    </Popup>
                                </Marker>
                                <Marker position={[24.7749, 93.8477]}>
                                    <Popup>
                                        Salam Keikhu, Manipur
                                        <br />
                                        GlobalM Pvt Ltd
                                    </Popup>
                                </Marker>
                            </MapContainer>
                        </Card>
                        <Card>
                            <Card.Title class="text-center p-1 bg-info text-white">
                                <b className="ts-3">Globalm Pvt Ltd</b>
                            </Card.Title>
                            <ListGroup variant="flush">
                                <ListGroup.Item>About</ListGroup.Item>
                                <ListGroup.Item>
                                    <b className="float-left">
                                        Allocated villages
                                    </b>
                                    <b className="float-right">25</b>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    Vestibulum at eros
                                </ListGroup.Item>
                                <ListGroup.Item>bla bla</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </ListGroup>
                </Card>
                <Card className="col-md-8 border border-info">
                    <Card.Title class="p-1 mb-1 bg-info text-white font-weight-bold">
                        <div className="dropdown text-right pr-2 pb-2 pt-.9">
                            <b className="text-center h4 pr-5">
                                Diployement Statictics
                            </b>
                            <Dropdown />
                        </div>
                    </Card.Title>
                    <ListGroup>
                        <ListGroup.Item>
                            <Scrollbars
                                style={{height: 270}}
                                class="border border-info"
                            >
                                <SitesTable style={{width: 800}} />
                            </Scrollbars>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </CardDeck>
        </div>
    );
};

export default Company;
/*  
  <button
                                className="btn btn-secondary dropdown-toggle"
                                type="button"
                                id="dropdownMenuButton"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                Sites Navigation
                            </button>
                            <div
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuButton"
                            >
                                <a className="dropdown-item" href="/profile">
                                    Action
                                </a>
                                <a className="dropdown-item" href="/profile">
                                    Another action
                                </a>
                                <a className="dropdown-item" href="/profile">
                                    Something else here
                                </a>
                            </div> */
/*  
<ListGroup.Item>
                            <CanvasJSChart
                                style={{width: 200, hight: 100}}
                                className="border border-info mr-2"
                                options={options}
                            />
                        </ListGroup.Item>
    */
/*  
<CardDeck>
                <Card style={{width: '18vm'}}>
                    <Card.Header>
                        <Nav variant="pills" defaultActiveKey="#first">
                            <Nav.Item style={{margin: '1ch'}}>
                                <Nav.Link href="#first">Home</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Card.Header>
                </Card>
            </CardDeck>
    */
//  <CanvasJSChart options={options} />
/*  
<DropDownList
                                        data={drop}
                                        value={value}
                                        onChange={handleChange}
                                    />
                                     <div>
                                     /*    <Pie
                            data={globalpi}
                            options={{
                                title: {
                                    display: true,
                                    text: 'Average Rainfall per month',
                                    fontSize: 20
                                },
                                legend: {
                                    display: true,
                                    position: 'right'
                                }
                            }}
                        />
                    </div>
                */

/*
<div style={{width: '100%'}}>
                        <BarChart
                            ylabel="Quantity"
                            width={250}
                            height={500}
                            margin={margin}
                            data={data}
                        />
                    </div>
    */
/*  
    <div style={{width: '100%'}}>
                        <BarChart
                            ylabel="Quantity"
                            width={350}
                            height={500}
                            margin={margin}
                            data={data}
                        />
                    </div>                        
                    
                    */
/*
<div style={{width: '100%'}}>
                        <BarChart
                            ylabel="Quantity"
                            width={350}
                            height={450}
                            margin={margin}
                            data={data}
                        />
                    </div>
 */
