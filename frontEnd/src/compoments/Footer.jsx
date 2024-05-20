import footer_logo from './assets/logo_big.png'
import instagram_icon from './assets/instagram_icon.png'
import pintester_icon from './assets/pintester_icon.png'
import whatsapp_icon from './assets/whatsapp_icon.png'
const Footer = () => {
  return (
    <div className="footer flex flex-col justify-center items-center gap-12">
     <div className="footer-logo flex items-center gap-5">
      <img src={footer_logo} alt="" />
       <p className='text-neutral-700 text-5xl font-bold'>SHOPPER</p>
     </div>
     <ul className='footer-links flex list-none gap-12 text-xl text-neutral-800'>
        <li className='cursor-pointer  '>Company</li>
        <li className='cursor-pointer  '>Products</li>
        <li className='cursor-pointer  '>Offices</li>
        <li className='cursor-pointer  '>About</li>
        <li className='cursor-pointer  '>Contact</li>
    </ul>
    <div className="footer-social-icon flex gap-[20px]">
      <div className="footer-icons-container p-[10px] pb-[6px] bg-zinc-50 border-solid border-[1px] border-gray-200">
        <img src={instagram_icon} alt="" />
      </div>
      <div className="footer-icons-container p-[10px] pb-[6px] bg-zinc-50 border-solid border-[1px] border-gray-200">
        <img src={pintester_icon} alt="" />
      </div>
      <div className="footer-icons-container p-[10px] pb-[6px] bg-zinc-50 border-solid border-[1px] border-gray-200">
        <img src={whatsapp_icon} alt="" />
      </div>
    </div>
    <div className="footer-copyright flex flex-col items-center gap-7 w-[100%] mb-[30px] text-zinc-900 text-xl">
      <hr className='w-[80%] border-none border rounded-[10px] h-[3px] bg-stone-300'/>
      <p>Copyright @ 2024 - All Rights Reserved</p>
    </div>
    </div>
  )
}

export default Footer
