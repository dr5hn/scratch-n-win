import Link from "next/link";
// import { useState } from "react";
import { useRouter } from 'next/router';
import { useUser } from '../utils/auth/useUser';

const Header = () => {
  const { user, logout } = useUser()
  const router = useRouter()
  // const [isExpanded, toggleExpansion] = useState(false);
  
  return (
    <header className="text-gray-700 bg-teal-500 body-font">
      <div className="flex flex-wrap items-center justify-between max-w-4xl p-4 mx-auto md:flex-no-wrap md:p-8">
        <div className="flex items-center">
          {/* <img
            src="tailwind-logo.svg"
            className="w-10 mr-3 text-white"
          /> */}

          <Link href="/">
            <a className="text-xl font-bold text-white">
              Flora's Kitchen
            </a>
          </Link>
        </div>

        {/* <button
          className="flex items-center px-3 py-2 text-white border border-white rounded  md:hidden"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <ul
          className={`${isExpanded ? `block` : `hidden`
            } md:flex flex-col md:flex-row md:items-center md:justify-center text-sm w-full md:w-auto`}
        >
          {[
            { title: "Home", route: "/" },
            { title: "About", route: "/about" },
          ].map(navigationItem => (
            <li className="mt-3 md:mt-0 md:ml-6" key={navigationItem.title}>
              <Link href={navigationItem.route}>
                <a className="block text-white hover:text-orange-800">{navigationItem.title}</a>
              </Link>
            </li>
          ))}
        </ul> */}
        
        <Link href='/signin'>
          <button className={`${!(user || router.pathname == '/signin') ? `block` : `hidden`
            } inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0`}>
            Sign In
          </button>
        </Link>
        <button className={`${user ? `block` : `hidden`
            } inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0`} onClick={() => logout()}>
          Sign Out
        </button>
      </div>
    </header>
  );
}

export default Header
