import Link from 'next/link'
import React from 'react'

const ButtonOne = () => {
  return (
    <>
      <Link href={'#'} className='bg-[#ff8e5e] leading-[15px] uppercase text-sm py-4 px-11 inline-block '>
        Talk To Me
      </Link>
    </>
  )
}



export {
    ButtonOne
}
