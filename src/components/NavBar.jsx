import burgerMenu from '../assets/images/icon-menu.svg'

export const NavBar = () => {
  return (
    <>
    <ul className="hidden sm:flex text-[18px] sm:w-[438px] sm:place-content-around sm:text-[16px] sm:items-center">
        <li>
            <a className='hover:text-SoftRed' href="">Home</a>
        </li>
        <li>
            <a className='hover:text-SoftRed' href="">New</a>
        </li>
        <li>
            <a className='hover:text-SoftRed' href="">Popular</a>
        </li>
        <li>
            <a className='hover:text-SoftRed' href="">Trending</a>
        </li>
        <li>
            <a className='hover:text-SoftRed' href="">Categories</a>
        </li>
    </ul>
    <img className='w-10 h-4 cursor-pointer sm:hidden' src={burgerMenu} alt="Menu hamburguesa" />
    </>
    
  )
}
