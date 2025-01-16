import { cn } from '@/lib/utils';
import { InertiaLinkProps, Link } from '@inertiajs/react';

export default function NavLink({
    active = false,
    className = '',
    children,
    ...props
}: InertiaLinkProps & { active: boolean }) {
    return (
        <Link
            {...props}
            className={
                'inline-flex items-center p-4 border-b-2 px-1 pt-1 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none ' +
                (active
                    ? 'border-indigo-400 text-gray-900 focus:border-indigo-700'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 focus:border-gray-300 focus:text-gray-700') +
                className
            }
        >
            {children}
        </Link>
    );
}

export function AdminNavbarLink({route, active,children }: {route: string,active:boolean, children: React.ReactNode }){
    return <Link className={cn('px-4 py-3 border-none flex items-center gap-2', active ? 'bg-[#2986b8] text-white/80 border-foreground' : 'text-white/50')} href={route} >
        {children}
    </Link>
}