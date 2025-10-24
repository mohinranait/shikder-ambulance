'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel, AlertDialogAction } from '@/components/ui/alert-dialog';
import { FileText, Pencil, Plus, Trash2, ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import { Navbar } from '@/components/admin/shared/Navbar';
import { Main } from '@/components/ui/main';
import LeadForm from '@/components/LeadForm';
import { Loader2 } from 'lucide-react';
import { districts } from '@/const-data/statick';

interface Lead {
    _id: string;
    fullName: string;
    phone: string;
    leadType: 'Customer' | 'Provider';
    district: string;
    createdAt: string;
    favorite: boolean;
}

export default function Home() {
    const [leads, setLeads] = useState<Lead[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const [editingLead, setEditingLead] = useState<Lead | null>(null);
    const [isFetching, setIsFetching] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [debouncedSearch, setDebouncedSearch] = useState('');
    const [selectedLeadType, setSelectedLeadType] = useState<'Customer' | 'Provider' | undefined>(undefined);
    const [selectedDistrict, setSelectedDistrict] = useState<string | undefined>(undefined);
    const [selectedFavorite, setSelectedFavorite] = useState<boolean | undefined>(undefined);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [pageSize, setPageSize] = useState(20);

    useEffect(() => {
        fetchLeads();
    }, [debouncedSearch, selectedLeadType, selectedDistrict, selectedFavorite, page, pageSize]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearch(searchTerm);
        }, 500);
        return () => clearTimeout(timer);
    }, [searchTerm]);

    const fetchLeads = async () => {
        setIsFetching(true);
        try {
            const url = new URL('/api/leads', window.location.origin);
            if (debouncedSearch) url.searchParams.append('search', debouncedSearch);
            if (selectedLeadType) url.searchParams.append('leadType', selectedLeadType);
            if (selectedDistrict) url.searchParams.append('district', selectedDistrict);
            if (selectedFavorite !== undefined) url.searchParams.append('favorite', selectedFavorite.toString());
            url.searchParams.append('page', page.toString());
            url.searchParams.append('limit', pageSize.toString());
            const res = await fetch(url.toString());
            if (!res.ok) throw new Error('Failed to fetch');
            const data = await res.json();
            setLeads(data.leads);
            setTotalPages(data.totalPages);
        } catch (error) {
            toast({ title: 'Error', description: 'Failed to fetch leads', variant: 'destructive' });
        } finally {
            setIsFetching(false);
        }
    };

    const handleSubmit = async (data: Partial<Lead>) => {
        setIsSubmitting(true);
        try {
            const method = editingLead ? 'PUT' : 'POST';
            const res = await fetch('/api/leads', {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(editingLead ? { ...data, _id: editingLead._id } : data),
            });
            if (!res.ok) throw new Error('Failed to save');
            await fetchLeads();
            // setIsOpen(false);
            setEditingLead(null);
            toast({ title: 'Success', description: editingLead ? 'Lead updated' : 'Lead created' });
        } catch (error) {
            toast({ title: 'Error', description: 'Failed to save lead', variant: 'destructive' });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleEdit = (lead: Lead) => {
        setEditingLead(lead);
        setIsOpen(true);
    };

    const handleDelete = (lead: Lead) => {
        setSelectedLead(lead);
        setShowDeleteDialog(true);
    };

    const confirmDelete = async () => {
        if (!selectedLead) return;
        setIsSubmitting(true);
        try {
            const res = await fetch(`/api/leads?id=${selectedLead._id}`, { method: 'DELETE' });
            if (!res.ok) throw new Error('Failed to delete');
            await fetchLeads();
            toast({ title: 'Success', description: 'Lead deleted' });
        } catch (error) {
            toast({ title: 'Error', description: 'Failed to delete lead', variant: 'destructive' });
        } finally {
            setIsSubmitting(false);
            setShowDeleteDialog(false);
            setSelectedLead(null);
        }
    };

    const handleToggleFavorite = async (id: string, currentFavorite: boolean) => {
        setIsSubmitting(true);
        try {
            const res = await fetch('/api/leads', {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id, favorite: !currentFavorite }),
            });
            if (!res.ok) throw new Error('Failed to toggle favorite');
            await fetchLeads();
            toast({ title: 'Success', description: `Lead marked as ${!currentFavorite ? 'favorite' : 'not favorite'}` });
        } catch (error) {
            toast({ title: 'Error', description: 'Failed to toggle favorite', variant: 'destructive' });
        } finally {
            setIsSubmitting(false);
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

    return (
        <>
            <Navbar fixed />
            <Main>
                <div className="space-y-8">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div className="space-y-1">
                            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                                <FileText className="h-8 w-8 text-blue-600" />
                                Manage Leads
                            </h1>
                            <p className="text-gray-600">Manage and organize your content</p>
                        </div>
                        <Dialog open={isOpen} onOpenChange={setIsOpen}>
                            <DialogTrigger asChild>
                                <Button
                                    onClick={() => {
                                        setEditingLead(null);
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
                                            <Plus className="h-4 w-4" />
                                            Add Lead
                                        </>
                                    )}
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px] bg-white rounded-xl shadow-xl">
                                <DialogHeader>
                                    <DialogTitle className="text-lg font-semibold text-gray-900">
                                        {editingLead ? 'Edit Lead' : 'Add New Lead'}
                                    </DialogTitle>
                                </DialogHeader>
                                <LeadForm
                                    initialData={editingLead || undefined}
                                    onSubmit={handleSubmit}
                                    isSubmitting={isSubmitting}
                                />
                            </DialogContent>
                        </Dialog>
                    </div>

                    <div className="flex flex-wrap items-end gap-4">
                        <div className="flex-1 min-w-[200px]">
                            <Input
                                placeholder="Search by name or phone"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="border-gray-300 focus:border-indigo-500"
                                disabled={isFetching || isSubmitting}
                            />
                        </div>
                        <div className="min-w-[150px]">
                            <Select
                                value={selectedLeadType || 'All'}
                                onValueChange={(v) => setSelectedLeadType(v === 'All' ? undefined : v as 'Customer' | 'Provider')}
                                disabled={isFetching || isSubmitting}
                            >
                                <SelectTrigger className="border-gray-300 focus:border-indigo-500">
                                    <SelectValue placeholder="Lead Type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="All">All</SelectItem>
                                    <SelectItem value="Customer">Customer</SelectItem>
                                    <SelectItem value="Provider">Provider</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="min-w-[150px]">
                            <Select
                                value={selectedDistrict || 'All'}
                                onValueChange={(v) => setSelectedDistrict(v === 'All' ? undefined : v)}
                                disabled={isFetching || isSubmitting}
                            >
                                <SelectTrigger className="border-gray-300 focus:border-indigo-500">
                                    <SelectValue placeholder="District" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="All">All</SelectItem>
                                    {districts.map((dist) => (
                                        <SelectItem key={dist?._id} value={dist?.name}>
                                            {dist?.name}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="min-w-[150px]">
                            <Select
                                value={selectedFavorite === undefined ? 'All' : selectedFavorite ? 'Favorite' : 'NotFavorite'}
                                onValueChange={(v) => {
                                    if (v === 'All') setSelectedFavorite(undefined);
                                    else if (v === 'Favorite') setSelectedFavorite(true);
                                    else setSelectedFavorite(false);
                                }}
                                disabled={isFetching || isSubmitting}
                            >
                                <SelectTrigger className="border-gray-300 focus:border-indigo-500">
                                    <SelectValue placeholder="Favorite" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="All">All</SelectItem>
                                    <SelectItem value="Favorite">Favorite</SelectItem>
                                    <SelectItem value="NotFavorite">Not Favorite</SelectItem>
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
                                        <TableHead className="font-bold text-gray-700">Full Name</TableHead>
                                        <TableHead className="font-bold text-gray-700">Favorite</TableHead>
                                        <TableHead className="font-bold text-gray-700">Phone</TableHead>
                                        <TableHead className="font-bold text-gray-700">Lead Type</TableHead>
                                        <TableHead className="font-bold text-gray-700">District</TableHead>
                                        <TableHead className="font-bold text-gray-700">Created At</TableHead>
                                        <TableHead className="font-bold text-gray-700">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {leads.map((lead) => (
                                        <TableRow key={lead._id} className="hover:bg-gray-50 transition-colors">
                                            <TableCell>{lead.fullName}</TableCell>
                                            <TableCell>
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    onClick={() => handleToggleFavorite(lead._id, lead.favorite)}
                                                    className="size-8"
                                                    disabled={isFetching || isSubmitting}
                                                >
                                                    <Heart
                                                        size={16}
                                                        className={lead.favorite ? 'fill-red-600 stroke-red-600' : 'fill-none stroke-gray-600'}
                                                    />
                                                </Button>
                                            </TableCell>
                                            <TableCell>{lead.phone}</TableCell>
                                            <TableCell>{lead.leadType}</TableCell>
                                            <TableCell>{lead.district}</TableCell>
                                            <TableCell>{new Date(lead.createdAt).toLocaleDateString()}</TableCell>
                                            <TableCell>
                                                <div className="flex space-x-2">
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        onClick={() => handleEdit(lead)}
                                                        className="text-indigo-600 hover:text-indigo-800"
                                                        disabled={isFetching || isSubmitting}
                                                    >
                                                        <Pencil className="h-4 w-4" />
                                                    </Button>
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        onClick={() => handleDelete(lead)}
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
                                    <option value={20}>20</option>
                                    <option value={50}>50</option>
                                    <option value={100}>100</option>
                                </select>
                                <label className="text-sm text-gray-600">Items</label>
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
                                    This action cannot be undone. This will permanently delete the lead "{selectedLead?.fullName}" and remove it from our servers.
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
                                        <>
                                            <Loader2 className="h-4 w-4 animate-spin mr-2" />
                                            Deleting...
                                        </>
                                    ) : (
                                        'Delete'
                                    )}
                                </AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                </div>
            </Main>
        </>
    );
}