import { Phone } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import WhatsAppIcon from '../svg/WhatsAppIcon'

const BottomSection = () => {
    return (
        <div className=' fixed bottom-0 left-0 right-0 grid lg:hidden grid-cols-2'>
            <Link href={'https://wa.me/+8801710060020'} className='w-full py-2.5 flex items-center justify-center bg-[#075E54] text-white gap-2'>
                <WhatsAppIcon size={24} />
                WhatsApp
            </Link>
            <Link href={'tel:01710060020'} className='w-full py-2.5 flex items-center justify-center gap-2 bg-[#0a993e] text-white'>
                <Phone />
                Call Now
            </Link>
        </div>
    )
}

export default BottomSection