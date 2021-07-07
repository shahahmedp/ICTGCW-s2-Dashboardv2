import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
//  import Switch from 'react-switch';
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
} from '../Range/Graphcomp';
//  import {AF, FI, NP, PS, TDS} from './Datacomp';

const Graph = ({isActive}) => {
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
    return (
        <div className={`tab-pane ${isActive ? 'active' : ''}`}>
            <Carousel
                style={{background: '#d2691e', height: '100vh', width: '50wh'}}
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
        </div>
    );
};
//    sh
export default Graph;
