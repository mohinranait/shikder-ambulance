'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FileText, Pencil, Trash2, ChevronLeft, ChevronRight } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import { Navbar } from '@/components/admin/shared/Navbar';
import { Main } from '@/components/ui/main';
import CommentForm from '@/components/CommentForm';
import { Loader2 } from 'lucide-react';
import Image from 'next/image';

interface Comment {
    _id: string;
    name: string;
    content: string;
    star: number;
    status: 'pending' | 'approved' | 'rejected';
    createdAt: string;
    postId: { title: string };
}

export default function PostComment() {
    const params = useParams();
    const postId = params?.postId as string;

    const [comments, setComments] = useState<Comment[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const [editingComment, setEditingComment] = useState<Comment | null>(null);
    const [isFetching, setIsFetching] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [selectedComment, setSelectedComment] = useState<Comment | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [debouncedSearch, setDebouncedSearch] = useState('');
    const [selectedStatus, setSelectedStatus] = useState<'pending' | 'approved' | 'rejected' | undefined>(undefined);
    const [selectedStar, setSelectedStar] = useState<number | undefined>(undefined);
    const [post, setPost] = useState<{ postTitle: string; image: { featuresImage: string } }>()
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [pageSize, setPageSize] = useState(20);

    const fetchPost = async () => {
        if (!postId) {
            toast({ title: 'Error', description: 'Post ID is required', variant: 'destructive' });
            return;
        }

        try {
            const res = await fetch(`/api/posts/${postId}`);
            const data = await res.json();
            console.log({ data });
            const post = data?.payload?.post;
            setPost(post)
        } catch (error) {

        }
    }

    useEffect(() => {
        fetchComments();
        fetchPost()
    }, [debouncedSearch, selectedStatus, selectedStar, page, pageSize, postId]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearch(searchTerm);
        }, 500);
        return () => clearTimeout(timer);
    }, [searchTerm]);

    const fetchComments = async () => {
        if (!postId) {
            toast({ title: 'Error', description: 'Post ID is required', variant: 'destructive' });
            return;
        }
        setIsFetching(true);
        try {
            const url = new URL('/api/comment/admin', window.location.origin);
            url.searchParams.append('postId', postId);
            if (debouncedSearch) url.searchParams.append('search', debouncedSearch);
            if (selectedStatus) url.searchParams.append('status', selectedStatus);
            if (selectedStar !== undefined) url.searchParams.append('star', selectedStar.toString());
            url.searchParams.append('page', page.toString());
            url.searchParams.append('limit', pageSize.toString());
            const res = await fetch(url.toString());
            if (!res.ok) throw new Error('Failed to fetch');
            const data = await res.json();
            setComments(data.comments);
            setTotalPages(data.totalPages);
        } catch (error) {
            toast({ title: 'Error', description: 'Failed to fetch comments', variant: 'destructive' });
        } finally {
            setIsFetching(false);
        }
    };

    const handleSubmit = async (data: Partial<Comment>) => {
        setIsSubmitting(true);
        try {
            const method = editingComment ? 'PUT' : 'POST';
            const res = await fetch('/api/comment/admin', {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(editingComment ? { ...data, _id: editingComment._id } : { ...data, postId }),
            });
            if (!res.ok) throw new Error('Failed to save');
            await fetchComments();
            setIsOpen(false);
            setEditingComment(null);
            toast({ title: 'Success', description: editingComment ? 'Comment updated' : 'Comment created' });
        } catch (error) {
            toast({ title: 'Error', description: 'Failed to save comment', variant: 'destructive' });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleEdit = (comment: Comment) => {
        setEditingComment(comment);
        setIsOpen(true);
    };

    const handleDelete = (comment: Comment) => {
        setSelectedComment(comment);
        setShowDeleteDialog(true);
    };

    const confirmDelete = async () => {
        if (!selectedComment) return;
        setIsSubmitting(true);
        try {
            const res = await fetch(`/api/comment/admin?id=${selectedComment._id}`, { method: 'DELETE' });
            if (!res.ok) throw new Error('Failed to delete');
            await fetchComments();
            toast({ title: 'Success', description: 'Comment deleted' });
        } catch (error) {
            toast({ title: 'Error', description: 'Failed to delete comment', variant: 'destructive' });
        } finally {
            setIsSubmitting(false);
            setShowDeleteDialog(false);
            setSelectedComment(null);
        }
    };

    const generatePageNumbers = () => {
        const pages: number[] = [];
        const maxPagesToShow = 5;
        let startPage = Math.max(1, page - 2);
        let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

        if (endPage - startPage < maxPagesToShow - 1) {
            startPage = Math.max(1, endPage - maxPagesToShow + 1);
        }

        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }
        return pages;
    };

    console.log({ post });


    return (
        <>
            <Navbar fixed />
            <Main>
                <div className="space-y-8">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div className="space-y-1">
                            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                                <Image width={60} height={60} alt='image' src={post?.image?.featuresImage || '/default.png'} />
                                {post?.postTitle}
                            </h1>
                            <p className="text-gray-600">Manage and organize comments for this post</p>
                        </div>
                        <Dialog open={isOpen} onOpenChange={setIsOpen}>
                            <DialogTrigger asChild>
                                <Button
                                    onClick={() => {
                                        setEditingComment(null);
                                        setIsOpen(true);
                                    }}
                                    className="bg-indigo-600 hover:bg-indigo-700 flex items-center gap-2"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="h-4 w-4 animate-spin" />
                                            Processing...
                                        </>
                                    ) : (
                                        <>
                                            <FileText className="h-4 w-4" />
                                            Add Comment
                                        </>
                                    )}
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px] bg-white rounded-xl shadow-xl">
                                <DialogHeader>
                                    <DialogTitle className="text-lg font-semibold text-gray-900">
                                        {editingComment ? 'Edit Comment' : 'Add New Comment'}
                                    </DialogTitle>
                                </DialogHeader>
                                <CommentForm
                                    initialData={editingComment || undefined}
                                    onSubmit={handleSubmit}
                                    isSubmitting={isSubmitting}
                                />
                            </DialogContent>
                        </Dialog>
                    </div>

                    <div className="flex flex-wrap items-end gap-4">
                        <div className="flex-1 min-w-[200px]">
                            <Input
                                placeholder="Search by name or content"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="border-gray-300 focus:border-indigo-500"
                                disabled={isFetching || isSubmitting}
                            />
                        </div>
                        <div className="min-w-[150px]">
                            <Select
                                value={selectedStatus || 'All'}
                                onValueChange={(v) => setSelectedStatus(v === 'All' ? undefined : v as 'pending' | 'approved' | 'rejected')}
                                disabled={isFetching || isSubmitting}
                            >
                                <SelectTrigger className="border-gray-300 focus:border-indigo-500">
                                    <SelectValue placeholder="Status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="All">All</SelectItem>
                                    <SelectItem value="pending">Pending</SelectItem>
                                    <SelectItem value="approved">Approved</SelectItem>
                                    <SelectItem value="rejected">Rejected</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="min-w-[150px]">
                            <Select
                                value={selectedStar === undefined ? 'All' : selectedStar.toString()}
                                onValueChange={(v) => setSelectedStar(v === 'All' ? undefined : Number(v))}
                                disabled={isFetching || isSubmitting}
                            >
                                <SelectTrigger className="border-gray-300 focus:border-indigo-500">
                                    <SelectValue placeholder="Star" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="All">All</SelectItem>
                                    {[1, 2, 3, 4, 5].map((num) => (
                                        <SelectItem key={num} value={num.toString()}>
                                            {num}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className="relative">
                        {isFetching && (
                            <div className="absolute inset-0 flex items-center justify-center bg-white/50 z-10">
                                <Loader2 className="h-8 w-8 animate-spin text-indigo-600" />
                            </div>
                        )}
                        <div className="overflow-x-auto">
                            <Table className="border">
                                <TableHeader>
                                    <TableRow className="bg-gray-50">
                                        <TableHead className="font-semibold text-gray-700">Name</TableHead>
                                        <TableHead className="font-semibold text-gray-700">Content</TableHead>
                                        <TableHead className="font-semibold text-gray-700">Star</TableHead>
                                        <TableHead className="font-semibold text-gray-700">Status</TableHead>
                                        <TableHead className="font-semibold text-gray-700">Created At</TableHead>
                                        <TableHead className="font-semibold text-gray-700">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {comments.map((comment) => (
                                        <TableRow key={comment._id} className="hover:bg-gray-50 transition-colors">
                                            <TableCell>{comment.name}</TableCell>
                                            <TableCell>{comment.content.slice(0, 50)}{comment.content.length > 50 ? '...' : ''}</TableCell>
                                            <TableCell>{comment.star}</TableCell>
                                            <TableCell>{comment.status}</TableCell>
                                            <TableCell>{new Date(comment.createdAt).toLocaleDateString()}</TableCell>
                                            <TableCell>
                                                <div className="flex space-x-2">
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        onClick={() => handleEdit(comment)}
                                                        className="text-indigo-600 hover:text-indigo-800"
                                                        disabled={isFetching || isSubmitting}
                                                    >
                                                        <Pencil className="h-4 w-4" />
                                                    </Button>
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        onClick={() => handleDelete(comment)}
                                                        className="text-red-600 hover:text-red-800"
                                                        disabled={isFetching || isSubmitting}
                                                    >
                                                        <Trash2 className="h-4 w-4" />
                                                    </Button>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center justify-between mt-8 gap-4">
                            <div className="flex items-center gap-2">
                                <label className="text-sm text-gray-600">Show:</label>
                                <select
                                    value={pageSize}
                                    onChange={(e) => {
                                        setPageSize(Number(e.target.value));
                                        setPage(1);
                                    }}
                                    className="border border-gray-300 rounded-lg px-2 py-1 text-sm focus:ring-indigo-500 focus:border-indigo-500"
                                    disabled={isFetching || isSubmitting}
                                >
                                    <option value={5}>5</option>
                                    <option value={10}>10</option>
                                    <option value={20} > 20 </option>
                                    <option value={50}>50</option>
                                    <option value={100}>100</option>
                                </select>
                                <label className="text-sm text-gray-600">Items</label>

                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <Button
                                variant="outline"
                                size="sm"
                                disabled={page === 1 || isFetching || isSubmitting}
                                onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                                className="border-gray-300 text-indigo-600 hover:bg-indigo-50"
                            >
                                <ChevronLeft className="h-4 w-4 mr-1" />
                                Previous
                            </Button>
                            {generatePageNumbers().map((num) => (
                                <Button
                                    key={num}
                                    variant={num === page ? 'default' : 'outline'}
                                    size="sm"
                                    className={`${num === page
                                        ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                                        : 'border-gray-300 text-indigo-600 hover:bg-indigo-50'
                                        }`}
                                    onClick={() => setPage(num)}
                                    disabled={isFetching || isSubmitting}
                                >
                                    {num}
                                </Button>
                            ))}
                            <Button
                                variant="outline"
                                size="sm"
                                disabled={page === totalPages || isFetching || isSubmitting}
                                onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
                                className="border-gray-300 text-indigo-600 hover:bg-indigo-50"
                            >
                                Next
                                <ChevronRight className="h-4 w-4 ml-1" />
                            </Button>
                        </div>
                    </div>
                </div>
                <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                                This action cannot be undone. This will permanently delete the
                                comment by "{selectedComment?.name}" and remove it from our servers.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction
                                onClick={confirmDelete}
                                disabled={isSubmitting}
                                className="bg-red-600 hover:bg-red-700"
                            >
                                {isSubmitting ? (
                                    <AlertDialogAction>
                                        <Loader2 className="h-4 w-4 animate-spin mr-2" />
                                        Deleting...
                                    </AlertDialogAction>
                                ) : (
                                    'Delete'
                                )}
                            </AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>

            </Main>
        </>
    );
}