import { FaRegUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
import { CiCirclePlus } from 'react-icons/ci';
function Navbar() {
  const user = sessionStorage.getItem('user')
  const userInfo = JSON.parse(user)
  
  return (
    
    <nav
      aria-label='Main'
      data-orientation='horizontal'
      dir='ltr'
      className='relative z-10 flex max-w-max flex-1 items-center justify-center'
    >
      <div style={{ position: 'relative' }}>

     
        <ul className='flex gap-8 list-none items-center justify-center'>
        <li>
           
           <Link to={'/products'}>
           <CiCirclePlus size={23} color='white' />
           </Link>
       
       </li>

          {userInfo && <li>{`Bienvenido, ${userInfo.sub}`}</li>}
          <li>
           
              <Link to={'/login'}>
                <FaRegUserCircle size={23} color='white' />
              </Link>
          
          </li>
          <li>
            <a href='#' data-radix-collection-item=''>
              Shop
            </a>
          </li>
          <li>
            <a href='#' data-radix-collection-item=''>
              About
            </a>
          </li>
          <li>
            <a href='#' data-radix-collection-item=''>
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className='absolute left-0 top-full flex justify-center'></div>
    </nav>
  )
}

export default Navbar
