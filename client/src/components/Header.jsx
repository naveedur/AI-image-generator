import {  Link } from 'react-router-dom';
import { logo } from '../assets';

const Header = () => {
  return (
<header className="w-full flex justify-between items-center bg-[rgba(49,120,116,0.8)] sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
      <Link to="/">
        <img src={logo} alt="logo" className="w-28 object-contain" />
      </Link>

      <Link to="/create-post" className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md">Create</Link>
    </header>  )
}

export default Header