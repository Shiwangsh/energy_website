import Link from 'next/link';
import { useRouter } from 'next/router';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <li
      className={
        isActive
          ? 'transition-all duration-200 ease-in-out border-b-2 border-yatri-blue text-yatri-blue md:p-0 md:text-base text-xl p-2'
          : 'md:hover:bg-transparent md:border-0 md:hover:text-yatri-blue md:p-0 md:text-base text-xl p-2'
      }
    >
      <Link
        href={href}
        // className={isActive ? 'border-b-2 border-yatri-blue text-yatri-blue' : 'text-white'}
        // className="block py-2 pl-3 pr-4 text-white-700 text-xl rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yatri-blue md:p-0"
      >
        {children}
      </Link>
    </li>
  );
}
