'use client';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { districts } from '@/const-data/statick';

const leadSchema = z.object({
    fullName: z.string().min(1, 'Full name is required').default('Unknown'),
    phone: z.string().min(1, 'Phone is required'),
    leadType: z.enum(['Customer', 'Provider']).default('Customer'),
    district: z.string().min(1, 'District is required'),
});

type LeadFormData = z.infer<typeof leadSchema>;

interface LeadFormProps {
    initialData?: Partial<LeadFormData>;
    onSubmit: (data: LeadFormData) => void;
    isSubmitting: boolean;
}

export default function LeadForm({ initialData, onSubmit, isSubmitting }: LeadFormProps) {
    const form = useForm<LeadFormData>({
        resolver: zodResolver(leadSchema),
        defaultValues: initialData || {
            fullName: '',
            phone: '',
            leadType: 'Customer',
            district: 'Dhaka',
        },
    });

    const handleSubmit = (data: LeadFormData) => {
        onSubmit(data);
        form.reset()
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter full name" {...field} className="border-gray-300 focus:border-indigo-500" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Phone</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter phone number" {...field} className="border-gray-300 focus:border-indigo-500" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="leadType"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Lead Type</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger className="border-gray-300 focus:border-indigo-500">
                                        <SelectValue placeholder="Select lead type" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="Customer">Customer</SelectItem>
                                    <SelectItem value="Provider">Provider</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="district"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>District</FormLabel>
                            <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                            >
                                <FormControl>
                                    <SelectTrigger className="border-gray-300 focus:border-indigo-500">
                                        <SelectValue placeholder={'Select district'} />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {districts.map((dist) => (
                                        <SelectItem key={dist?._id} value={dist.name}>
                                            {dist.name}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button disabled={isSubmitting} type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700">
                    {isSubmitting ? "Loading..." : initialData ? 'Update Lead' : 'Create Lead'}
                </Button>
            </form>
        </Form>
    );
}