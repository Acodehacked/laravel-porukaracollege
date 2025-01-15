'use client'
import { cn } from '@/lib/utils';
import { Gallery } from 'react-grid-gallery'
import { BiImages } from 'react-icons/bi';
import { useState } from 'react';
const HomeGallery = () => {
    const [value, setValue] = useState(0);

    const onChange = (value: number) => {
        setValue(value);
    }
    const images = [
        {
            src: "/storage/g1.jpeg",
            width: 320,
            height: 174,
        },
        {
            src: "/storage/g2.jpeg",
            width: 320,
            height: 174,
        },
        {
            src: "/storage/g3.jpeg",
            width: 320,
            height: 174,
        },
        {
            src: "/storage/g4.jpeg",
            width: 320,
            height: 174,
        },
        {
            src: "/storage/g5.jpeg",
            width: 320,
            height: 174,
        },
        {
            src: "/storage/card.jpg",
            width: 420,
            height: 252,
            alt: "Boats (Jeshu John - designerspics.com)",
        },
        {
            src: "/storage/graduate3.jpg",
            width: 400,
            height: 212,
        },
        {
            src: "/storage/card2.jpg",
            width: 320,
            height: 212,
        },
        {
            src: "/storage/college1.png",
            width: 520,
            height: 212,
        },
        {
            src: "/storage/course1.jpg",
            width: 320,
            height: 212,
        },
        {
            src: "/storage/graduate1.jpg",
            width: 320,
            height: 212,
        },
        {
            src: "/storage/graduate2.jpg",
            width: 400,
            height: 272,
        },

    ];
    let halflen = images.length / 2;
    let row = [];
    for (let i = 0; i < halflen; i++) {
        let firstrowindex = i * 2;
        row.push(<div key={i} className='flex w-full gap-2'>
            <div className={cn('h-[200px] object-cover overflow-hidden rounded-xl', i % 2 == 0 ? 'w-[60%]' : 'w-[40%]')}>
                <img className='w-full h-full object-cover' src={images[firstrowindex].src} alt={''} width={400}  height={400} />
            </div>
            <div className={cn('h-[200px] overflow-hidden rounded-xl object-cover', i % 2 == 0 ? 'w-[40%]' : 'w-[60%]')}>
                <img className='w-full h-full object-cover' src={images[firstrowindex + 1].src}  alt={''} width={400} height={400} />
            </div>
        </div>)
    }
    return <div className="screen-lg w-full mx-auto mt-3">
        <div className='screen-lg flex justify-center gap-2 items-end p-4'>
            <BiImages className='text-primary p-2' />
            <h2 className='text-[40px] font-bold'>Image</h2>
            <p className='text-[24px] font-medium mb-1'>Gallery</p>
        </div>
        {/* <Gallery images={images} enableImageSelection={false} /> */}
        <div className='flex flex-col mx-2 gap-2'>
            {row}
        </div>
    </div>

    // return <>
    //     <Carousel value={value} onChange={onChange} >
    //     </Carousel>
    //     <Dots
    //         value={value}
    //         onChange={onChange}
    //     />
    //     </>
}
export default HomeGallery