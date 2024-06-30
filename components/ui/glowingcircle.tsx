import React from 'react';

const GlowingCircle = () => {
    return (
        <div
            className="absolute top-[calc(50%-20px)] left-[calc(50%-20px)]  w-[1px] h-[1px] rounded-full bg-transparent"
            style={{
                boxShadow: '10px 10px 200px 100px rgba(0,77,122,0.5)',
            }}
        />
    );
};

export default GlowingCircle;