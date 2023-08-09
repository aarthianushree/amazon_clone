import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useDataLayerContext } from './DataLayer';



function Header() {

  const [{basket},dispatch] = useDataLayerContext();

  return (
    <nav className='header'>
     {/* logo on the left */}

    <Link to='/'>
     <img className='header_logo' 
     src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
     alt=""
     />
    </Link>

     {/* search box */}
    <div className='header_search'>
     <input type='text' className='header_searchInput'/>
     <SearchIcon className='header_searchIcon' fontSize='large'/>
    </div>

    {/* 3 links */}
    {/* basket icon with number */}
    <div className='header_nav'>

     {/* 1st link */}
    <Link to='/login' className='header_link'>
      <div className='header_option'>
      <span className='header_optionLine1'>hello Anushree</span>
      <span className='header_optionLine2'>sign in</span>
      </div>
    </Link>

     {/* 2nd link */}
     <Link to='/login' className='header_link'>
      <div className='header_option'>
      <span className='header_optionLine1'>Returns</span>
      <span className='header_optionLine2'>& Orders</span>
      </div>
    </Link>

     {/* 3rd link */}
     <Link to='/login' className='header_link'>
      <div className='header_option'>
      <span className='header_optionLine1'>Your</span>
      <span className='header_optionLine2'>Prime</span>
      </div>
    </Link>

    {/* 4th link */}
    <Link to='/checkout' className='header_link'>
      <div className='header_optionBasket'>
      <ShoppingCartIcon/>
      <span  className='header_optionLine2 header_basketCount'>{basket?.length}</span>
      </div>
    </Link>

    </div>

    </nav>
  )
}

export default Header