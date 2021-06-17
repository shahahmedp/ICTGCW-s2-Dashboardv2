import React from 'react';
import Leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import {JsonToTable} from 'react-json-to-table';
import CardDeck from '@app/../node_modules/react-bootstrap/esm/CardDeck';
import Card from '@app/../node_modules/react-bootstrap/esm/Card';
import ScrollArea from 'react-scrollbar';
import myJson from '../data/Table';
/*   <Card.Title>map</Card.Title>
<Card.Text>this is shahbaaz card 1</Card.Text>   */

<link
    rel="stylesheet"
    href="https://unpkg.com/leaflet@1.0.1/dist/leaflet.css"
/>;

Leaflet.Icon.Default.imagePath =
    '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/';

const Dashboard = () => {
    return (
        <div className="container-fluid1">
            <CardDeck>
                <Card>
                    <Card.Body>
                        <MapContainer
                            center={[12.8416, 77.6636]}
                            zoom={13}
                            style={{height: '50vh', width: '200wh'}}
                        >
                            <TileLayer
                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={[12.8416, 77.6636]}>
                                <Popup>
                                    CDAC Electonic City
                                    <br />
                                    Bangalore, India
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <ScrollArea
                            speed={0.8}
                            className="area"
                            contentClassName="content"
                            horizontal={false}
                        >
                            <JsonToTable json={myJson} />
                        </ScrollArea>
                    </Card.Body>
                </Card>
            </CardDeck>
        </div>
    );
};
export default Dashboard;
