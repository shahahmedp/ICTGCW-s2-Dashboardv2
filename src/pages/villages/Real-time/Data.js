import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
//  import Switch from 'react-switch';
//  import Areatable from '../Area';
import {AF, FI, NP, PS, TDS} from './Datacomp';
//  import {Arsenic} from './Graphcomp';

const Data = ({isActive}) => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: {max: 4000, min: 3000},
            items: 1
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 1
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
                style={{background: '#d2691e'}}
                responsive={responsive}
                showDots="true"
                infinite="true"
                keyBoardControl="true"
                focusOnSelect="true"
                className="mt-3"
            >
                <div className="ml-3 mr-3 mb-5">
                    <AF />
                </div>
                <div className="ml-3 mr-3 mb-5">
                    <FI />
                </div>
                <div className="ml-3 mr-3 mb-5">
                    <NP />
                </div>
                <div className="ml-3 mr-3 mb-5">
                    <PS />
                </div>
                <div className="ml-3 mr-3 mb-5">
                    <TDS />
                </div>
            </Carousel>
        </div>
    );
};
export default Data;
