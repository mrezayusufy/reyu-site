import Image from 'next/image'

export default function Navigation() {
  return (
    <nav className="nav">
      <Image
        className='logo'
        src="/ryu.svg"
        alt="ryu Logo"
        width={80}
        height={80}
        priority />
      <ul className="menu">
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
      <div>
        <button className='btn btn-light px-4 py-2 fs-7 text-capitalize border border-light-subtle border-opacity-25'>download CV</button>
      </div>
    </nav>
  )
}