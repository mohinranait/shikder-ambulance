"use client";
import { deletePostById, getPosts } from "@/actions/postApi";
import { Navbar } from "@/components/admin/shared/Navbar";
import CustomTable from "@/components/shared/CustomTable";
import { Button } from "@/components/ui/button";
import { Main } from "@/components/ui/main";
import { TPostFormData } from "@/types/post.types";
import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
type TQuery = {
  limit?: string;
  access?: string;
  search?: string;
};

const AllPostPage = () => {
  // const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const [posts, setPosts] = useState<TPostFormData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isDeleteLoading, setIsDeleteLoading] = useState<boolean>(false);
  const [isSelected, setIsSelected] = useState<TPostFormData | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const columns = [
    {
      title: "Post Name",
      dataIndex: "action",
      key: "action",
      render: (_: string, record: TPostFormData) => {
        return (
          <div className="flex gap-2">
            <div>
              <Image
                src={record?.image?.featuresImage || "/placeholder.jpg"}
                width={50}
                height={50}
                alt="image"
              />
            </div>
            <div>
              <p>
                <Link href={`/${record?.slug}`} target="_blank">
                  {record?.postTitle}
                </Link>
              </p>
              <div className="flex gap-2">
                <Link
                  href={`/admin/post/new?link=${record?.slug}`}
                  target="_blank"
                  className="text-primary text-xs hover:underline"
                >
                  Edit
                </Link>
                <Link
                  href={`/${record?.slug}`}
                  target="_blank"
                  className="text-primary text-xs hover:underline"
                >
                  View
                </Link>
                <span
                  onClick={() => {
                    // onOpen();
                    setIsSelected(record);
                  }}
                  className="text-primary text-xs cursor-pointer hover:underline"
                >
                  Delete
                </span>
              </div>
            </div>
          </div>
        );
      },
    },
    {
      title: "Title",
      dataIndex: "seoTitle",
      key: "seoTitle",
      render: (seoTitle: string) => {
        return (
          <p
            title={seoTitle}
            className="truncate max-w-[250px] overflow-hidden"
          >
            {seoTitle}
          </p>
        );
      },
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => {
        return (
          <span
            className={`rounded text-xs px-2 py-[2px] text-white ${
              status === "Publish" ? "bg-green-600" : "bg-red-600"
            }`}
          >
            {status}
          </span>
        );
      },
    },
    {
      title: "Created Date",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (createdAt: string) => {
        return (
          <>
            <p className="text-nowrap text-text-gray">date</p>
          </>
        );
      },
    },
  ];

  const handleCallAPI = async ({
    limit = "20",
    access = "admin",
    search = "",
  }: TQuery) => {
    const query: TQuery = { limit, access, search };

    try {
      const data = await getPosts(query);
      if (data?.success) {
        setPosts(data?.payload?.posts);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to load posts.");
    } finally {
      setIsLoading(false);
    }
  };

  // Debounced search
  useEffect(() => {
    const delaySearch = setTimeout(() => {
      handleCallAPI({ search: searchTerm });
    }, 500);

    return () => clearTimeout(delaySearch);
  }, [searchTerm]);

  useEffect(() => {
    setIsLoading(true);
    handleCallAPI({});
  }, []);

  // Handle delete post
  const handleDelete = async () => {
    try {
      if (!isSelected?._id) {
        return;
      }
      setIsDeleteLoading(true);
      const data = await deletePostById(isSelected?._id);
      if (data?.success) {
        setIsDeleteLoading(false);
        setPosts((prev) => prev?.filter((d) => d?._id !== isSelected?._id));
        // onClose();
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <Navbar fixed></Navbar>
      <Main>
        <div className="flex justify-between ">
          <div>
            <div className="text-2xl text-primary font-bold flex items-center gap-2">
              All Posts
            </div>
            <p className="text-gray text-sm">Manage all posts</p>
          </div>
          <div>
            <Link href={"/admin/post/new"}>
              <Button>New Posts</Button>
            </Link>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <input
              placeholder="Search..."
              type="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border-slate-300 border py-1 px-2 focus-visible:outline-none focus-visible:border-primary rounded-l"
            />
          </div>
        </div>
        <div>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <CustomTable dataSource={posts} columns={columns} />
          )}
        </div>
      </Main>
    </>
  );
};

export default AllPostPage;
