import Link from 'next/link';
import React from 'react'
import { LinkedInIcon } from '../IconComponent';

const Footer = () => {
    const date = new Date().getFullYear();
  return (
    <footer className="footer ">
        <div className="container py-2">       
          <div className="bg-[#1d1e22] rounded-xl py-12 px-14 text-white text-sm">       
              <div className="copyrights  py-2 flex items-center justify-between">
                <p className="mb-0 flex-1">&copy; {date}, All Rights Reserved.</p>

                <ul className='flex-1 items-center justify-center inline-flex list-none gap-2'>
                  <li>
                    <Link href="" target="_blank">
                      <LinkedInIcon/>
                    </Link>
                  </li>
                  <li>
                    <Link href="" target="_blank">
                      <LinkedInIcon/>
                    </Link>
                  </li>
                </ul>

                <div className='flex items-center flex-1'>
                  <span className='h-[1px] opacity-10 flex-1 bg-white'></span>
                  <div className='flex items-center before:flex-1 before:border-t before:border-[#fff] 
                    before:mt-[1px] before:opacity-20 before:mr-1  w-full'>
                    <p>Designed by <Link href="/" className="text-muted">Peegee</Link></p>
                  </div>
                </div>
              </div>
          </div>
        </div>
    </footer>
  )
}

export default Footer
