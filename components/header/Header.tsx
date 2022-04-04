import Link from 'next/link'
import React from 'react'

export const Header: React.FC = () => {
  return (
    <header className=" mx-auto m-2 flex max-w-7xl items-center justify-between border-2 border-teal-500 px-7 py-3">
      <div>
        <Link href={'/'}>
          <a>
            {' '}
            <h3>Cryptocate</h3>
          </a>
        </Link>
      </div>
      <div className="flex items-center space-x-5">
        <Link href={'/'}>
          <a>
            {' '}
            <h3>Home</h3>
          </a>
        </Link>
        <Link href={'/about'}>
          <a>
            {' '}
            <h3>About</h3>
          </a>
        </Link>
        <Link href={'/contact'}>
          <a>
            {' '}
            <h3>Contact</h3>
          </a>
        </Link>
      </div>
    </header>
  )
}
