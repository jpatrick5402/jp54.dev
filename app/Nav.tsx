'use client';
import Link from 'next/link';
import {FaExternalLinkSquareAlt} from 'react-icons/fa';
import { useState } from 'react';

export default function Nav() {
  const [showNav, setShowNav] = useState(false);

  return (
    <div>
        <div className="flex sm:hidden bg-(--background) w-full pt-3 pb-3 gap-4 text-2xl font-bold items-center align-center justify-center">
          <p onClick={() => setShowNav(!showNav) }>MENU</p>
          {showNav && <div>
            <Link className="flex m-auto" href='/'>ABOUT</Link>
            <Link className="flex m-auto" href='/projects'>PROJECTS</Link>
            <Link className="flex m-auto" href='https://store.jp54.dev'>STORAGE<FaExternalLinkSquareAlt className="m-auto p-1" /></Link>
            <Link className="flex m-auto" href='/photography'>PHOTOGRAPHY</Link>
          </div>}
        </div>
        <nav className="hidden sm:flex bg-(--background) w-full pt-3 pb-3 gap-4 text-2xl font-bold items-center align-center justify-center">
          <Link className="flex m-auto" href='/'>ABOUT</Link>
          <Link className="flex m-auto" href='/projects'>PROJECTS</Link>
          <Link className="flex m-auto" href='https://store.jp54.dev'>STORAGE<FaExternalLinkSquareAlt className="m-auto p-1" /></Link>
          <Link className="flex m-auto" href='/photography'>PHOTOGRAPHY</Link>
        </nav>
    </div>
  )
}
