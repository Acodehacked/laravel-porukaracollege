'use client'
import { router } from '@inertiajs/react'
import { cn } from "@/lib/utils";
import { Link } from "@inertiajs/react";
import { usePage } from '@inertiajs/react';

const LinkMenu = ({ link, text, children }: { link: string, text: string, children: React.ReactNode }) => {
  const { url } = usePage();
  const path = url;
  return <Link href={link} className={cn("flex rounded-xl mb-3 mt-[-20px] bg-primary-dark mx-1 flex-col items-center gap-1 text-[15px] font-bold py-2", path == link ? 'bg-primary' : 'bg-foreground')}>
    <div className="rounded-full p-1"> {children}</div>
    <h4>{text}</h4>
  </Link>
}

export default LinkMenu