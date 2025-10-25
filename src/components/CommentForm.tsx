import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Loader2 } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';

const commentSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    content: z.string().min(1, 'Content is required'),
    star: z.number().int().min(1).max(5).default(5),
    status: z.enum(['pending', 'approved', 'rejected']).default('pending'),
});

type CommentFormData = z.infer<typeof commentSchema>;

interface CommentFormProps {
    initialData?: Partial<CommentFormData>;
    onSubmit: (data: CommentFormData) => void;
    isSubmitting: boolean;
}

export default function CommentForm({ initialData, onSubmit, isSubmitting }: CommentFormProps) {
    const form = useForm<CommentFormData>({
        resolver: zodResolver(commentSchema),
        defaultValues: initialData || {
            name: '',
            content: '',
            star: 5,
            status: 'pending',
        },
    });

    const handleSubmit = (data: CommentFormData) => {
        onSubmit(data);
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Enter name"
                                    {...field}
                                    className="border-gray-300 focus:border-indigo-500"
                                    disabled={isSubmitting}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="content"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Content</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Enter content"
                                    {...field}
                                    className="border-gray-300 focus:border-indigo-500"
                                    disabled={isSubmitting}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="star"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Star</FormLabel>
                            <Select
                                onValueChange={(v) => field.onChange(Number(v))}
                                defaultValue={field.value.toString()}
                                disabled={isSubmitting}
                            >
                                <FormControl>
                                    <SelectTrigger className="border-gray-300 focus:border-indigo-500">
                                        <SelectValue placeholder="Select star rating" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {[1, 2, 3, 4, 5].map((num) => (
                                        <SelectItem key={num} value={num.toString()}>
                                            {num}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="status"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Status</FormLabel>
                            <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                disabled={isSubmitting}
                            >
                                <FormControl>
                                    <SelectTrigger className="border-gray-300 focus:border-indigo-500">
                                        <SelectValue placeholder="Select status" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="pending">Pending</SelectItem>
                                    <SelectItem value="approved">Approved</SelectItem>
                                    <SelectItem value="rejected">Rejected</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button
                    type="submit"
                    className="w-full bg-indigo-600 hover:bg-indigo-700 flex items-center gap-2"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="h-4 w-4 animate-spin" />
                            Processing...
                        </>
                    ) : (
                        initialData ? 'Update Comment' : 'Create Comment'
                    )}
                </Button>
            </form>
        </Form>
    );
}