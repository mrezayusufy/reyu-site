"use client";
import Image from 'next/image'
import Link from 'next/link';
import { useState } from 'react'

export default function Navigation() {
  const [toggle, setToggle] = useState<Boolean>(false);
  const onToggle = () => {
    setToggle(!toggle)
    console.log('toggle', toggle)
  }
  return (
    <nav className="nav z-2 d-flex flex-row justify-content-between position-relative">
      <Image
        className=''
        src="/ryu.svg"
        alt="ryu Logo"
        width={40}
        height={40}
        priority />
      <div className={`mobile-nav d-md-none w-100 backdrop-blur position-fixed top-0 start-0 svh-100 z-3   ${toggle ? "d-block" : "d-none"}`}>
        <ul className={`d-flex fs-5 text-capitalize flex-column h-100 bg-light w-75 position-relative text-black`}>
          <li className='ms-auto z-2 p-3'><button onClick={onToggle} className='btn p-1 rounded-pill'><Image src={"/close.svg"} width={32} height={32} alt='close' /></button></li>
          <li className='py-3 border-bottom border-primary px-3'>
            <Link href="/">home</Link>
          </li>
          <li className='py-3 border-bottom border-primary px-3'>
            <Link href="/about-me">my intro</Link>
          </li>
          <li className='py-3 border-bottom border-primary px-3'>
            <Link href="/">services</Link>
          </li>
          <li className='py-3 border-bottom border-primary px-3'>
            <Link href="/">portfolio</Link>
          </li>
          <li className='py-3 border-bottom border-primary px-3'>
            <Link href="/">testimonials</Link>
          </li>
          <li className='py-3 border-bottom border-primary px-3'>
            <Link href="/">blog</Link>
          </li>
          <li className='py-3 border-bottom border-primary px-3'>
            <Link href="/">hire me</Link>
          </li>
          <li className='mx-auto mt-auto mb-4'>
            <button className='btn btn-light px-4 py-2 fs-7 text-capitalize border border-light-subtle border-opacity-25'>download CV</button>
          </li>
        </ul>
      </div>
      <ul className={`menu d-none d-md-flex align-items-center justify-content-between gap-3 gap-lg-5`}>
        <li className=''>
          <ul className='d-flex gap-3 gap-lg-5'>
            <li className="menu-item current">
              home
            </li>
            <li className="menu-item">
              my intro
            </li>
            <li className="menu-item">
              services
            </li>
            <li className="menu-item">
              portfolio
            </li>
            <li className="menu-item">
              testimonials
            </li>
            <li className="menu-item">
              blog
            </li>
            <li className="menu-item">
              hire me
            </li>
          </ul>
        </li>
        <li className=''>
          <button className='btn btn-light px-4 py-2 fs-7 text-capitalize border border-light-subtle border-opacity-25'>download CV</button>
        </li>
      </ul>
      <button className='btn d-md-none z-2' onClick={onToggle}><Image src={"/menu.svg"} alt='menu' width={32} height={32} /></button>
    </nav>
  )
}