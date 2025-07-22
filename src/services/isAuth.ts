import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@/config/accessEnv";

export async function getAuthUser() {
  const cookieStore = await cookies(); 
  const token = cookieStore.get("access_token")?.value;  

  if (!token) {
    throw new Error("Unauthorized: No token found");
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET as string);
    return decoded; 
  } catch (err: unknown) {
    throw new Error("Unauthorized: Invalid token");
  }
}