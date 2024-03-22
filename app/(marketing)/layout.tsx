import Link from "next/link";

import { marketingConfig } from "@/config/marketing";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { MainNav } from "./components/main-nav";
import { SiteFooter } from "./components/site-footer";
import { useState } from "react";
import { FaBell } from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  // const [user, setUser] = useState(true);
  const user = true;
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container z-40 bg-background">
        <div className="flex h-20 items-center justify-between py-6">
          <MainNav items={marketingConfig.mainNav} />
          {!user ? (
            <nav className="flex gap-2">
              <Link
                href="/login"
                className={cn(
                  buttonVariants({ variant: "secondary", size: "sm" }),
                  "px-4"
                )}
              >
                Login
              </Link>
              <Link
                href="/register"
                className={cn(
                  buttonVariants({ variant: "default", size: "sm" }),
                  "px-4"
                )}
              >
                Sign up
              </Link>
            </nav>
          ) : (
            <div className=" flex items-center gap-4">
              <FaBell />
              {/* <Avatar className=" bg-slate-100   w-10 h-10">
                <AvatarImage
                  className=" rounded-full"
                  src="https://github.com/shadcn.png"
                />
                <AvatarFallback>OM</AvatarFallback>
              </Avatar> */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar className=" bg-slate-100   w-10 h-10">
                    <AvatarImage
                      className=" rounded-full"
                      src="https://github.com/shadcn.png"
                    />
                    <AvatarFallback>OM</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioGroup value="bottom">
                    <DropdownMenuRadioItem value="top">
                      Top
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="bottom">
                      Bottom
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="right">
                      Right
                    </DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )}
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
