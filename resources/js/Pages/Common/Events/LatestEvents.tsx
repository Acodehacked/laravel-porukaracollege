import { Button } from "@/Components/ui/button";
import { DEMOEVENTS } from "@/constants";
import Guest from "@/Layouts/GuestLayout";
import { Course, Event, PageProps } from "@/types";
import { Head, Link } from "@inertiajs/react";
import { format } from "date-fns";
import { ArrowRightCircleIcon, ArrowRightIcon } from "lucide-react";
import { BiDownload, BiInfoCircle, BiLinkExternal } from "react-icons/bi";
import { FaCheckCircle } from "react-icons/fa";

export default function Show({latestevents}:PageProps<{latestevents:{data:Event[]}}>) {
    console.log(latestevents)
    return <Guest>
        <Head>
            <title>Latest Events</title>
        </Head>
        <main className="min-h-[100vh] screen px-2 pt-[160px]">
            <div>
                <h1 className="text-[35px] mt-3 left-primary ps-2">Latest Events</h1>
            </div>
            <div className="mt-4 text-[18px] grid md:grid-cols-4 gap-3">
                {latestevents.data.map((event, index) => {
                    return <div key={index} className="flex flex-col p-3">
                        <img src={`/storage/images/small/${event?.images?.[0] ?? ''}`} width={400} height={300} alt="Graduate" />
                        <h2 className="text-[18px] mt-2 font-semibold">{event.title}</h2>
                        <p className="text-[12px] font-light">{format(new Date(event?.date ?? ''),'PPP')} &middot; {event.description}</p>
                        <p className="text-[14px]"></p>
                        <div className="flex justify-end">
                            {/* <Link className="text-foreground text-[15px] px-2 py-1 bg-zinc-300 rounded-sm" href={'/'}>Read more</Link> */}
                        </div>
                    </div>
                })}
            </div>
        </main>
    </Guest>
}