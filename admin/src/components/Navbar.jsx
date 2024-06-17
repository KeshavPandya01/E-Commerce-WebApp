import navlogo from '../assets/nav-logo.svg'
import navProfile from '../assets/nav-profile.svg'
const Navbar = () => {
  return (
    <div className='navbar flex items-center justify-between py-[15px] px-[60px] shadow-[0 1px 3px -2px #000] mb-[1px] bg-white'>
      <img className="nav-logo w-[200px]" src={navlogo} alt="" />
      <img className="nav-profile w-[75px]" src={navProfile} alt="" />
    </div>
  )
}

export default Navbar
