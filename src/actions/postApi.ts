

import { BASE_URL } from "@/config/accessEnv";
import { TPostFormData } from "@/types/post.types";
type TQuery = {
  limit?: string;
  access?: string;
  search?: string;
  page?: string;
};



// Create new post
export const createPost = async (data: TPostFormData) => {
  const res = await fetch(`/api/posts`, {
    method: "POST",
    headers: {
      "Content-type": "Application/json"
    },
    credentials: 'include',
    body: JSON.stringify(data)
  })
  return await res.json();
}

// Update post
export const updatePostById = async ({ data, id }: { data: TPostFormData; id: string }) => {
  const res = await fetch(`/api/posts/${id}`, {
    method: "PATCH",
    headers: {
      "Content-type": "Application/json"
    },
    credentials: 'include',
    body: JSON.stringify(data)
  })
  return await res.json();
}

// Delete post by POST ID
export const deletePostById = async (id: string) => {
  const res = await fetch(`/api/posts/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "Application/json"
    },
    credentials: 'include',
  })
  return await res.json();
}

export const getAllMedia = async () => {
  try {
    const res = await fetch(`/api/media`, {
      method: "GET",
      credentials: "include",
    });
    return await res.json();
  } catch (error) {
    return error
  }
}

// Get all posts with query for
export const getPosts = async ({
  limit = "20",
  access = "user",
  search = "",
  page = '1'
}) => {
  const query: TQuery = {
    limit,
    access,
    search,
    page,
  };

  const queryString = new URLSearchParams(
    Object.fromEntries(Object.entries(query).filter(([_, v]) => v != null))
  ).toString();
  try {
    const url = access === 'user' ? `/api/posts?${queryString}` : `/api/posts/admin?${queryString}`;
    const res = await fetch(url);
    const data = await res.json()
    return data;
  } catch (error) {
    return error
  }
}


/**
 * Get single post by slug
*/
export const getSinglePostBySlug = async (slug: string) => {
  const origin =
    typeof window !== "undefined" ? window.location.origin : BASE_URL;

  const res = await fetch(`${origin}/api/posts/slug/${slug}`, {
    cache: "no-store",
  });
  return await res.json();
};