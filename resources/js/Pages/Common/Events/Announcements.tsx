import { Button } from "@/Components/ui/button";
import { DEMOANNOUNCEMENTS, DEMOEVENTS } from "@/constants";
import Guest from "@/Layouts/GuestLayout";
import { Course } from "@/types";
import { Head, Link } from "@inertiajs/react";
import { ArrowRightCircleIcon, ArrowRightIcon, Calendar } from "lucide-react";
import { BiDownload, BiInfoCircle, BiLinkExternal } from "react-icons/bi";
import { FaCheckCircle } from "react-icons/fa";
import {motion} from 'motion/react';
import { cn } from "@/lib/utils";

export default function Show() {
    return <Guest>
        <Head>
            <title>Announcements</title>
        </Head>
        <main className="min-h-[100vh] screen px-2 pt-[160px]">
            <h1 className="text-[30px] left-primary sm:mt-5 mb-3 px-3">Announcements</h1>
            <div className="flex flex-wrap justify-end gap-3 px-3 w-full">
                <Tab><span>All Time</span></Tab>
                <Tab><span>This Month</span></Tab>
                <Tab active ><span>This Year</span></Tab>
            </div>
            <div className="mt-4 text-[18px] mb-5 grid md:grid-cols-2 grid-cols-1 gap-3">
                {DEMOANNOUNCEMENTS.map((item, i) => {
                    return <motion.div initial={{ opacity: 0, x: -100 }}
                        animate={{ x: 0 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.25,
                            delay: (i + 1) * 0.10
                        }} key={i} className='anouncement_card shadow-xl flex items-start mx-2 mt-2 rounded-xl gap-2 p-3 bg-white'>
                        <div className='p-2 max-w-[100px] w-full min-h-[130px] flex justify-center items-center flex-col m-2 bg-primary rounded-xl'>
                            <Calendar className='h-[20px] text-white' size={20} />
                            <h2 className='text-[35px] m-0 p-0 h-[35px] text-white'>{item.day}</h2>
                            <h6 className="text-[22px] m-0 p-0 text-white/70">{item.month}</h6>
                        </div>
                        <div className='w-full mt-2'>
                            <h2 className="text-[19px] font-semibold mb-4">{item.title}</h2>
                            <p className='font-medium text-[13px] pt-4 border-t-[0.01rem] border-t-primary pb-2'>{item.description}
                            </p>
                            {/* <div className='w-full flex justify-end p-2 border-t-[0.01rem] border-t-primary'>
                            <Link className='text-foreground hover:bg-zinc-300/50 rounded-sm px-2 py-1 font-semibold text-[14px]' href={'/Latest-Events'} >Read More..</Link>
                        </div> */}
                        </div>
                    </motion.div>
                }
                )}
            </div>
        </main>
    </Guest>
}

const Tab = ({ children, active, type, dark }: { children: React.ReactNode, active?: boolean, type?: "sm" | 'lg', dark?: boolean }) => (<div className={cn("px-3 py-1 rounded-xl cursor-pointer select-none border-[0.03rem] border-primary text-primary", active ? 'bg-primary text-white' : 'hover:bg-zinc-300', type == 'sm' ? 'text-[12px]' : '', dark && active ? 'bg-foreground text-white border-foreground' : '', dark && !active ? 'border-foreground text-foreground' : '')}>
    {children}
</div>)