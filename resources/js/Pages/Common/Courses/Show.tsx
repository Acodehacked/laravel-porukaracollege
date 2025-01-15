import { Button } from "@/Components/ui/button";
import Guest from "@/Layouts/GuestLayout";
import { Course } from "@/types";
import { Head, Link } from "@inertiajs/react";
import { ArrowRightCircleIcon, ArrowRightIcon } from "lucide-react";
import { BiDownload, BiInfoCircle, BiLinkExternal } from "react-icons/bi";
import { FaCheckCircle } from "react-icons/fa";

export default function Show({ course, courses }: { course: Course, courses: Course[] }) {
    var otheru = courses.filter((item) => item.title != course?.title && item.eligibility == '+2 or Equivalent Course');
    var otherp = courses.filter((item) => item.title != course?.title && item.eligibility != '+2 or Equivalent Course');
    return <Guest>
        <Head>
            <title>{course.title}</title>
        </Head>
        <main className=" relative pb-[60px] bg-foreground">
            {/* <h2 className="text-[30px]">{params.name}</h2> */}
            <div className="min-h-[650px] w-full relative">
                <div className="z-[1] relative">
                    <div className="md:absolute relative flex flex-col items-start sm:pt-[200px] pt-[140px] left-0 right-0 bottom-0 top-0 bg-gradient-to-l via-foreground/80 from-foreground/40 to-foreground z-[3]">
                        <div className="flex justify-between flex-col md:flex-row screen">
                            <div className="flex flex-col items-start md:p-0 p-5 w-full">
                                <img src={'/storage/graduatehat.png'} height={80} width={80} alt="Logo" />
                                <h3 className="text-white/80">{course?.duration} Course</h3>
                                <h2 className="text-white text-[30px] md:text-[39px] font-semibold">{course?.title}</h2>
                                <div className='flex gap-3 md:flex-row flex-row mt-6 px-4 pb-6'>
                                    {/* /storage/applicationform.pdf */}
                                    <Button variant={'outline'} asChild={true} className='float-right min-w-[200px]'>
                                        <a download={'application.pdf'} href={'/storage/PorukaraApplicationForm.pdf'}>Download Application Form</a></Button>
                                    <Button variant={'default'} asChild={true} className='sm:min-w-[200px]'>
                                        <Link href={`/Admission?appliedCourse=${course?.title}`}>Apply Now&nbsp;<BiLinkExternal /></Link></Button>
                                </div>
                            </div>
                            <div className="w-full flex justify-center items-center">
                                {
                                    course?.specializations?.length != undefined ? <div className=' bg-zinc-50 w-full max-w-[460px] mt-3 rounded-sm gap-1 flex flex-col '>
                                        {course?.specializations?.length != undefined ? <h2 className='py-2 font-semibold text-zinc-500 px-3'>Specializations</h2> : ""}
                                        <hr />
                                        <div className="flex flex-col gap-2 ps-2 pe-2 md:pe-10 mt-2 pb-3">
                                            {course?.specializations?.map((spec, index) => {
                                                return <div key={index} className='flex ms-2 items-center gap-2'>
                                                    <FaCheckCircle size={15} className='text-green-600' />
                                                    <h2>{spec}</h2>
                                                </div>
                                            })}</div>
                                    </div> : <h3 className="text-zinc-100 flex items-center gap-4"><BiInfoCircle /> No Specializations</h3>
                                }
                            </div>
                        </div>
                        {course?.title.includes('M') ? '' : <div className="flex flex-col text-white rounded-xl mb-5 p-3 screen w-full  mt-6">
                            <h3 className="text-white/60 py-2 text-[20px]">Available Minors</h3>
                            <div className="flex me-auto minors select-none gap-x-10 gap-y-3 text-[15px] w-full  bg-blue-900/30 rounded-sm sm:rounded-full flex-wrap sm:w-auto py-2 text-white px-5">
                                <span><ArrowRightCircleIcon size={10} /> Computer Application</span>
                                <span><ArrowRightCircleIcon size={10} /> English</span>
                                <span><ArrowRightCircleIcon size={10} /> Hindi</span>
                                <span><ArrowRightCircleIcon size={10} /> Malayalam</span>
                                <span><ArrowRightCircleIcon size={10} /> Commerce</span>
                            </div>
                        </div>}
                    </div>
                    <img className="z-[2] hidden sm:block w-full h-full max-h-[650px] object-cover" src="/storage/porukara.jpeg" height={800} width={1000} alt="/storage/porukara.jpeg" />
                </div>



                {/* <Course specializations={course?.specializations} duration={course?.duration || '1 year'} id={course?.title} applylink={course?.link || '/'} eligibility={course?.eligibility || 'Plus Two'} title={course?.title || ''} image={course?.image}>
                {course?.description || ''}
            </Course> */}
            </div>
            <div className="flex flex-col bg-zinc-200 pb-8 px-3 overflow-visible">
                <div className="screen ">
                    <div className="mt-10 mb-2">
                        <h2>UG Courses</h2>
                    </div>
                    <div className="mt-2 md:px-1 px-4 w-full md:overflow-visible overflow-hidden pt-2 pb-3 hover-cards-p grid gap-3 md:grid-cols-5 sm:grid-cols-2 grid-cols-1">
                        {otheru.map((item, index) => {
                            return <Link href={`/Course/${item.slug}`} key={index} className="bg-white hover-cards rounded-md relative shadow-sm hover:shadow-xl p-3">
                                <div className="flex flex-col justify-start items-start gap-3">
                                    <img src={'/storage/logo-gold.png'} width={80} height={80} alt="" />
                                    <div className="flex flex-col">
                                        <h2 className="text-[17px] mt-1 font-semibold">{item.title}</h2>
                                        <p className=" text-black text-[12px] mt-2 w-max px-3 py-1 rounded-sm border-[0.01rem] border-zinc-200">{item.duration}</p>
                                    </div>
                                    <div className="absolute flex gap-2 bottom-[10px] right-[10px] z-[1]">
                                        <div className=" text-foreground text-[12px] w-max pb-2 pe-2 rounded-full">
                                            <ArrowRightIcon size={20} />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        })}
                    </div>
                    <div className="mt-10 mb-2">
                        <h2>PG Courses</h2>
                    </div>
                    <div className="mt-2 md:px-1 px-4 w-full md:overflow-visible overflow-hidden pt-2 pb-3 hover-cards-p grid gap-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
                        {otherp.map((item, index) => {
                            return <Link href={`/Course/${item.slug}`} key={index} className="bg-white hover-cards rounded-md relative shadow-sm hover:shadow-xl p-3">
                                <div className="flex justify-start items-start gap-3">
                                    <img src={'/storage/logo-gold.png'} width={80} height={80} alt="" />
                                    <div className="flex flex-col">
                                        <h2 className="text-[17px] mt-1 font-semibold">{item.title}</h2>
                                        <p className=" text-black text-[12px] mt-2 w-max px-3 py-1 rounded-sm border-[0.01rem] border-zinc-200">{item.duration} years</p>
                                    </div>
                                    <div className="absolute flex gap-2 bottom-[10px] right-[10px] z-[1]">
                                        <div className=" text-foreground text-[12px] w-max pb-2 pe-2 rounded-full">
                                            <ArrowRightIcon size={20} />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        })}
                    </div>
                </div>
            </div>
        </main>
    </Guest>
}