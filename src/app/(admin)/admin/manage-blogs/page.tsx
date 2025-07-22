import { AdminSidebar } from "@/components/admin/admin-sidebar";
import { AdminHeader } from "@/components/admin/admin-header";
import { BlogsTable } from "@/components/admin/blogs-table";

export default function ManageBlogsPage() {
  return (
    <>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">
            Manage Blog Posts
          </h1>
          <p className="text-muted-foreground">
            View and manage all blog articles
          </p>
        </div>
        <BlogsTable />
      </div>
    </>
  );
}
