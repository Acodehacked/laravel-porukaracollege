import ApplicationLogo from '@/Components/ApplicationLogo';
import HomeFooter from '@/Components/reusable/HomeFooter';
import HomeNavbar from '@/Components/reusable/HomeNavbar';
import HomeLoader from '@/Components/reusable/public/HomeLoader';
import LinkMenu from '@/Components/reusable/public/LinkMenu';
import Snackbar from '@/Components/ui/snackbar/snackbar';
import { SnackbarContextProvider } from '@/lib/SnackbarProvider';
import { Course } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { PropsWithChildren } from 'react';
import { FaBookmark, FaGraduationCap, FaHome, FaPhone } from 'react-icons/fa';
export default function Guest({ children, courses }: {children:React.ReactNode, courses?: Course[]}) {
    return <main className="flex flex-col">
            <SnackbarContextProvider>
                <HomeNavbar courses={courses} />
                <HomeLoader />
                {children}
                <HomeFooter />
                <div className="fixed z-[10] bottom-0 w-full left-0 right-0 sm:hidden grid grid-cols-4 bg-foreground text-white">
                    <LinkMenu text="Home" link="/"><FaHome /></LinkMenu>
                    <LinkMenu text="Courses" link="/Course"><FaGraduationCap /></LinkMenu>
                    <LinkMenu text="Admission" link="/Admission"><FaBookmark /></LinkMenu>
                    <LinkMenu text="Contact" link="/Contact"><FaPhone /></LinkMenu>
                </div>
                <Snackbar />
            </SnackbarContextProvider>
        </main>;
}
