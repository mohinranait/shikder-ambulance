'use client';

import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { toast } from 'sonner';
import { X } from 'lucide-react';

interface FAQ {
  _id?: string;
  title: string;
  contents: string[];
  priority: number;
  status: boolean;
}

interface FaqModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  faq?: FAQ | null;
  onSuccess: () => void;
}

export function FaqModal({
  open,
  onOpenChange,
  faq,
  onSuccess,
}: FaqModalProps) {
  const [formData, setFormData] = useState<FAQ>({
    title: '',
    contents: [''],
    priority: 10,
    status: true,
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (faq) {
      setFormData(faq);
    } else {
      setFormData({
        title: '',
        contents: [''],
        priority: 10,
        status: true,
      });
    }
  }, [faq, open]);

  const handleContentChange = (index: number, value: string) => {
    const newContents = [...formData.contents];
    newContents[index] = value;
    setFormData({ ...formData, contents: newContents });
  };

  const handleAddContent = () => {
    setFormData({
      ...formData,
      contents: [...formData.contents, ''],
    });
  };

  const handleRemoveContent = (index: number) => {
    if (formData.contents.length === 1) {
      toast.error('At least one content item is required');
      return;
    }
    const newContents = formData.contents.filter((_, i) => i !== index);
    setFormData({ ...formData, contents: newContents });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validContents = formData.contents.filter(
      (content) => content.trim().length > 0
    );

    if (!formData.title.trim() || validContents.length === 0) {
      toast.error('Title and at least one content item are required');
      return;
    }

    setLoading(true);

    try {
      if (faq?._id) {
        // Update
        const response = await fetch(`/api/faqs/${faq._id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...formData,
            contents: validContents,
          }),
        });

        if (!response.ok) throw new Error('Failed to update FAQ');
        toast.success('FAQ updated successfully');
      } else {
        // Create
        const response = await fetch('/api/faqs', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...formData,
            contents: validContents,
          }),
        });

        if (!response.ok) throw new Error('Failed to create FAQ');
        toast.success('FAQ created successfully');
      }

      onOpenChange(false);
      onSuccess();
    } catch (error: any) {
      toast.error(error.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {faq?._id ? 'Edit FAQ' : 'Create New FAQ'}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              placeholder="Enter FAQ title"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              disabled={loading}
            />
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label>Contents</Label>
              <Button
                type="button"
                size="sm"
                variant="outline"
                onClick={handleAddContent}
                disabled={loading}
              >
                Add Content
              </Button>
            </div>

            <div className="space-y-3 max-h-64 overflow-y-auto">
              {formData.contents.map((content, index) => (
                <div key={index} className="flex gap-2">
                  <Textarea
                    placeholder={`Enter content ${index + 1}`}
                    value={content}
                    onChange={(e) => handleContentChange(index, e.target.value)}
                    rows={3}
                    disabled={loading}
                    className="resize-none"
                  />
                  {formData.contents.length > 1 && (
                    <Button
                      type="button"
                      size="icon"
                      variant="outline"
                      onClick={() => handleRemoveContent(index)}
                      disabled={loading}
                      className="mt-1 flex-shrink-0"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="priority">Priority</Label>
              <Input
                id="priority"
                type="number"
                value={formData.priority}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    priority: parseInt(e.target.value) || 10,
                  })
                }
                disabled={loading}
              />
            </div>

            <div className="flex items-end space-x-2 pb-2">
              <Label htmlFor="status" className="flex items-center space-x-2 cursor-pointer">
                <span>Active</span>
                <Switch
                  id="status"
                  checked={formData.status}
                  onCheckedChange={(checked) =>
                    setFormData({ ...formData, status: checked })
                  }
                  disabled={loading}
                />
              </Label>
            </div>
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={loading}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? 'Saving...' : faq?._id ? 'Update' : 'Create'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
