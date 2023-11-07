"use server";
import { Button, buttonVariants } from "../../ui/button";
import { PlusCircle, User } from "lucide-react";
import { UserNav } from "./UserNav";
import { getCurrentUser } from "@/lib/session";
import Link from "next/link";
import { headers } from "next/headers";

const Navbar = async () => {
  const pathname = headers().get("x-next-pathname") as string;
  const session = await getCurrentUser();

  if (pathname === "/register" || pathname === "/login") return null;

  return (
    <nav className="fixed top-0 w-full z-20">
      <div className="container flex justify-between items-center py-6">
        <div className="flex items-center space-x-2">
          <Button variant="link" className="pl-0">
            <img src="/test.png" alt="Logo" width={200} height={50} />
          </Button>
        </div>
        <nav className="flex items-center space-x-1 text-sm font-medium text-gray-800">
    <Link
              href="/register"
              className={buttonVariants({
                variant: "default",
                className: "text-white pr-0",
              })}
            >
            <PlusCircle className="mr-2 h-4 w-4" /> Add Listing
          </Link>
          {session?.user ? (
            <UserNav user={session.user} />
          ) : (
            <Link
              href="/register"
              className={buttonVariants({
                variant: "link",
                className: "text-white pr-0",
              })}
            >
              <User className="mr-2 h-4 w-4" />
              Login / Register
            </Link>
          )}
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
