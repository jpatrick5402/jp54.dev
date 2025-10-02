import { FaExternalLinkSquareAlt } from 'react-icons/fa';
import Link from 'next/link';

export default function Projects() {
  return (
    <div className="flex">
      <div className="flex m-auto">
        <ul className="flex flex-col gap-2 m-2">
          <li className="p-2 m-auto flex bg-(--background) rounded-sm">
            <div className="flex flex-col sm:flex-row">
              <Link href="https://github.com/jpatrick5402/SDMultitool" className="text-center text-(--text-accent)">GitHub:</Link>
              <FaExternalLinkSquareAlt className="text-(--text-accent) m-auto" />
            </div>
            <p className="text-center">&nbsp;All source code can be found on my GitHub page</p>
          </li>
          <li className="p-2 m-auto flex bg-(--background) rounded-sm">
            <div className="flex flex-col sm:flex-row">
              <Link href="https://github.com/jpatrick5402/SDMultitool" className="text-center text-(--text-accent)">.dotfiles:</Link>
              <FaExternalLinkSquareAlt className="text-(--text-accent) m-auto" />
            </div>
            <p className="text-center">&nbsp;A repo containing configurations I use for my systems</p>
          </li>
          <li className="p-2 m-auto flex bg-(--background) rounded-sm">
            <div className="flex flex-col sm:flex-row">
              <Link href="https://github.com/jpatrick5402/SDMultitool" className="text-center text-(--text-accent)">Service Desk MultiTool:</Link>
              <FaExternalLinkSquareAlt className="text-(--text-accent) m-auto" />
            </div>
            <p className="text-center">&nbsp;A C#/WPF desktop application</p>
          </li>
          <li className="p-2 m-auto flex bg-(--background) rounded-sm">
            <div className="flex flex-col sm:flex-row">
              <Link href="https://finance-hub.dev" className="text-center text-(--text-accent)">Finance Hub:</Link>
              <FaExternalLinkSquareAlt className="text-(--text-accent) m-auto" />
            </div>
            <p className="text-center">&nbsp;An all-in-one financial tracking tool</p>
          </li>
          <li className="p-2 m-auto flex bg-(--background) rounded-sm">
            <div className="flex flex-col sm:flex-row">
              <Link href="https://tracker-jp.vercel.app" className="text-center text-(--text-accent)">Tracker:</Link>
              <FaExternalLinkSquareAlt className="text-(--text-accent) m-auto" />
            </div>
            <p className="text-center">&nbsp;An online to-do list</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
