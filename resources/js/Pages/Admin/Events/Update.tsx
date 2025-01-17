import React, { useEffect, useState } from 'react';
import { Course, Event, PageProps } from '@/types';
import { Link, useForm } from '@inertiajs/react';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { Textarea } from '@/Components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/Components/ui/radio-group';
import { Label } from '@/Components/ui/label';
import ImageUploader from '@/Components/common/ImageUploader';
import { Calendar } from '@/Components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/Components/ui/popover';
import { CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';

const CourseCreate = ({ event }: PageProps<{ event: { data: Event } }>) => {
    const [specs, setspecs] = useState('')
    const [image, setimage] = useState<string | null>(null)
    const [date, setdate] = useState(new Date())
    const [selectedIndex, setselectedIndex] = useState(event.data.eventType)
    const [images, setimages] = useState<string[]>([])
    const list = [{
        name: 'Upcoming Event',
        image: 0,
    }, {
        name: 'Announcement',
        image: 1,
    }, {
        name: 'Events',
        image: 1
    }];
    console.log(event)
    const { data, setData, put, processing, errors, reset, clearErrors } = useForm({
        id: event.data.id,
        title: event.data.title, // Title of the event
        description: event.data.description, // Description of the event, optional
        date: format(new Date(event.data.date ?? ''), 'yyyy-MM-dd'), // Date in YYYY-MM-DD format, optional
        images: event.data.images, // Array of image URLs, optional
        eventType: event.data.eventType, // Enum for event type
        link: event.data.link ?? '', // Link, optional
    });
    // Function to handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        put(`/admin/events/${event.data.id}`);
    };
    useEffect(() => {
        if (image == null) return;
        var l: string[] = [];
        l.push(image)
        // setimages(l);
        setData({
            ...data,
            ['images' as string]: l
        })
        console.log(l)
    }, [image])
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name as string]: value
        });
        clearErrors();
    };

    // useEffect(() => {
    //     setData({
    //         ...data,
    //         'specializations': specs == '' ? [] : specs.split(',') ?? []
    //     })
    // }, [specs])
    return (
        <Authenticated
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Add Event
                </h2>
            }
        >
            <div className="container mx-auto p-4">
                <form onSubmit={handleSubmit} className="space-y-4 card">
                    {/* Course Title */}
                    <div className='fold-sm'>
                        <div>
                            <label htmlFor="title" className="block text-sm font-medium">
                                Title
                            </label>
                            <Input
                                id="title"
                                name='title'
                                value={data.title}
                                onChange={handleChange}
                                placeholder="Enter Event title"
                                className="mt-1 block w-full"
                            />
                            {errors.title && (
                                <span className="text-red-500 text-sm">{errors.title}</span>
                            )}
                        </div>

                        {/* Course Text */}
                        <div>
                            <label htmlFor="text" className="block text-sm font-medium">
                                Event Type
                            </label>
                            <RadioGroup className='py-3'
                                defaultValue={list[0].name} value={data.eventType}>
                                <div className="flex gap-2 items-center">
                                    <input onChange={(e) => {
                                        setselectedIndex("Announcement")
                                        setData({ ...data, ['event_type' as string]: e.target.value })
                                    }} defaultChecked={data.eventType == 'UpcomingEvent'} type='radio' value={'UpcomingEvent'} id='upcomin' name='eventType' />
                                    {/* <RadioGroupItem value={'UpcomingEvent'} id={'UpcomingEvent'} /> */}
                                    <label htmlFor={'upcomin'}>{'Upcoming Event'}</label>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <input onChange={(e) => {
                                        setselectedIndex("Announcement")
                                        setData({ ...data, ['event_type' as string]: e.target.value })
                                    }} defaultChecked={data.eventType == 'Announcement'} type='radio' value={'Announcement'} id='announ' name='eventType' />
                                    {/* <RadioGroupItem value={'Announcement'} id={'Announcement'} /> */}
                                    <label htmlFor='announ'>{'Announcement'}</label>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <input onChange={(e) => {
                                        setselectedIndex("Events")
                                        setData({ ...data, ['event_type' as string]: e.target.value })
                                    }} defaultChecked={data.eventType == 'Events'} type='radio' value={'Events'} id='events' name='eventType' />
                                    {/* <RadioGroupItem value={'Events'} id={'Events'} /> */}
                                    <label htmlFor={'events'}>{'Events'}</label>
                                </div>
                            </RadioGroup>
                            {errors.eventType && (
                                <span className="text-red-500 text-sm">{errors.eventType}</span>
                            )}
                        </div>
                    </div>

                    {/* Course Description */}
                    <div className='fold-sm'>
                        <div>
                            <label htmlFor="description" className="block text-sm font-medium">
                                Description
                            </label>
                            <Textarea
                                name='description'
                                onChange={handleChange}
                                id="description"
                                value={data.description}
                                // {...register('description')}
                                placeholder="Enter course description"
                                className="mt-1 block w-full"
                            />
                            {errors.description && (
                                <span className="text-red-500 text-sm">{errors.description}</span>
                            )}
                        </div>

                        {/* Course Duration */}
                        <div className={cn('', selectedIndex == 'Announcement' ? 'opacity-40 select-none pointer-events-none' : '')}>
                            <label htmlFor="image" className="block text-sm font-medium">
                                Image (required for Latest Events and Announcements)
                            </label>
                            <ImageUploader def={event.data?.images?.[0] ?? null} setlogoUploaded={setimage} />
                            {errors && (
                                <span className="text-red-500 text-sm">{errors.images}</span>
                            )}
                        </div>

                    </div>



                    {/* Course Slug */}
                    <div className="fold-sm">
                        <div>
                            <label htmlFor="slug" className="block text-sm font-medium">
                                Related Link
                            </label>
                            <Input
                                name='link'
                                onChange={handleChange}
                                value={data.link}
                                id="link"
                                placeholder="Enter related link (not mandatory)"
                                className="mt-1 block w-full"
                            />
                            {errors.link && (
                                <span className="text-red-500 text-sm">{errors.link}</span>
                            )}
                        </div>

                        {/* Specializations */}
                        <div>
                            <label htmlFor="specializations" className="block text-sm font-medium">
                                Event Date
                            </label>
                            <Input
                                name='date'
                                type='date'
                                onChange={handleChange}
                                defaultValue={format(new Date(event.data.date ?? ''), 'yyyy-MM-dd')}
                                id="date"
                                placeholder="Enter related link (not mandatory)"
                                className="mt-1 block w-full"
                            />
                            {errors.date && (
                                <span className="text-red-500 text-sm">{errors.date}</span>
                            )}
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className='flex gap-2'>
                        <Button disabled={processing} type="submit" className="mt-6 bg-blue-500 text-white">
                            Save
                        </Button>
                        <Button asChild variant={'outline'} className="mt-6 ">
                            <Link href={route('adminevents.index')}>Cancel</Link>
                        </Button>
                    </div>
                </form>
            </div>
        </Authenticated>
    );
};

export default CourseCreate;