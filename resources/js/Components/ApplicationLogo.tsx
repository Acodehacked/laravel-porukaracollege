import { SVGAttributes } from 'react';

export default function ApplicationLogo(props: SVGAttributes<SVGElement>) {
    return (
        <img src={'/storage/logo-gold.png'} className='w-[50px]' />
    );
}
