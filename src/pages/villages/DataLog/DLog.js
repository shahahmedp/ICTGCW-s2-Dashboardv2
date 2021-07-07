import React from 'react';
//  import CardDeck from '@app/../node_modules/react-bootstrap/esm/CardDeck';
import Card from '@app/../node_modules/react-bootstrap/esm/Card';
//  import ListGroup from '@app/../node_modules/react-bootstrap/esm/ListGroup';
//    import {CanvasJSChart, CanvasJS} from 'canvasjs-react-charts';

const DLog = ({isActive}) => {
    return (
        <div className={`tab-pane ${isActive ? 'active' : ''}`}>
            <Card className="m-2">
                <h1>Data Logger</h1>
            </Card>
        </div>
    );
};

export default DLog;
