import React from 'react'
import {} from '@heroicons/react/outline'
import Link from 'next/link'
export const Footer = () => {
  return (
    <footer
      id="footer"
      className="m-2 mx-auto flex max-w-7xl flex-col items-center justify-between border-2 border-teal-500 px-7 py-5 sm:flex-row"
    >
      <div className="flex flex-col items-start">
        <p>
          Cryptocate&#169; {new Date().getFullYear()} - Stay updated with latest crypto news!
        </p>
      </div>
      <div className="flex items-center justify-between space-x-4">
        <p>Contact</p>
        <Link href="https://www.instagram.com/_pr4v33n/" passHref>
          <a target="_blank" rel="noopener noreferrer">
            <p className="fa fa-instagram cursor-pointer text-red-400"></p>
          </a>
        </Link>
        <Link href="https://twitter.com/Praveen102399" passHref>
          <a target="_blank" rel="noopener noreferrer">
            <p className="fa fa-twitter cursor-pointer text-blue-400"></p>
          </a>
        </Link>
        <Link href="https://github.com/Pr4v33n23" passHref>
          <a target="_blank" rel="noopener noreferrer">
            <p className="fa fa-github text-white-400 cursor-pointer"></p>
          </a>
        </Link>
      </div>
    </footer>
  )
}
