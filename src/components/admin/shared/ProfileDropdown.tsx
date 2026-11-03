"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/providers/AuthProvider";
import { ChevronDown, LogOut, Settings, User } from "lucide-react";
import Link from "next/link";

export function ProfileDropdown() {
  const { user, signOut } = useAuth();

  const profileImgUrl =
    (user?.profile as any)?.fileUrl ||
    (user?.profile as any)?.secure_url ||
    (typeof user?.profile === "string" ? user?.profile : "") ||
    "/avatar.jpg";

  const initials = `${user?.name?.firstName?.[0] || "A"}${
    user?.name?.lastName?.[0] || ""
  }`.toUpperCase();

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <div className="relative flex items-center cursor-pointer gap-2 h-auto text-black bg-transparent hover:bg-transparent rounded-full select-none">
          <Avatar className="h-9 w-9 border border-slate-200 shadow-sm overflow-hidden">
            <AvatarImage
              src={profileImgUrl}
              alt="Profile"
              className="object-cover"
            />
            <AvatarFallback className="bg-primary/10 text-primary font-bold">
              {initials}
            </AvatarFallback>
          </Avatar>
          <div className="hidden md:block text-left">
            <p className="font-semibold text-sm leading-tight text-slate-800">
              {user?.name?.firstName} {user?.name?.lastName}
            </p>
            <p className="text-muted-foreground text-xs leading-none mt-0.5">
              {user?.status || "Admin"}
            </p>
          </div>
          <ChevronDown className="size-4 text-slate-400 hidden md:block" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm leading-none font-semibold text-slate-900">
              {user?.name?.firstName} {user?.name?.lastName}
            </p>
            <p className="text-muted-foreground text-xs leading-none">
              {user?.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link href="/admin/profile" className="cursor-pointer">
              <User className="mr-2 h-4 w-4 text-slate-500" />
              My Profile
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/admin/setting" className="cursor-pointer">
              <Settings className="mr-2 h-4 w-4 text-slate-500" />
              Site Settings
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => signOut()}
          className="cursor-pointer text-rose-600 focus:text-rose-600 focus:bg-rose-50"
        >
          <LogOut className="mr-2 h-4 w-4 text-rose-600" />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
