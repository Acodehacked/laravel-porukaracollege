import HomeGallery from '@/Components/reusable/Home/HomeGallery';
import { HomeAboutUs } from '@/Components/reusable/public/HomeAboutUs';
import HomeActivities from '@/Components/reusable/public/HomeActivities';
import HomeAll from '@/Components/reusable/public/HomeAll';
import HomeCentres from '@/Components/reusable/public/HomeCentres';
import { AdmssionForm, HomeEvents, HomeHead } from '@/Components/reusable/public/HomeEvents';
import { COLLEGES } from '@/constants';
import Guest from '@/Layouts/GuestLayout';
import { Course, Event, PageProps } from '@/types';
import { Head, Link } from '@inertiajs/react';

export default function Welcome({events,courses}:PageProps<{events:{data:Event[]},courses: Course[]}>) {
    const announcements = events.data.filter((e)=>e.eventType == 'Announcement');
    const even = events.data.filter((e)=>e.eventType == 'Events');
    console.log(events)
    const handleImageError = () => {
        document
            .getElementById('screenshot-container')
            ?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document
            .getElementById('docs-card-content')
            ?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
            <Head title="Home" />
            <Guest>
                <main className='w-100 bg-foreground min-h-[100vh] block relative'>
                    <HomeAll events={announcements} />
                    <div className='bg-white'>
                        <HomeEvents events={even} />
                        <HomeHead />
                        <HomeCentres />
                        <HomeGallery />
                        <HomeActivities />
                        <HomeAboutUs />
                        <div className='screen flex items-center flex-col'>
                            <h2 className='text-[35px] font-bold mb-3 text-pink-700 text-center'>Some of the CMI institutions</h2>
                            <Link className='link-hover text-[20px] hover:underline' href={'http://www.cmi.org.in/'}>http://www.cmi.org.in/</Link>
                            <div className='flex md:flex-row flex-col ps-4 items-center md:justify-center md:items-start pt-5'>
                                <img className='max-w-[300px] w-full' src={'/storage/cmi.png'} width={400} height={400} alt='CMI institutes' />
                                <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 mb-5 gap-2'>
                                    {COLLEGES.map((item,index)=>{
                                        return <div className='px-2 py-1 flex hover:bg-zinc-100 flex-col text-sm rounded-md border-[0.03rem] border-zinc-200' key={index}>
                                            <span className='text-[9px] text-zinc-500'>college</span>
                                            <span>{item.name}</span>
                                        </div>
                                    })}
                                </div>
                            </div>

                        </div>
                        <AdmssionForm />
                    </div>
                </main >
            </Guest>
        </>
    );
}
