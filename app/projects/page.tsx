import { FaExternalLinkSquareAlt } from 'react-icons/fa';
import Link from 'next/link';

export default function Projects() {
  return (
    <div className="flex">
      <div className="flex m-auto">
        <ul className="flex flex-col gap-2 m-2">
          <li className="p-2 m-auto flex bg-(--background) rounded-sm">
            <Link href="https://github.com/jpatrick5402/SDMultitool" className="text-(--text-accent)">Service Desk MultiTool:</Link>
            <FaExternalLinkSquareAlt className="text-(--text-accent) m-auto" />
            <p>&nbsp;A C#/WPF desktop application</p>
          </li>
          <li className="p-2 m-auto flex bg-(--background) rounded-sm">
            <Link href="https://finance-hub.dev" className="text-(--text-accent)">Finance Hub:</Link>
            <FaExternalLinkSquareAlt className="text-(--text-accent) m-auto" />
            <p>&nbsp;An all-in-one financial tracking tool</p>
          </li>
          <li className="p-2 m-auto flex bg-(--background) rounded-sm">
            <Link href="https://tracker-jp.vercel.app" className="text-(--text-accent)">Tracker:</Link>
            <FaExternalLinkSquareAlt className="text-(--text-accent) m-auto" />
            <p>&nbsp;An online to-do list</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
