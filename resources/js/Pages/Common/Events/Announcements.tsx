import { Button } from "@/Components/ui/button";
import { DEMOEVENTS } from "@/constants";
import Guest from "@/Layouts/GuestLayout";
import { Course } from "@/types";
import { Head, Link } from "@inertiajs/react";
import { ArrowRightCircleIcon, ArrowRightIcon } from "lucide-react";
import { BiDownload, BiInfoCircle, BiLinkExternal } from "react-icons/bi";
import { FaCheckCircle } from "react-icons/fa";

export default function Show() {
    return <Guest>
        <Head>
            <title>Announcements</title>
        </Head>
        <main className="min-h-[100vh] screen px-2 pt-[160px]">
            <div>
                <h1 className="text-[35px] mt-3 left-primary ps-2">Latest Events</h1>
            </div>
            <div className="mt-4 text-[18px] grid md:grid-cols-4 gap-3">
                {DEMOEVENTS.map((event, index) => {
                    return <div key={index} className="flex flex-col p-3">
                        <img src={event.image} width={400} height={300} alt="Graduate" />
                        <h2 className="text-[26px] mt-2 font-semibold">{event.title}</h2>
                        <p className="text-[17px]">{event.desc}</p>
                        <div className="flex justify-end">
                            {/* <Link className="text-foreground text-[15px] px-2 py-1 bg-zinc-300 rounded-sm" href={'/'}>Read more</Link> */}
                        </div>
                    </div>
                })}
            </div>
        </main>
    </Guest>
}