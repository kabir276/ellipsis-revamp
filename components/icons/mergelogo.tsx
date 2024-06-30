import Image from 'next/image';
import React from 'react';

const Mergelogo = ({ width = 20, height = 25 }) => {
    return (
        <Image
            src={"/icons8-merge-git-64.png"}
            width={40}
            height={40}
            alt='logo'
            className='align-middle m-auto'
        />
    );
};

export default Mergelogo;