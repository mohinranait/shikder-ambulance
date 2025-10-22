'use client';

import { getPosts } from '@/actions/postApi';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { TPostFormData } from '@/types/post.types';
import { AlertTriangle, Calendar, Clock, Share2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useMemo, useState } from 'react';

const BlogFeatures = () => {
    const [posts, setPosts] = useState<TPostFormData[]>([]);
    const [loading, setLoading] = useState(true);

    const featuredPosts = useMemo(() => posts.slice(0, 2), [posts]);

    const formatDate = (date: Date | string): string => {
        return new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    const calculateReadTime = (post: TPostFormData): string => {
        const wordsPerMinute = 200;
        const contentLength =
            (post.content?.length || 0) +
            (post.shortDescription?.length || 0) +
            (post.contents?.reduce(
                (acc, content) => acc + (content.content?.length || 0),
                0
            ) || 0);
        const words = contentLength / 5;
        const minutes = Math.ceil(words / wordsPerMinute);
        return `${Math.max(1, minutes)} min read`;
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
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Featured Articles
                    </h2>
                    <p className="text-lg text-gray-600">
                        Essential Patient transport knowledge and emergency care insights
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-6">
                    {loading
                        ?
                        Array.from({ length: 2 }).map((_, i) => (
                            <Card
                                key={i}
                                className="overflow-hidden hover:shadow-xl transition-shadow"
                            >
                                <Skeleton className="h-64 w-full bg-gray-200" />
                                <CardContent className="p-6 space-y-4">
                                    <div className="flex items-center space-x-4 text-sm">
                                        <Skeleton className="h-4 w-24 bg-gray-200" />
                                        <Skeleton className="h-4 w-16 bg-gray-200" />
                                    </div>
                                    <Skeleton className="h-6 w-3/4 bg-gray-200" />
                                    <Skeleton className="h-4 w-full bg-gray-200" />
                                    <Skeleton className="h-4 w-5/6 bg-gray-200" />
                                    <div className="flex justify-between pt-4 border-t">
                                        <Skeleton className="h-5 w-32 bg-gray-200" />
                                        <Skeleton className="h-5 w-5 bg-gray-200" />
                                    </div>
                                </CardContent>
                            </Card>
                        ))
                        :
                        featuredPosts.map((post) => (
                            <Card
                                key={post._id}
                                className="overflow-hidden hover:shadow transition-shadow group"
                            >
                                <div className="relative">
                                    <Image
                                        src={
                                            post.image?.featuresImage ||
                                            post.image?.thumbnail ||
                                            '/default.png'
                                        }
                                        alt={post.postTitle}
                                        width={600}
                                        height={400}
                                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <Badge className="absolute top-4 left-4 bg-red-600 text-white">
                                        <AlertTriangle className="h-3 w-3 mr-1" />
                                        Featured
                                    </Badge>
                                </div>
                                <CardContent className="p-6">
                                    <div className="space-y-4">
                                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                                            <div className="flex items-center space-x-1">
                                                <Calendar className="h-4 w-4" />
                                                <span>{formatDate(post.publishDate)}</span>
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

                                        <p className="text-gray-600 line-clamp-2">
                                            {post?.seoDescription || 'No Description'}
                                        </p>

                                        <div className="flex items-center justify-between pt-4 border-t">
                                            <div className="flex items-center space-x-3">
                                                <p className="text-sm text-gray-500">
                                                    Medical Professional
                                                </p>
                                            </div>

                                            <Button variant="ghost" size="sm">
                                                <Share2 className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                </div>
            </div>
        </section>
    );
};

export default BlogFeatures;
