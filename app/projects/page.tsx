import { FaExternalLinkSquareAlt } from 'react-icons/fa';
import Link from 'next/link';

const projectList = [
  {
    'title': 'GitHub',
    'description': 'All source code can be found on my GitHub page',
    'link': 'https://github.com/jpatrick5402',
  },
  {
    'title': 'This page (jp54.dev)',
    'description': 'My personal protfolio page',
    'link': 'https://github.com/jpatrick5402/jp54.dev',
  },
  {
    'title': 'PAWS',
    'description': 'Automated food and water dispensor for your pets',
    'link':'https://github.com/jpatrick5402/PAWS',
  },
  {
    'title': 'Embedded Web Sever',
    'description': 'A website being run from a microcontroller (HTML, CSS, and JS)',
    'link':'https://github.com/jpatrick5402/Embedded-Web-Server',
  },
  {
    'title': 'Packet Scanner',
    'description': 'Barebones terminal-based packet scanner',
    'link':'https://github.com/jpatrick5402/NIDS',
  },
  {
    'title': '.dotfiles',
    'description': 'A repo containing configurations I use for my systems',
    'link': 'https://github.com/jpatrick5402/.dotfiles',
  },
  {
    'title': 'Service Desk Multi-Tool',
    'description': 'A collection of helful tools for a service desk technician',
    'link': 'https://github.com/jpatrick5402/SDMultitool',
  },
  {
    'title': 'Finance-Hub',
    'description': 'An all-in-one financial tracking tool',
    'link': 'https://github.com/jpatrick5402/finance-hub',
  },
  {
    'title': 'Tracker',
    'description': 'An online to-do list',
    'link': 'https://github.com/jpatrick5402/tracker',
  },
]

export default function Projects() {
  return (
    <div className="flex">
      <div className="flex m-auto">
        <ul className="flex flex-col gap-2 m-2">
          {
            projectList.map((project, index) => {
              return (
                <li key={index} className="p-2 m-auto flex bg-(--background) rounded-sm">
                  <div className="flex flex-col sm:flex-row">
                    <Link href={project.link} target='_blank' className="text-center text-(--text-accent) font-bold">{project.title + ":"}</Link>
                    <FaExternalLinkSquareAlt className="text-(--text-accent) m-auto" />
                  </div>
                  <p className="text-center">&nbsp;{project.description}</p>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  );
}
