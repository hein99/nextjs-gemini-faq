'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';

const links = [
  { name: 'FAQs', href: '/' },
  { name: 'Contact Us', href: '/contact-us' },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="flex justify-center">
      {links.map((link, index) => (
        <Link
          key={link.name}
          href={link.href}
          className={clsx(
            'w-40 h-8 leading-8 rounded-full bg-gray-300 text-center hover:bg-gray-500 text-lg font-semibold',
            {
              'bg-gray-800 text-gray-300': pathname === link.href,
            },
            {
              'ms-4': index == !0,
            }
          )}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
