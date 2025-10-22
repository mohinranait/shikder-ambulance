
import { CreateBlogForm } from "@/components/admin/create-blog-form";

export default function CreateBlogPage() {
  return (
    <>
      <div className="max-w-4xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">
            Create New Blog Post
          </h1>
          <p className="text-muted-foreground">
            Write and publish a new blog article
          </p>
        </div>
        <CreateBlogForm />
      </div>
    </>
  );
}
