import React from 'react';
import {CanvasJSChart} from 'canvasjs-react-charts';
import options from './charts/Bar';

const BrChart = () => {
    return (
        <div>
            <CanvasJSChart options={options} />
        </div>
    );
};
export default BrChart;
