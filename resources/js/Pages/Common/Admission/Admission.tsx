import Guest from "@/Layouts/GuestLayout";
import SnackbarContext from "@/lib/Snackbar-context";
import { useContext, useRef, useState } from "react";
import { sendMail } from "./api";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/Components/ui/button";
import { Textarea } from "@/Components/ui/textarea";
import { COURSES } from "@/constants";
import { Popover, PopoverContent, PopoverTrigger } from "@/Components/ui/popover";
import { Input } from "@/Components/ui/input";
import { CheckCheckIcon, CheckCircle2Icon, ChevronsUpDown, DownloadCloud, LucideLoader } from "lucide-react";
import { Link } from "@inertiajs/react";

export default function inder() {
    const snackctx = useContext(SnackbarContext);
    const [open, setOpen] = useState(false);
    const [loading, setloading] = useState(false);
    const [uploaded, setuploaded] = useState(false);
    const [already, setalready] = useState(false);

    const [error, seterror] = useState<string | null>(null);
    const form = useRef<HTMLFormElement>(null);
    const [Name, setName] = useState<string>('');
    const [Phone, setPhone] = useState<string>('');
    const [Email, setEmail] = useState<string>('');
    const [Address, setAddress] = useState<string>('');
    const [Course, setCourse] = useState<string>('');

    const handleClick = async () => {
        setalready(false);
        const validation = getvalidate();
        if (validation) {
            setloading(true);
            // const response = await AddResponse({
            //     name: Name,
            //     mobile: Phone,
            //     email: Email,
            //     address: Address,
            //     appliedCourse: Course
            // })
            // if (response.success) {
            //     setuploaded(true);
            //     sendMail(Email, Name);
            // } else {
            //     setalready(true);
            // }
            // form.current?.reset();
            // setloading(false);
        }
        // snackctx.displayMsg('Application Will Available Soon')
    }
    const getvalidate = () => {
        seterror(null)
        if (Name == '') {
            snackctx.displayMsg("Please enter your name");
            return false;
        }
        if (Email == '') {
            snackctx.displayMsg("Please enter your Email");
            return false;
        }
        if (Phone == null || Phone.length < 9) {
            snackctx.displayMsg("Please enter your phone");
            return false;
        }

        if (Address == '') {
            snackctx.displayMsg("Please enter your Adress");
            return false;
        }
        if (Course == '') {
            snackctx.displayMsg("Please Select Course you are applying for");
            return false;
        }
        return true;
    }
    return <Guest>
        <main>
            <div className="bg-foreground h-[350px]">

            </div>
            <div className="screen mt-[-150px] flex md:flex-row flex-col">

                <div className="w-full  px-6">
                    <form ref={form} className="px-4 bg-white mb-3 screen-md py-6 rounded-xl shadow-xl relative">
                        <div className='absolute z-[1] sm:rounded-t-none sm:rounded-b-xl rounded-xl bg-yellow-500 sm:top-0 top-[-40px] right-[2rem]'>
                            <img className="p-0 " src={'/storage/graduatehat.png'} alt="" height={80} width={80} />
                        </div>
                        <div className="flex items-center gap-2">
                            <img className="p-0 " src={'/storage/logo-gold.png'} alt="" height={100} width={100} />
                            <h3 className="text-[30px] font-semibold mt-3 mb-4">Apply For A Course</h3>
                        </div>
                        <div className='bg-green-100 text-green-900 px-6 py-3 rounded-md mt-2 mb-2 text-[13px]'>
                            Admissions Open Admissions Open for BCA, BCOM with Finance and Taxation, BCOM with Computer Application, BA English Contact: 9446249412
                        </div>
                        <div className="flex md:flex-row flex-col gap-3">
                            <div className="mt-2 px-2 w-full">
                                <label className="text-[15px]">Name</label>
                                <Input value={Name} onChange={(e) => {
                                    setName(e.currentTarget.value)
                                }} type="text" placeholder="Enter your name" />
                            </div>
                            <div className="mt-2 px-2 w-full">
                                <label className="text-[15px]">Email</label>
                                <Input value={Email} onChange={(e) => {
                                    setEmail(e.currentTarget.value)
                                }} type="email" placeholder="Enter your Email Address" />
                            </div>
                        </div>
                        <div className="flex md:flex-row flex-col mt-2 gap-3">
                            <div className="mt-2 px-2 w-full">
                                <label className="text-[15px]">Phone</label>
                                <div className="flex">
                                    <Input type="text" className="max-w-[50px] font-semibold" value={'+91'} readOnly />
                                    <Input type="number"
                                        value={Phone} onChange={(e) => {
                                            setPhone(e.currentTarget.value)
                                        }} className="w-full ms-2" placeholder="Enter your Phone" />
                                </div>
                            </div>
                            <div className="mt-2 px-2 flex flex-col w-full">
                                <label className="text-[15px]">Select Course</label>
                                <Popover open={open} onOpenChange={setOpen}>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant="outline"
                                            role="combobox"
                                            aria-expanded={open}
                                            className="w-full justify-between"
                                        >
                                            {Course != ''
                                                ? Course
                                                : "Select Course..."}
                                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="max-w-[350px] w-full p-2 gap-1 z-[99] flex flex-col">
                                        {COURSES.map((item, index) => {
                                            return <div key={index} onClick={() => {
                                                setCourse(item.text.replace('*', ""));
                                                setOpen(false);
                                            }} className='w-full cursor-pointer px-3 py-2 hover:bg-zinc-100 rounded-sm'>
                                                <h1 className='text-[14px] font-medium'>{item.title}</h1>
                                            </div>
                                        })}
                                    </PopoverContent>
                                </Popover>
                            </div>
                        </div>
                        <div className="flex md:flex-row flex-col mt-2 gap-3">
                            <div className="mt-2 px-2 w-full">
                                <label className="text-[15px]">Address</label>
                                <Textarea value={Address} onChange={(e) => {
                                    setAddress(e.currentTarget.value)
                                }} placeholder="Enter your Address" />
                            </div>
                        </div>
                        <div className='flex flex-col justify-between items-center gap-2'>
                            <div className='flex sm:flex-row flex-col justify-end gap-4 mt-3'>

                                <Button variant={'outline'} asChild><Link href={'/storage/PorukaraApplicationForm.pdf'}>Download Application Form &nbsp;<DownloadCloud size={15} className='text-[13px]' /></Link></Button>
                                <Button disabled={loading} className='flex items-center gap-2 ' onClick={handleClick} type='button'>{loading ? 'Submitting' : 'Apply for Course'}{loading ? <LucideLoader className='animate-spin' /> : <CheckCheckIcon />}</Button>
                            </div>
                            <span className='text-[12px] text-blue-900 font-semibold mt-2'>You can also fill Application Form and send it to porukaracollege@gmail.com</span>
                        </div>
                    </form>
                    <AnimatePresence>
                        {
                            uploaded && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className='bg-black/50 fixed top-0 bottom-0 left-0 right-0 px-5 flex items-center justify-center z-[9999]'>
                                <div className='max-w-[500px] min-h-[150px] justify-center w-full flex flex-col items-center rounded-sm bg-white px-3 py-4'>
                                    <div className='w-full flex flex-col items-center gap-2'>
                                        <img src={'/storage/logo-gold.png'} width={60} className='mt-2 mb-3' height={60} alt="" />
                                        <CheckCircle2Icon size={50} className="text-green-500" />
                                        <h2 className="text-center text-green-800 font-semibold mt-4">Admission Details Submitted Successfully</h2>
                                        <Button onClick={() => {
                                            setuploaded(false);
                                        }} className='mt-2' variant={'outline'}>Close</Button>
                                    </div>
                                </div>
                            </motion.div>
                        }
                    </AnimatePresence >
                    <AnimatePresence>
                        {
                            already && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className='bg-black/50 fixed top-0 bottom-0 left-0 right-0 px-5 flex items-center justify-center z-[9999]'>
                                <div className='max-w-[500px] min-h-[150px] justify-center w-full flex flex-col items-center rounded-sm bg-white px-3 py-4'>
                                    <div className='w-full flex flex-col items-center gap-2'>
                                        <img src={'/storage/logo-gold.png'} width={60} className='mt-2 mb-3' height={60} alt='' />
                                        <CheckCircle2Icon size={50} className="text-green-500" />
                                        <h2 className="text-center text-green-800 font-semibold mt-4">Details Already Submitted with Same Email id or Phone number</h2>
                                        <Button onClick={() => {
                                            setalready(false);
                                        }} className='mt-2' variant={'outline'}>Close</Button>
                                    </div>
                                </div>
                            </motion.div>
                        }
                    </AnimatePresence >
                    <p className="w-full text-center  pt-2 mb-10  text-[15px]">
                        Admissions Open
                        Admissions Open for BCA, BCOM with Finance and Taxation, BCOM with Computer Application, BA English Contact: 9446249412
                    </p>
                </div>

            </div>
            {/* <div className="flex bg-zinc-50 justify-end screen p-3 mb-4">
            <Link className="flex justify-center p-2 gap-2 rounded-xl bg-white border-[0.01rem] border-foreground/30 items-center" href={'/AboutCollege/Management'}>
                <h2 className="font-semibold">Management</h2>
                <ChevronRight />
            </Link>
        </div> */}
        </main>
    </Guest>
}