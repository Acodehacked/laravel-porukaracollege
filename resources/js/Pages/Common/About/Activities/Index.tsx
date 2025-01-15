import { ACTIVITIES } from "@/constants";
import Guest from "@/Layouts/GuestLayout";
import { Head, Link } from "@inertiajs/react";

export default function index() {
    return <Guest>
        <Head>
            <title>Activities</title>
        </Head>
        <main style={{ background: 'url("/storage/bg3.png") no-repeat', backgroundSize: 'cover' }} className="min-h-[100vh] pt-[100px]">
            <div className='screen  flex flex-col items-center gap-2 mt-[50px] p-4'>
                <div className='flex justify-center items-center w-full ' >
                    <h2 className='text-[30px] mt-4 mb-3 font-bold text-white'>Activities</h2>
                </div>
                <div className='grid md:grid-cols-2 grid-cols-1 justify-center w-full gap-5'>
                    {ACTIVITIES.map((item, index) => {
                        return <Link prefetch href={item.path} className='mb-3 select-none cursor-pointer text-center min-w-[50px] w-full px-5 py-4 rounded-sm mt-2 text-[18px] bg-white shadow-lg text-foreground' key={index}>
                            <h4 className='text-[19px] font-semibold mb-1'>{item.title}</h4>
                            <hr />
                            <p className='text-[15px] mt-2'>{item.desc}</p>
                        </Link>
                    })}
                </div>

            </div>
        </main>
    </Guest>
}