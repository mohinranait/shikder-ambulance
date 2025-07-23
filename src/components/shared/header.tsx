"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Menu,
  Phone,
  Heart,
  LogIn,
  UserPlus,
  User,
  LogOut,
  Layout,
} from "lucide-react";
import { useAuth } from "@/providers/AuthProvider";

export function Header() {
  const { user, signOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "/contact" },
  ];

  console.log({ user });

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-premium-gradient">
              <Heart className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">
              Shikder Ambulance
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-2 text-sm">
              <Phone className="h-4 w-4 text-primary" />
              <span className="font-semibold text-primary">01710060020</span>
            </div>

            <div className="hidden md:flex items-center space-x-2">
              {user?._id ? (
                <DropdownMenu modal={false}>
                  <DropdownMenuTrigger asChild>
                    <div className="relative flex items-center cursor-pointer gap-2 h-auto  text-black bg-transparent hover:bg-transparent rounded-full">
                      <Avatar className="h-9 w-9">
                        <AvatarImage src="/avatar.jpg" alt="@shadcn" />
                        <AvatarFallback>
                          {user?.name?.firstName?.[0].toUpperCase()}
                          {user?.name?.lastName?.[0].toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="end" forceMount>
                    <DropdownMenuLabel className="font-normal">
                      <div className="flex flex-col space-y-1">
                        <p className="text-sm leading-none font-medium">
                          {" "}
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
                        <Link href="/admin">
                          <Layout />
                          Dashboard
                          <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/settings">
                          <User />
                          Profile
                          <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={() => signOut()}
                      className="bg-red-100 text-red-500"
                    >
                      <LogOut />
                      Log out
                      <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <>
                  <Link href="/login">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex items-center"
                    >
                      <LogIn className="h-4 w-4 mr-1" />
                      Login
                    </Button>
                  </Link>
                  <Link href="/register">
                    <Button size="sm" className="bg-premium-gradient">
                      <UserPlus className="h-4 w-4 mr-1" />
                      Register
                    </Button>
                  </Link>
                </>
              )}
            </div>

            {/* Mobile menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4 mt-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-lg font-medium text-muted-foreground transition-colors hover:text-foreground"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="flex items-center space-x-2 pt-4 border-t">
                    <Phone className="h-4 w-4 text-primary" />
                    <span className="font-semibold text-primary">
                      Emergency: 911
                    </span>
                  </div>
                  <div className="flex flex-col space-y-2 pt-4">
                    <>
                      <Link href="/login" onClick={() => setIsOpen(false)}>
                        <Button
                          variant="outline"
                          className="w-full justify-start bg-transparent"
                        >
                          <LogIn className="h-4 w-4 mr-2" />
                          Login
                        </Button>
                      </Link>
                      <Link href="/register" onClick={() => setIsOpen(false)}>
                        <Button className="w-full justify-start bg-premium-gradient">
                          <UserPlus className="h-4 w-4 mr-2" />
                          Register
                        </Button>
                      </Link>
                    </>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
