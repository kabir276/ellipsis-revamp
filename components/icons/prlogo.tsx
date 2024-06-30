import Image from 'next/image';
import React from 'react';

const Prlogo = ({ width = 20, height = 25 }) => {
    return (
        <Image
            src={"/icons8-pull-request-64.png"}
            width={40}
            height={40}
            alt='logo'
            className='align-middle m-auto'
        />
    );
};

export default Prlogo;