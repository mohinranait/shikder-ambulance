"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, Heart, LogIn, UserPlus, Ambulance } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname()

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about-us" },
    {
      name: "Services",
      href: "/services",
      items: [
        { name: "Ac Ambulance", href: "/ac-ambulance-service" },
        { name: "Non AC Ambulance", href: "/non-ac-ambulance" },
        { name: "Freezing Ambulance", href: "/freezing-ambulance-service" },
      ],
    },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "/contact-us" },
  ];

  console.log({ pathName });


  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href={"/"} className="flex items-center space-x-2">
            <div className="bg-blue-600 text-white p-2 rounded-lg">
              <Ambulance className="h-6 w-6 md:h-7 md:w-7" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                Shikder Ambulance
              </h2>
              <p className="text-xs text-gray-600">Patient Transport Service</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn("text-sm font-medium text-muted-foreground transition-colors hover:text-foreground", pathName === item?.href && ' text-foreground')}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2">
              <Link href="tel:01710060020">
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </Button>
              </Link>
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

                  <div className="flex flex-col space-y-2 pt-4">
                    <>
                      <Link href="tel:01710060020">
                        <Button className="w-full justify-center bg-premium-gradient">
                          <Phone className="h-4 w-4 mr-2" />
                          Call Now
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
