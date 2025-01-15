import ApplicationLogo from '@/Components/ApplicationLogo';
import HomeFooter from '@/Components/reusable/HomeFooter';
import HomeNavbar from '@/Components/reusable/HomeNavbar';
import HomeLoader from '@/Components/reusable/public/HomeLoader';
import LinkMenu from '@/Components/reusable/public/LinkMenu';
import Snackbar from '@/Components/ui/snackbar/snackbar';
import { SnackbarContextProvider } from '@/lib/SnackbarProvider';
import { Link, usePage } from '@inertiajs/react';
import { PropsWithChildren } from 'react';
import { FaBookmark, FaGraduationCap, FaHome, FaPhone } from 'react-icons/fa';
export default function BLank({ children }: PropsWithChildren) {
    return <main className="flex flex-col">
        <SnackbarContextProvider>
            <HomeLoader />
            <main className='p-3 flex flex-col justify-center min-h-screen'>
                {children}
            </main>
            <Snackbar />
        </SnackbarContextProvider>
    </main>;
}
