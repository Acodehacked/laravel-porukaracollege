import React, { useEffect, useState } from 'react';
import { Course, PageProps } from '@/types';
import { Head, Link, useForm } from '@inertiajs/react';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { Textarea } from '@/Components/ui/textarea';

const CourseCreate = ({ course }: PageProps<{ course: Course }>) => {
    console.log(course)
    const [specs, setspecs] = useState(course.specializations.join(','))
    const { data, setData, put, processing, errors, reset, clearErrors } = useForm({
        id: course?.id || 0,
        title: course.title || '',
        text: course?.text || '',
        description: course?.description || '',
        duration: course?.duration || 4,
        image: course?.image || '',
        eligibility: course?.eligibility || '',
        link: course?.link || '/',
        slug: course?.slug || '',
        specializations: course?.specializations || []
    });

    // Function to handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        put(`/admin/courses/${course.id}`);
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name as string]: value
        });
        clearErrors();
    };

    useEffect(() => {
        setData({
            ...data,
            'specializations': specs == '' ? [] : specs.split(',') ?? []
        })
    }, [specs])
    return (
        <Authenticated
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Update Course
                </h2>
            }
        >
            <Head>
                <title>{course.title}</title>
            </Head>
            <div className="container mx-auto p-4">
                <form onSubmit={handleSubmit} className="space-y-4 card">
                    {/* Course Title */}
                    <div className="fold-sm">
                        <div>
                            <label htmlFor="title" className="block text-sm font-medium">
                                Title
                            </label>
                            <Input
                                id="title"
                                name='title'
                                value={data.title}
                                onChange={handleChange}
                                // {...register('title', { required: 'Title is required' })}
                                placeholder="Enter course title"
                                className="mt-1 block w-full"
                            />
                            {errors.title && (
                                <span className="text-red-500 text-sm">{errors.title}</span>
                            )}
                        </div>

                        {/* Course Text */}
                        <div>
                            <label htmlFor="text" className="block text-sm font-medium">
                                Course Text
                            </label>
                            <Input
                                id="text"
                                value={data.text}
                                name='text'
                                onChange={handleChange}
                                // {...register('text', { required: 'Course text is required' })}
                                placeholder="Enter course text"
                                className="mt-1 block w-full"
                            />
                            {errors.text && (
                                <span className="text-red-500 text-sm">{errors.text}</span>
                            )}
                        </div>
                    </div>

                    {/* Course Description */}
                    <div className="fold-sm">
                        <div>
                            <label htmlFor="description" className="block text-sm font-medium">
                                Description
                            </label>
                            <Textarea
                                name='description'
                                value={data.description}
                                onChange={handleChange}
                                id="description"
                                // {...register('description')}
                                placeholder="Enter course description"
                                className="mt-1 block w-full"
                            />
                        </div>

                        {/* Course Duration */}
                        <div>
                            <label htmlFor="duration" className="block text-sm font-medium">
                                Duration (in years)
                            </label>
                            <Input
                                name='duration'
                                onChange={handleChange}
                                id="duration"
                                value={data.duration}
                                type="number"
                                // {...register('duration', { required: 'Duration is required' })}
                                placeholder="Enter course duration"
                                className="mt-1 block w-full"
                            />
                            {errors.duration && (
                                <span className="text-red-500 text-sm">{errors.duration}</span>
                            )}
                        </div>
                    </div>

                    {/* Course Eligibility */}
                    <div className="fold-sm">
                        <div>
                            <label htmlFor="eligibility" className="block text-sm font-medium">
                                Eligibility
                            </label>
                            <Input
                                name='eligibility'
                                onChange={handleChange}
                                id="eligibility"
                                value={data.eligibility}
                                // {...register('eligibility', { required: 'Eligibility is required' })}
                                placeholder="Enter eligibility criteria"
                                className="mt-1 block w-full"
                            />
                            {errors.eligibility && (
                                <span className="text-red-500 text-sm">{errors.eligibility}</span>
                            )}
                        </div>

                        {/* Course Image URL */}
                        <div>
                            <label htmlFor="image" className="block text-sm font-medium">
                                Image URL (not mandatory)
                            </label>
                            <Input
                                id="image"
                                value={data.image}
                                name='image'
                                onChange={handleChange}
                                placeholder="Enter image URL"
                                className="mt-1 block w-full"
                            />
                        </div>
                    </div>

                    {/* Course Slug */}
                    <div className="fold-sm">
                        <div>
                            <label htmlFor="slug" className="block text-sm font-medium">
                                Slug
                            </label>
                            <Input
                                name='slug'
                                value={data.slug}
                                onChange={handleChange}
                                id="slug"
                                placeholder="Enter course slug"
                                className="mt-1 block w-full"
                            />
                            {errors.slug && (
                                <span className="text-red-500 text-sm">{errors.slug}</span>
                            )}
                        </div>

                        {/* Specializations */}
                        <div>
                            <label htmlFor="specializations" className="block text-sm font-medium">
                                Specializations (comma separated)
                            </label>
                            <Input
                                name='specializations'
                                onChange={(e) => {
                                    setspecs(e.target.value);
                                }}
                                value={specs}
                                id="specializations"
                                placeholder="Enter specializations"
                                className="mt-1 block w-full"
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className='flex gap-2'>
                        <Button disabled={processing} type="submit" className="mt-6 bg-blue-500 text-white">
                            Save
                        </Button>
                        <Button asChild variant={'outline'} className="mt-6 ">
                            <Link href={route('admincourses.index')}>Cancel</Link>
                        </Button>
                    </div>
                </form>
            </div>
        </Authenticated>
    );
};

export default CourseCreate;