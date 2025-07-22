"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, MoreHorizontal, Edit, Trash2, Eye, Plus } from "lucide-react"
import Link from "next/link"

export function BlogsTable() {
  const [searchTerm, setSearchTerm] = useState("")

  // Mock data - in production this would come from an API
  const blogs = [
    {
      id: 1,
      title: "Essential First Aid Tips Everyone Should Know",
      status: "published",
      publishDate: "2024-03-15",
      author: "Dr. Sarah Johnson",
      views: 1234,
    },
    {
      id: 2,
      title: "When to Call an Ambulance vs. Drive to Hospital",
      status: "published",
      publishDate: "2024-03-12",
      author: "EMT Michael Chen",
      views: 856,
    },
    {
      id: 3,
      title: "Heart Attack Warning Signs and Response",
      status: "draft",
      publishDate: "2024-03-08",
      author: "Dr. Emily Rodriguez",
      views: 0,
    },
    {
      id: 4,
      title: "Emergency Preparedness for Families",
      status: "scheduled",
      publishDate: "2024-03-20",
      author: "Paramedic James Wilson",
      views: 0,
    },
    {
      id: 5,
      title: "Understanding Different Types of Medical Emergencies",
      status: "published",
      publishDate: "2024-03-05",
      author: "Dr. Sarah Johnson",
      views: 2341,
    },
  ]

  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.author.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "published":
        return <Badge className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">Published</Badge>
      case "draft":
        return <Badge variant="secondary">Draft</Badge>
      case "scheduled":
        return <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400">Scheduled</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search blogs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Link href="/admin/create-blog">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Blog Post
          </Button>
        </Link>
      </div>

      {/* Table */}
      <Card>
        <CardHeader>
          <CardTitle>Blog Posts ({filteredBlogs.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Author</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Publish Date</TableHead>
                <TableHead>Views</TableHead>
                <TableHead className="w-[70px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredBlogs.map((blog) => (
                <TableRow key={blog.id}>
                  <TableCell>
                    <div className="font-medium">{blog.title}</div>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{blog.author}</TableCell>
                  <TableCell>{getStatusBadge(blog.status)}</TableCell>
                  <TableCell className="text-muted-foreground">
                    {new Date(blog.publishDate).toLocaleDateString()}
                  </TableCell>
                  <TableCell className="text-muted-foreground">{blog.views.toLocaleString()}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Open menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Eye className="mr-2 h-4 w-4" />
                          View
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="mr-2 h-4 w-4" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          <Trash2 className="mr-2 h-4 w-4" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
