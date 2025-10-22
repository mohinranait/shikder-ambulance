"use client";

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function PostFormSkeleton() {
    return (
        <div className="min-h-screen bg-gray-50 py-10">
            <div className="max-w-7xl mx-auto space-y-8 px-4">
                {/* Header */}
                <div>
                    <div className="flex items-center justify-between mb-4">
                        <div className="space-y-2">
                            <Skeleton className="bg-gray-200 h-7 w-48 " />
                            <Skeleton className="bg-gray-200 h-4 w-72 " />
                        </div>
                        <div className="flex gap-3">
                            <Skeleton className="bg-gray-200 h-10 w-24 rounded-md" />
                            <Skeleton className="bg-gray-200 h-10 w-32 rounded-md" />
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <Skeleton className="bg-gray-200 h-6 w-20 rounded-full" />
                        <Skeleton className="bg-gray-200 h-6 w-24 rounded-full" />
                    </div>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                    {/* Main content */}
                    <div className="xl:col-span-2 space-y-6">
                        {/* Post Details */}
                        <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
                            <CardHeader className="pb-4">
                                <Skeleton className="bg-gray-200 h-5 w-40" />
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <Skeleton className="bg-gray-200 h-10 w-full" />
                                <Skeleton className="bg-gray-200 h-10 w-full" />
                            </CardContent>
                        </Card>

                        {/* Content Editor */}
                        <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
                            <CardHeader className="pb-4">
                                <Skeleton className="bg-gray-200 h-5 w-32" />
                            </CardHeader>
                            <CardContent>
                                <Skeleton className="bg-gray-200 h-64 w-full" />
                            </CardContent>
                        </Card>

                        {/* SEO Settings */}
                        <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
                            <CardHeader className="pb-4">
                                <Skeleton className="bg-gray-200 h-5 w-44" />
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <Skeleton className="bg-gray-200 h-10 w-full" />
                                <Skeleton className="bg-gray-200 h-20 w-full" />
                                <Skeleton className="bg-gray-200 h-10 w-full" />
                            </CardContent>
                        </Card>

                        {/* Publish Schedule */}
                        <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
                            <CardHeader className="pb-4">
                                <Skeleton className="bg-gray-200 h-5 w-48" />
                            </CardHeader>
                            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Skeleton className="bg-gray-200 h-10 w-full" />
                                <Skeleton className="bg-gray-200 h-10 w-full" />
                            </CardContent>
                        </Card>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Layout Options */}
                        <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
                            <CardHeader>
                                <Skeleton className="bg-gray-200 h-5 w-40" />
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <Skeleton className="bg-gray-200 h-10 w-full" />
                                <Skeleton className="bg-gray-200 h-10 w-full" />
                            </CardContent>
                        </Card>

                        {/* Post Settings */}
                        <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
                            <CardHeader>
                                <Skeleton className="bg-gray-200 h-5 w-36" />
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <Skeleton className="bg-gray-200 h-10 w-full" />
                                <Skeleton className="bg-gray-200 h-10 w-full" />
                                <Skeleton className="bg-gray-200 h-10 w-full" />
                                <Skeleton className="bg-gray-200 h-10 w-full" />
                            </CardContent>
                        </Card>

                        {/* Featured Image */}
                        <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
                            <CardHeader>
                                <Skeleton className="bg-gray-200 h-5 w-40" />
                            </CardHeader>
                            <CardContent>
                                <Skeleton className="bg-gray-200 h-48 w-full rounded-lg" />
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
