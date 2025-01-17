import { Input } from '@/Components/ui/input';
import { cn } from '@/lib/utils';
import { useForm, usePage } from '@inertiajs/react';
import React, { useEffect, useState } from "react";
import ProgressBar from 'react-customizable-progressbar';
import { Button } from '../ui/button';

export default function ImageUploader({ setlogoUploaded,def }: { setlogoUploaded:  React.Dispatch<React.SetStateAction<string | null>>, def?: string | null }) {
    const [logo, setlogo] = useState<string | null>(null)
    const [loaded, setloaded] = useState(false)
    const { data, setData, post, progress, errors, clearErrors } = useForm({
        'image': null as File | null,
    })
    const submit = () => {
        clearErrors()
        post('/image-upload', {
            preserveState: true,
            preserveScroll: true,
            onSuccess: (e) => {
                setloaded(true)
                setlogoUploaded(e.props.flash.success ?? '')
                console.log('Success fully')
            },
            onError: () => {
                setloaded(false)
                console.log("error")
            }
        })
    }

    // image-upload
    return <div id="23" className="flex gap-2 p-3 border-[0.01rem] mt-2 border-zinc-200 rounded-md">
        {errors.image && <div className='bg-red-100 rounded-md p-4'>
            <h3 className='font-medium'>{errors.image}</h3>
        </div>}

        <div className='img-box relative h-[100px] w-[200px]'>
            <div className={cn('flex justify-center bg-black/50 rounded-xl items-center absolute top-0 left-0 w-full h-full z-[2]', progress ? 'flex' : 'hidden')}>
                <ProgressBar
                    strokeColor='#0070ff'
                    progress={progress?.percentage ?? 0}
                    strokeWidth={6}
                    trackStrokeColor='#fff'
                    trackStrokeWidth={5}
                    radius={20} />
            </div>
            {def ? <img src={logo ? logo : `/storage/images/small/${def}`} alt="logo" className={cn("w-auto h-[100px] object-contain absolute left-[50%] translate-x-[-50%] top-0 z-[1]")} /> : <img src={logo ? logo : '/storage/logo-black.png'} alt="logo" className={cn("w-auto h-[100px] object-contain absolute left-[50%] translate-x-[-50%] top-0 z-[1]")} />}
        </div>
        <div className="max-w-[800px] w-full flex flex-col gap-2 items-start">
            <Input name='image' onChange={(e) => {
                if (e.target.files) {
                    setloaded(false)
                    setData('image', e.target.files[0])
                    setlogo(URL.createObjectURL(e.target.files[0]));
                    // setTimeout(()=>{
                    //     submit()
                    // },600)
                }
            }} accept=".jpg,.png,.webp" id="picture" type="file" />
            <span className='text-[10px]'>Please click upload if the picture is selected</span>
            {/* <Progress value={progress?.percentage} className="w-[60%]" /> */}
            <Button type='button' disabled={loaded} onClick={submit} variant={'link'}>{loaded ? 'Uploaded' : 'Upload'}</Button>
        </div>
    </div>
}