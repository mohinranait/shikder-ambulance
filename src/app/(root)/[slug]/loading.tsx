
import { Skeleton } from '@/components/ui/skeleton';
export default function Loading() {
    return (
        <div className="container mx-auto p-4">

            <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                <Skeleton className="h-8 w-64 mb-2 md:mb-0" />
                <div className="flex space-x-4">
                    <Skeleton className="h-8 w-24" />
                    <Skeleton className="h-8 w-24" />
                </div>
            </div>

            {/* Main Image and Helpline Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <Skeleton className="h-64 w-full" />
                <div className="space-y-4">
                    <Skeleton className="h-12 w-3/4" />
                    <Skeleton className="h-10 w-1/2" />
                </div>
            </div>

            {/* Service Details Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-4">
                    <Skeleton className="h-6 w-1/2" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-6 w-1/3" />
                    {[...Array(4)].map((_, index) => (
                        <Skeleton key={index} className="h-4 w-full" />
                    ))}
                    <Skeleton className="h-6 w-1/3" />
                    {[...Array(5)].map((_, index) => (
                        <Skeleton key={index} className="h-4 w-full" />
                    ))}
                </div>

                {/* Sidebar Section */}
                <div className="space-y-4">
                    <Skeleton className="h-6 w-1/2" />
                    {[...Array(4)].map((_, index) => (
                        <div key={index} className="flex space-x-2">
                            <Skeleton className="h-10 w-10" />
                            <div className="space-y-1 flex-1">
                                <Skeleton className="h-4 w-3/4" />
                                <Skeleton className="h-3 w-1/2" />
                            </div>
                        </div>
                    ))}
                    <Skeleton className="h-10 w-full" />
                </div>
            </div>

            {/* Contact Section */}
            <div className="mt-6 space-y-2">
                <Skeleton className="h-6 w-1/3" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
            </div>
        </div>
    );
}
