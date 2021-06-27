import React from 'react';
import CardDeck from '@app/../node_modules/react-bootstrap/esm/CardDeck';
import Card from '@app/../node_modules/react-bootstrap/esm/Card';
import {CanvasJSChart} from 'canvasjs-react-charts';

const Supply = ({isActive}) => {
    const options = {
        animationEnabled: true,
        colorSet: 'colorSet2',
        title: {
            text: 'water supply status'
        },
        axisX: {
            valueFormatString: 'MMMM'
        },
        toolTip: {
            shared: true
        },
        data: [
            {
                type: 'column',
                name: 'Expected Sales',
                showInLegend: true,
                yValueFormatString: '$#,##0',
                dataPoints: [
                    {x: new Date(2017, 0), y: 18000},
                    {x: new Date(2017, 1), y: 29000},
                    {x: new Date(2017, 2), y: 25000},
                    {x: new Date(2017, 3), y: 27000},
                    {x: new Date(2017, 4), y: 32000},
                    {x: new Date(2017, 5), y: 48000},
                    {x: new Date(2017, 6), y: 11000},
                    {x: new Date(2017, 7), y: 38000},
                    {x: new Date(2017, 8), y: 22000},
                    {x: new Date(2017, 9), y: 45000},
                    {x: new Date(2017, 10), y: 48000},
                    {x: new Date(2017, 11), y: 27000}
                ]
            },
            {
                type: 'line',
                name: 'Profit',
                markerBorderColor: 'white',
                markerBorderThickness: 2,
                showInLegend: true,
                yValueFormatString: '$#,##0',
                dataPoints: [
                    {x: new Date(2017, 0), y: 11500},
                    {x: new Date(2017, 3), y: 13500},
                    {x: new Date(2017, 4), y: 13890},
                    {x: new Date(2017, 5), y: 18500},
                    {x: new Date(2017, 8), y: 15880},
                    {x: new Date(2017, 9), y: 24000},
                    {x: new Date(2017, 11), y: 19000}
                ]
            }
        ]
    };
    return (
        <div className={`tab-pane ${isActive ? 'active' : ''}`}>
            <CardDeck>
                <Card className="text-center p-5 m-2 font-weight-bold bg-secondary">
                    hi
                </Card>
                <Card className="text-center p-5 m-2 font-weight-bold bg-secondary">
                    hello
                </Card>
            </CardDeck>
            <Card className="m-2">
                <CanvasJSChart options={options} />
            </Card>
        </div>
    );
};

export default Supply;
