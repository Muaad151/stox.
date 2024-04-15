import { IoLocationOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";

function Footer() {
  return (
    <div className='bg-gray-100  w-full'>
      <footer className='max-w-4xl mx-auto px-12 mt-2 mb-6 py-8'>
        <div className="grid grid-cols-6 items-center gap-4">
          <div className='cols-start-1 col-span-2'>
            <h1 className="text-sky-700 font-bold text-3xl mb-2">Stox.</h1>
            <p className="text-gray-400 text-xs">
              Optimize your investment potential in the dynamic world of the capital
              markets with the convenience and multitude of features offered by Stox.
            </p>
          </div>
          <div className="cols-start-2 col-span-1">
            <h2 className="text-black font-semibold text-xs mb-4">Companies</h2>
            <ul className="text-gray-500 text-xs flex flex-col gap-3 ">
              <li><a href="#" className=''>About Us</a></li>
              <li><a href="#" className=''>Careers</a></li>
              <li><a href="#" className=''>Contact Us</a></li>
            </ul>
          </div>
          <div className="col-end-7 col-span-2">
            <h2 className="text-black font-semibold text-xs mb-4">Contact Us</h2>
            <ul className="text-gray-500 text-xs flex flex-col gap-3 ">
              <li className="flex gap-2"><FiPhone  className="text-base"/> <a href="#" className=''>(999) XXX-XXX</a></li>
              <li className="flex gap-2"><IoLocationOutline className="text-base"/><a href="#" className=''>Lorem Ipsum</a></li>
              <li className="flex gap-2"><CiMail className="text-base"/><a href="#" className=''>Lorem@ipsum</a></li>
            </ul>
          </div>
        </div>    
      </footer>
        <div className="bg-white w-full">
          <p className='text-gray-600 text-[12px] mx-auto max-w-md text-center py-1'>Copyright @Stox 2024. All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer

