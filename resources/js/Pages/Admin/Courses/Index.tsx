import React from 'react';
import { Course, PageProps } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Button } from '@/Components/ui/button';
import { Edit, Edit2, Trash2Icon } from 'lucide-react';

const CoursesIndex = ({ courses }: PageProps<{ courses: Course[] }>) => {
    const { success, error } = usePage().props.flash;

    return (
        <Authenticated
            header={
                <div className='w-full justify-between flex item items-center'>
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Courses
                    </h2>
                    <Link href={route('admincourses.create')}><Button>Add New</Button></Link>
                </div>
            }
        >
            <Head>
                <title>Courses Lists</title>
            </Head>
            <div>
                {success && <h1 className='w-full bg-green-100 text-green-700 p-3'>{success}</h1>}
                {error && <h1 className='w-full bg-green-100 text-green-700 p-3'>{error}</h1>}

                <div>
                    {courses.length === 0 ? (
                        <p>No courses available.</p>
                    ) : <div className='grid gap-2 mt-4 grid-cols-1 md:grid-cols-4 sm:grid-cols-2'>
                        {
                            courses.map((course) => (
                                <div key={course.id} className="course-item card">
                                    <img className='w-[40px]' src='/storage/logo-gold.png' />
                                    <h3 className='font-medium text-xl'>{course.title}</h3>
                                    <p>{course.description?.length ?? 0 > 80 ? course.description?.substring(0, 70) : course.description}</p>
                                    <div className='flex w-full justify-end'>
                                        <Link href={`/admin/courses/${course.id}`}><Edit size={30} className='text-blue-800 p-1 rounded-md ' /></Link>
                                        <Link href={`/admin/courses/${course.id}`} method="delete" as="button"><Trash2Icon size={30} className='text-red-800 p-1 rounded-md ' /></Link>
                                    </div>
                                </div>
                            ))
                        }</div>}
                </div>
            </div>
        </Authenticated>
    );
};

export default CoursesIndex;