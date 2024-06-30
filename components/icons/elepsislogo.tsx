import Image from 'next/image';
import React from 'react';

const Eliipselogo = ({ width = 20, height = 25 }) => {
    return (
        <Image
            src={"/JvwMeIqb9S0bZz7EjZXr1dYMhc-removebg-preview.png"}
            width={40}
            height={40}
            alt='logo'
            className='align-middle m-auto'
        />
    );
};

export default Eliipselogo;