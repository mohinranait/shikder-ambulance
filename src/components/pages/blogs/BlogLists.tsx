'use client';
import { getPosts } from '@/actions/postApi';
import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { calculateReadTime, formatShortDate } from '@/lib/helpers';
import { TPostFormData } from '@/types/post.types';
import { Calendar, Clock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useMemo, useState } from 'react';

const BlogLists = () => {
    const [posts, setPosts] = useState<TPostFormData[]>([]);
    const regularPosts = useMemo(() => posts.slice(2), [posts]);
    const [loading, setLoading] = useState(true);


    const fetchPosts = async () => {
        try {
            setLoading(true);
            const response = await getPosts({ limit: '7', access: 'user' });
            const publishedPosts = response?.payload?.posts?.filter(
                (post: TPostFormData) => post.status === 'Publish'
            );
            setPosts(publishedPosts);
        } catch (error) {
            console.error('Error fetching posts:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">
                    Latest Articles ({regularPosts.length})
                </h2>
            </div>

            {loading ? (
                <div className="space-y-6">
                    {[...Array(3)].map((_, index) => (
                        <Card key={index} className="overflow-hidden">
                            <div className="grid md:grid-cols-3 gap-6">
                                <Skeleton className="w-full h-48 md:h-full" />
                                <div className="md:col-span-2 p-6 space-y-4">
                                    <div className="flex items-center space-x-4">
                                        <Skeleton className="h-4 w-24" />
                                        <Skeleton className="h-4 w-24" />
                                    </div>
                                    <Skeleton className="h-6 w-3/4" />
                                    <Skeleton className="h-4 w-full" />
                                    <Skeleton className="h-4 w-5/6" />
                                    <Skeleton className="h-4 w-4/5" />
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            ) : regularPosts.length > 0 ? (
                <div className="space-y-6">
                    {regularPosts.map((post) => (
                        <Card
                            key={post._id}
                            className="overflow-hidden hover:shadow transition-shadow group"
                        >
                            <div className="grid md:grid-cols-3 ">
                                <div className="relative">
                                    <Image
                                        src={
                                            post.image?.featuresImage ||
                                            post.image?.thumbnail ||
                                            "/default.png"
                                        }
                                        alt={post.postTitle}
                                        width={300}
                                        height={200}
                                        // fill
                                        className="w-full h-48 md:h-full object-cover block group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="md:col-span-2 p-6">
                                    <div className="space-y-4">
                                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                                            <div className="flex items-center space-x-1">
                                                <Calendar className="h-4 w-4" />
                                                <span>
                                                    {formatShortDate(post.publishDate)}
                                                </span>
                                            </div>
                                            <div className="flex items-center space-x-1">
                                                <Clock className="h-4 w-4" />
                                                <span>{calculateReadTime(post)}</span>
                                            </div>
                                        </div>

                                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                                            <Link href={`/${post.slug || post._id}`}>
                                                {post.postTitle}
                                            </Link>
                                        </h3>

                                        <p className="line-clamp-3">
                                            {post?.seoDescription || "No description"}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            ) : (
                <p className="text-gray-500">No posts available.</p>
            )}
        </div>
    );
};

export default BlogLists;