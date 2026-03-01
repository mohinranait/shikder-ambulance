// lib/server-fetch.ts
import { headers } from "next/headers";

type FetchOptions = {
  endpoint: string;
  params?: Record<string, string | number | undefined>;
  cache?: RequestCache;
};

export const serverFetch = async <T = any>({
  endpoint,
  params = {},
  cache = "no-store",
}: FetchOptions): Promise<T> => {
  const queryString = new URLSearchParams(
    Object.entries(params)
      .filter(([_, v]) => v !== undefined && v !== null)
      .map(([k, v]) => [k, String(v)])
  ).toString();

  // FIX: await headers()
  const headersList = await headers();
  const host = headersList.get("host");
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";
  const baseUrl = `${protocol}://${host}`;

  const url = `${baseUrl}${endpoint}${queryString ? `?${queryString}` : ""}`;

  const res = await fetch(url, { cache });

  if (!res.ok) {
    throw new Error(`Fetch failed: ${res.status}`);
  }

  return res.json();
};