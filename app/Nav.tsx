'use client';
import Link from 'next/link';
import { FaExternalLinkSquareAlt } from 'react-icons/fa';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Nav() {
  const [showNav, setShowNav] = useState(false);

  const url = usePathname();

  const urlMap: Record<string, string> = {
    '/': "/ABOUT",
    '/projects': "/PROJECTS",
    '/photography': "/PHOTOGRAPHY",
  }

  return (
    <div className="z-1 flex w-full bg-(--background)">
      <nav className="hidden sm:flex bg-(--background) max-w-5xl w-full m-auto pt-3 pb-3 gap-4 text-2xl font-bold items-center align-center justify-center">
        <Link className={`flex m-auto ${url === '/' && 'text-(--text-accent)'}`} href='/'>ABOUT</Link>
        <Link className={`flex m-auto ${url === '/projects' && 'text-(--text-accent)'}`} href='/projects'>PROJECTS</Link>
        <Link className={`flex m-auto`} href='https://store.jp54.dev'>STORAGE<FaExternalLinkSquareAlt className="m-auto p-1" /></Link>
        <Link className={`flex m-auto ${url === '/photography' && 'text-(--text-accent)'}`} href='/photography'>PHOTOGRAPHY</Link>
      </nav>
      <nav className="flex sm:hidden bg-(--background) m-auto max-w-5xl gap-4 pt-3 pb-3 text-2xl font-bold items-center align-center justify-center">
        <div className="" onClick={() => setShowNav(!showNav)}>
          <p className="text-center">MENU:</p>
          <p className="text-center text-(--text-accent)">{urlMap[url]}</p>
        </div>
        {showNav && <div>
          <Link className={`flex m-auto ${url === '/' && 'text-(--text-accent)'}`} onClick={() => setShowNav(!showNav)} href='/'>ABOUT</Link>
          <Link className={`flex m-auto ${url === '/projects' && 'text-(--text-accent)'}`} onClick={() => setShowNav(!showNav)} href='/projects'>PROJECTS</Link>
          <Link className={`flex m-auto`} onClick={() => setShowNav(!showNav)} href='https://store.jp54.dev'>STORAGE<FaExternalLinkSquareAlt className="m-auto p-1" /></Link>
          <Link className={`flex m-auto ${url === '/photography' && 'text-(--text-accent)'}`} onClick={() => setShowNav(!showNav)} href='/photography'>PHOTOGRAPHY</Link>
        </div>}
      </nav>
    </div>
  )
}
