import React, { useEffect, useState } from 'react';
import { Course, PageProps } from '@/types';
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

const CourseCreate = () => {
    const [specs, setspecs] = useState('')
    const [image, setimage] = useState<string | null>(null)
    const [selectedIndex, setselectedIndex] = useState('UpcomingEvent')
    const list = [{
        name: 'UpcomingEvent',
        image: 0,
    }, {
        name: 'Announcement',
        image: 1,
    }, {
        name: 'Events',
        image: 1
    }];
    const { data, setData, post, processing, errors, reset, clearErrors } = useForm({
        id: 0,
        title: '', // Title of the event
        description: '', // Description of the event, optional
        date: '', // Date in YYYY-MM-DD format, optional
        images: null, // Array of image URLs, optional
        eventType: list[0].name, // Enum for event type
        link: '', // Link, optional
        createdAt: '', // Created timestamp, optional
        updatedAt: '' // U
    });

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
    // Function to handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        post('/admin/events', {
            onBefore: () => {
                console.log(data)
                if (selectedIndex == 'Announcement') return true;
                if (data.images == null) {
                    alert('Please select any image')
                    return false;
                }
                return true;
                // imgerror
            }
        });
    };
    useEffect(() => {
        console.log(data)
    }, [data])
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
                                onChange={handleChange}
                                // {...register('title', { required: 'Title is required' })}
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
                                        setselectedIndex(e.target.value)
                                        setData({ ...data, ['eventType' as string]: e.target.value })
                                    }} defaultChecked type='radio' value={'UpcomingEvent'} id='upcomin' name='eventType' />
                                    {/* <RadioGroupItem value={'UpcomingEvent'} id={'UpcomingEvent'} /> */}
                                    <label htmlFor={'upcomin'}>{'Upcoming Event'}</label>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <input onChange={(e) => {
                                        setselectedIndex(e.target.value)
                                        setData({ ...data, ['eventType' as string]: e.target.value })
                                    }} type='radio' value={'Announcement'} id='announ' name='eventType' />
                                    {/* <RadioGroupItem value={'Announcement'} id={'Announcement'} /> */}
                                    <label htmlFor='announ'>{'Announcement'}</label>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <input onChange={(e) => {
                                        setselectedIndex(e.target.value)
                                        setData({ ...data, ['eventType' as string]: e.target.value })
                                    }} type='radio' value={'Events'} id='events' name='eventType' />
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
                            <ImageUploader setlogoUploaded={setimage} />
                            {errors.images && (
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
                                value={data.date}
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
            </div >
        </Authenticated >
    );
};

export default CourseCreate;