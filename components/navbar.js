// components/NavBar.js
import Link from 'next/link';
import { useRouter } from 'next/router';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const NavBar = () => {
  const router = useRouter();

  const logout = () => {
    localStorage.removeItem('authToken');
    window.location.href = '/access';
  };

  const getLinkClass = (path) => {
    return router.pathname === path
      ? 'nav-secondary'
      : 'nav-primary';
  };

  return (
    
    <nav className="w-44 h-screen bg-blackbean flex flex-col p-2">
      <h2 className="text-white text-3xl font-light w-full p-8 flex justify-center items-center mb-1">
         MailService
      </h2>
      <div className='flex flex-col h-full justify-between'>
        <ul className="flex flex-col items-center gap-4">
          <Link href="/" className={getLinkClass('/')}>
              Home
          </Link>
          <Link href="/dashboard" className={getLinkClass('/dashboard')}>
              Dashboard
          </Link>
          <Link href="/contacts" className={getLinkClass('/contacts')}>
              Contacts
          </Link>
        </ul>
        <div className='w-full text-center'>
          <button onClick={logout} className="text-rosepompaduor text-start"
          >Log Out</button>
        </div>  
      </div> 
    </nav>
  );
};

export default NavBar;
