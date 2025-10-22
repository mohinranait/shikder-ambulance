import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Clock, Notebook, Phone } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const AdditionalInfo = () => {
    return (
        <Card className='py-3 space-y-3'>
            <CardContent className='pb-0 px-4'>
                <p className='text-lg pb-3 font-semibold text-black'>Emergency Helpline</p>
                <Link href={'tel:01710060020'}>
                    <span className='w-full border border-gray-200 hover:bg-gray-100 py-2 px-3 rounded-md text-left flex items-center gap-2 '>
                        <Phone size={14} />
                        01710060020
                    </span></Link>
            </CardContent>
            <Separator />
            <CardContent className='pb-0 px-4'>
                <p className='text-lg pb-3 font-semibold flex items-center gap-2 text-black'> <Clock size={18} /> Open: 24/7 Hours</p>
                <ul className='space-y-2'>
                    <li className='flex items-center justify-between'>
                        <span>TUE</span>
                        <span>Open 24 Hrs</span>
                    </li>
                    <li className='flex items-center justify-between'>
                        <span>WED</span>
                        <span>Open 24 Hrs</span>
                    </li>
                    <li className='flex items-center justify-between'>
                        <span>THU</span>
                        <span>Open 24 Hrs</span>
                    </li>
                    <li className='flex items-center justify-between'>
                        <span>FRI</span>
                        <span>Open 24 Hrs</span>
                    </li>
                    <li className='flex items-center justify-between'>
                        <span>SAT</span>
                        <span>Open 24 Hrs</span>
                    </li>
                    <li className='flex items-center justify-between'>
                        <span>SUN</span>
                        <span>Open 24 Hrs</span>
                    </li>
                    <li className='flex items-center justify-between'>
                        <span>MIN</span>
                        <span>12:00 am - 11:59 pm</span>
                    </li>
                </ul>
            </CardContent>
            <Separator />
            <CardContent className='pb-0 px-4'>
                <p className='text-lg pb-3 font-semibold text-black flex items-center gap-2'> <Notebook size={18} /> Quick Booking</p>
                <Link href={'/contact'}>
                    <Button className='w-full flex items-center gap-2 '>
                        <Notebook size={14} />
                        Booking Now
                    </Button></Link>
            </CardContent>

        </Card >
    )
}

export default AdditionalInfo