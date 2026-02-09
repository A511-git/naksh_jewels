"use client";
import Link from "next/link";

export const Navbar = () => {
    return (
        <nav className="border-b bg-black text-white position: sticky top-0">
            <div className="max-w-6xl mx-auto px-4 h-12 flex items-center justify-between">
                <Link className="text-2xl font-bold" href="/">
                    Products
                </Link>
                <Link className="text-2xl font-bold" href="/cart">
                    Cart
                </Link>
            </div>
        </nav>
    );
}
