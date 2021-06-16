import React from 'react';

const resize = '/img/Banner.png';
const Banner = () => {
    return (
        <div className="bnr">
            <img
                src="/img/Banner.png"
                alt="AdminLTE Logo"
                srcSet={`${resize} 300w, ${resize} 768w, ${resize} 1280w`}
                style={{opacity: '.8'}}
            />
        </div>
    );
};
export default Banner;
