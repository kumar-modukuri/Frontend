import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <header>
            <div className="container">
                <Link to="/">
                    <img src={require('../assets/rk_logo.jpg')} alt='Logo' className='logo'/>
                    <h2 className='titleMain'>PROJECT 01</h2>
                </Link>
                <Link to="/about">
                    <p className='about'>About</p>
                </Link>
            </div>
        </header>
     );
}
 
export default Navbar;