import { Link } from 'react-router-dom'
// import './Header.styles.scss'

const Header = () => {
  return (
    <nav className='header'>
      <div>
        <span><Link className='header__link' to='/'>Home</Link></span>
        <span><Link className='header__link' to='/login'>Login</Link></span>
        <span><Link className='header__link' to='/register'>Registro</Link></span>
        <span><Link className='header__link' to='/profile'>Perfil</Link></span>
      </div>
    </nav>
  )
}

export default Header