'use client';
import { getPosts } from '@/actions/postApi';
import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { TPostFormData } from '@/types/post.types';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useMemo, useState } from 'react';

const RecentPost = () => {
    const [posts, setPosts] = useState<TPostFormData[]>([]);
    const [loading, setLoading] = useState(true);
    // Get recent posts for sidebar
    const recentPosts = useMemo(() => posts.slice(0, 3), [posts]);

    // Format short date
    const formatShortDate = (date: Date | string): string => {
        return new Date(date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
        });
    };

    const fetchPosts = async () => {
        try {
            setLoading(true);
            const response = await getPosts({ limit: '5', access: 'user' });
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
        <Card className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
                Recent Posts
            </h3>
            <div className="space-y-4">
                {loading ? (
                    <>
                        {[...Array(3)].map((_, index) => (
                            <div key={index} className="flex items-center space-x-3">
                                <Skeleton className="w-15 h-15 rounded-lg" />
                                <div className="flex-1 space-y-2">
                                    <Skeleton className="h-4 w-3/4" />
                                    <Skeleton className="h-3 w-1/4" />
                                </div>
                            </div>
                        ))}
                    </>
                ) : recentPosts.length > 0 ? (
                    recentPosts.map((post) => (
                        <Link
                            key={post._id}
                            href={`/${post.slug || post._id}`}
                            className="flex items-center space-x-3 group cursor-pointer"
                        >
                            <Image
                                src={
                                    post.image?.thumbnail ||
                                    post.image?.featuresImage ||
                                    "/default.png"
                                }
                                alt={post.postTitle}
                                width={60}
                                height={60}
                                className="w-15 h-15 object-cover rounded-lg"
                            />
                            <div className="flex-1">
                                <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors text-sm line-clamp-2">
                                    {post.postTitle}
                                </h4>
                                <p className="text-xs text-gray-500 mt-1">
                                    {formatShortDate(post.publishDate)}
                                </p>
                            </div>
                        </Link>
                    ))
                ) : (
                    <p className="text-gray-500 text-sm">No recent posts available.</p>
                )}
            </div>
        </Card>
    );
};

export default RecentPost;