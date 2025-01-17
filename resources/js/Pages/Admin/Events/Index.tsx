import React, { useEffect, useState } from 'react';
import { Course, Event, PageProps } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Button } from '@/Components/ui/button';
import { Edit, Edit2, Trash2Icon } from 'lucide-react';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';

const CoursesIndex = ({ events }: PageProps<{ events: { data: Event[] } }>) => {
    const { success, error } = usePage().props.flash;
    const [selectedindex, setselectedindex] = useState(0);

    const data0 = events.data.filter((item) => item.eventType == 'UpcomingEvent');
    const data1 = events.data.filter((item) => item.eventType == 'Announcement');
    const data2 = events.data.filter((item) => item.eventType == 'Events');
    const list = ['UpcomingEvent', 'Announcement', 'Events']
    // if(success != null){
    //     toast(success)
    // }
    // if(error != null){
    //     toast(error)
    // }
    return (
        <Authenticated
            header={
                <div className='w-full justify-between flex item items-center'>
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Latest Updates
                    </h2>
                    <Link href={route('adminevents.create')}><Button>Add New</Button></Link>
                </div>
            }
        >
            <Head>
                <title>Latest Events</title>
            </Head>
            <div className='p-2 max-w-7xl w-full mx-auto'>
                {success && <div className='w-full  p-2'><h1 className='bg-green-100 rounded-md  text-green-700 p-3'>{success}</h1></div>}
                {error && <h1 className='w-full bg-red-100 text-red-700 p-3'>{error}</h1>}
                <div className="bg-white rounded-md overflow-hidden">
                    <div className='flex bg-zinc-100'>
                        <button onClick={() => setselectedindex(0)} className={cn('px-5 bg-white py-3 hover:bg-zinc-100 border-b-[0.15rem]  hover:border-indigo-500 transition-all duration-200', selectedindex == 0 ? 'active_tab' : '')}>
                            Upcoming Events
                        </button>
                        <button onClick={() => setselectedindex(1)} className={cn('px-5 bg-white py-3 hover:bg-zinc-100 border-b-[0.15rem]  hover:border-indigo-500 transition-all duration-200', selectedindex == 1 ? 'active_tab' : '')}>
                            Announcements
                        </button>
                        <button onClick={() => setselectedindex(2)} className={cn('px-5 bg-white rounded-tr-md py-3 hover:bg-zinc-100 border-b-[0.15rem]  hover:border-indigo-500 transition-all duration-200', selectedindex == 2 ? 'active_tab' : '')}>
                            Events
                        </button>
                    </div>
                    {selectedindex == 0 && <div className='p-2'>
                        {data0.length === 0 ? (
                            <p className='p-5 text-black/60'>No Upcoming Events available.</p>
                        ) : <div className='flex flex-col gap-2 mt-4   grid-cols-1 md:grid-cols-4 p-3 sm:grid-cols-2'>
                            <h3 className='mb-3 text-xl'>
                                Total {data0.length} Upcoming Events
                            </h3>
                            {
                                data0.map((course) => (
                                    <div key={course.id} className="course-item flex gap-2 relative bg-white overflow-hidden rounded-md px-3 py-2 border-[0.01rem] border-zinc-300">
                                        <img className={cn('h-[70px] w-auto')} src={`/storage/images/small/${course?.images?.[0] ?? ''}`} />
                                        <div className="flex flex-col">
                                            <h3 className='font-medium text-xl'>{course.title}</h3>
                                            <p className='text-[14px] text-zinc-500'>{format(new Date(course?.date ?? ''),'PP')} &middot; {course.description?.length ?? 0 > 80 ? course.description?.substring(0, 70) : course.description}</p>
                                            <div className='flex gap-2 justify-end absolute right-0 bottom-0 p-1 bg-white w-auto shadow'>
                                                <Link href={`/admin/events/${course.id}`}><Edit size={25} className='text-blue-900 p-1 rounded-md ' /></Link>
                                                <Link href={`/admin/events/${course.id}`} onBefore={()=>confirm(`Do you want to delete ${course.title} Event`)} method="delete" as="button"><Trash2Icon size={25} className='text-red-900 p-1 rounded-md ' /></Link>
                                            </div>
                                        </div>
                                        {/* onBefore={()=>confirm(`Do you want to delete ${course.title} Course`)} */}
                                    </div>
                                ))
                            }</div>}
                    </div>}
                    {selectedindex == 1 && <div className='p-2'>
                        {data1.length === 0 ? (
                            <p className='p-5 text-black/60'>No Announcements available.</p>
                        ) : <div className='flex flex-col gap-2 mt-4   grid-cols-1 md:grid-cols-4 p-3 sm:grid-cols-2'>
                            <h3 className='mb-3 text-xl'>
                                Total {data1.length} Announcements
                            </h3>
                            {
                                data1.map((course) => (
                                    <div key={course.id} className="course-item flex relative bg-white overflow-hidden rounded-md px-3 py-2 border-[0.01rem] border-zinc-300">
                                        <img className={cn('h-[70px] w-auto hidden')} src={`/storage/images/small/${course?.images?.[0] ?? ''}`} />
                                        <div className="flex flex-col">
                                            <h3 className='font-medium text-xl'>{course.title}</h3>
                                            <p className='text-[14px] text-zinc-500'>{format(new Date(course?.date ?? ''),'PP')} &middot; {course.description?.length ?? 0 > 80 ? course.description?.substring(0, 70) : course.description}</p>
                                            <div className='flex gap-2 justify-end absolute right-0 bottom-0 p-1 bg-white w-auto shadow'>
                                                <Link href={`/admin/events/${course.id}`}><Edit size={25} className='text-blue-900 p-1 rounded-md ' /></Link>
                                                <Link href={`/admin/events/${course.id}`} onBefore={()=>confirm(`Do you want to delete ${course.title} Event`)} method="delete" as="button"><Trash2Icon size={25} className='text-red-900 p-1 rounded-md ' /></Link>
                                            </div>
                                        </div>
                                        {/* onBefore={()=>confirm(`Do you want to delete ${course.title} Course`)} */}
                                    </div>
                                ))
                            }</div>}
                    </div>}
                    {selectedindex == 2 && <div className='p-2'>
                        {data2.length === 0 ? (
                            <p className='p-5 text-black/60'>No Events available.</p>
                        ) : <div className='grid gap-2 mt-4   grid-cols-1 md:grid-cols-4 p-3 sm:grid-cols-2'>
                            <h3 className='mb-3 text-xl md:col-span-4 sm:col-span-2 col-span-1'>
                                Total {data2.length} Events
                            </h3>
                            {
                                data2.map((course) => (
                                    <div key={course.id} className="course-item gap-2 relative bg-white overflow-hidden rounded-md px-3 py-2 border-[0.01rem] border-zinc-300">
                                        <img className={cn('h-[70px] w-auto')} src={`/storage/images/small/${course?.images?.[0] ?? ''}`} />
                                        <div className="flex flex-col">
                                            <h3 className='font-medium text-xl'>{course.title}</h3>
                                            <p className='text-[14px] text-zinc-500'>{format(new Date(course?.date ?? ''),'PP')} &middot; {course.description?.length ?? 0 > 80 ? course.description?.substring(0, 70) : course.description}</p>
                                            <div className='flex gap-2 justify-end absolute right-0 bottom-0 p-1 bg-white w-auto shadow'>
                                                <Link href={`/admin/events/${course.id}`}><Edit size={25} className='text-blue-900 p-1 rounded-md ' /></Link>
                                                <Link href={`/admin/events/${course.id}`} onBefore={()=>confirm(`Do you want to delete ${course.title} Event`)} method="delete" as="button"><Trash2Icon size={25} className='text-red-900 p-1 rounded-md ' /></Link>
                                            </div>
                                        </div>
                                        {/* onBefore={()=>confirm(`Do you want to delete ${course.title} Course`)} */}
                                    </div>
                                ))
                            }</div>}
                    </div>}
                </div>
            </div>
        </Authenticated>
    );
};

export default CoursesIndex;