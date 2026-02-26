import { formatShortDate } from '@/lib/helpers'
import { TPostFormData } from '@/types/post.types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
type Props = {
  blogs: TPostFormData[]
}
const SidebarPosts = ({blogs}:Props) => {
  return (
    <div className="space-y-4">
      {
        blogs.map((post) => (
            <Link
              key={post._id}
              href={`/${post.slug || post._id}`}
              className="flex items-center space-x-3 group cursor-pointer"
            >
              <Image
                src={
                  post.image?.thumbnail ||
                  post.image?.featuresImage ||
                  "/default.png"
                }
                alt={post.postTitle}
                width={100}
                height={100}
                className=" aspect-square w-16 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors text-sm line-clamp-2">
                  {post.postTitle}
                </h4>
                <p className="text-xs text-gray-500 mt-1">
                  {formatShortDate(post.publishDate)}
                </p>
              </div>
            </Link>
          ))
      }
    </div>
  )
}

export default SidebarPosts