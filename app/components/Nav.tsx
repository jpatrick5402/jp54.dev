'use client';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { IoMenu } from 'react-icons/io5';

export default function Nav() {
  const [showNav, setShowNav] = useState(false);

  const url = usePathname();

  const urlMap: Record<string, string> = {
    '/': "ABOUT",
    '/projects': "PROJECTS",
    '/photos': "PHOTOS",
  }

  return (
    <div className="z-1 flex w-full bg-(--nav-background)">
      <nav className="hidden sm:flex bg-(--nav-background) max-w-6xl w-full m-auto pt-3 pb-3 gap-4 text-2xl font-bold items-center align-center justify-center">
        <Link className={`flex m-auto ${url === '/' && 'text-(--text-accent)'}`} href='/'>ABOUT</Link>
        <Link className={`flex m-auto ${url === '/projects' && 'text-(--text-accent)'}`} href='/projects'>PROJECTS</Link>
        <Link className={`flex m-auto ${url === '/photos' && 'text-(--text-accent)'}`} href='/photos'>PHOTOS</Link>
      </nav>
      <nav className="flex flex-col sm:hidden bg-(--nav-background) m-auto max-w-5xl gap-4 pt-3 pb-3 text-2xl font-bold items-center align-center justify-center">
        <div className="flex gap-2" onClick={() => setShowNav(!showNav)}>
          <p className="text-center m-auto"><IoMenu /></p>
          <p className="text-center text-(--text-accent)">{urlMap[url]}</p>
        </div>
        {showNav && <div>
          <Link className={`flex m-auto ${url === '/' && 'text-(--text-accent)'}`} onClick={() => setShowNav(!showNav)} href='/'>ABOUT</Link>
          <Link className={`flex m-auto ${url === '/projects' && 'text-(--text-accent)'}`} onClick={() => setShowNav(!showNav)} href='/projects'>PROJECTS</Link>
          <Link className={`flex m-auto ${url === '/photos' && 'text-(--text-accent)'}`} onClick={() => setShowNav(!showNav)} href='/photos'>PHOTOS</Link>
        </div>}
      </nav>
    </div>
  )
}
