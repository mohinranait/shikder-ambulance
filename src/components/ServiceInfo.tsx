import { BookmarkCheck, Clock, Phone } from 'lucide-react'
import React from 'react'

const ServiceInfo = () => {
    return (
        <div className="grid sm:grid-cols-3 gap-6 pt-8">
            <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/20">
                    <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                    <p className="font-semibold">Quick Response  (10-20 Min) </p>
                    <p className="text-sm text-muted-foreground">
                        Dhaka to all districts
                    </p>
                </div>
            </div>
            <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/20">

                    <BookmarkCheck className="h-5 w-5 text-green-600" />
                </div>
                <div>
                    <p className="font-semibold">Pre Booking</p>
                    <p className="text-sm text-muted-foreground">
                        All Districts to Dhaka
                    </p>
                </div>
            </div>
            <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent">
                    <Phone className="h-5 w-5 text-accent-foreground" />
                </div>
                <div>
                    <p className="font-semibold">24/7 Available</p>
                    <p className="text-sm text-muted-foreground">Always ready</p>
                </div>
            </div>
        </div>
    )
}

export default ServiceInfo