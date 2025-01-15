import Course from "@/Components/reusable/public/Course"
import { COURSES } from "@/constants"
import Guest from "@/Layouts/GuestLayout";
import { Course as CourseType } from "@/types"
import { Link } from "@inertiajs/react"

export default function Index({ courses }: { courses: CourseType[] }) {
    return <Guest>
        <main>
            <div className="flex mt-[100px] items-center jusify-center font-bold text-[40px] px-0 h-[250px] text-foreground justify-between relative overflow-hidden bg-zinc-50">
                <div className="flex relative w-full z-[3] md:flex-row flex-col justify-center items-center h-[auto]">
                    <div className="flex flex-col">
                        <h3 className="text-link-dark no-hover">Courses We Offer</h3>
                        <p className="text-[15px] font-medium">Explore different courses that we are providing</p>
                    </div>
                    <img className="p-0 " src={'/storage/graduatehat.png'} alt="" height={200} width={200} />

                </div>
            </div>
            <div className="flex bg-zinc-200 w-full">
                <div className="flex screen flex-col md:flex-row min-h-[200vh] ">
                    <div className="px-2 max-w-[100%] md:min-w-[100px] w-full md:max-w-[30%] pt-3">
                        <div className="p-2 sticky top-[6rem] w-full bg-white py-5">
                            <div className="flex flex-col gap-2">
                                {courses.map((item, index) => {
                                    return <a key={index} className="hover:translate-x-1 hover:text-primary transition-all duration-150 p-2 border-b-2 border-b-black/10 font-semibold" href={`#${item?.slug}`} >{item?.title}</a>
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="w-full mb-3 bg-white mt-3 flex flex-col gap-[20px]">
                        {courses.map((item, index) => {
                            return <Course key={index} duration={item?.duration} id={item?.slug} applylink={item?.link || '/'} eligibility={item?.eligibility || 'Plus Two'} title={item?.title || ''} image={item?.image}>
                                {item?.description || ''}
                            </Course>
                        })}
                    </div>
                </div>
            </div>
        </main>
    </Guest>;
}