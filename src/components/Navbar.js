import {Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
        <header>
            <div className="container">
                <Link to="/">
                    <img src='https://github.com/kumar-modukuri/assets/raw/main/rk_logo.jpg' alt='Logo'/> 
                    <h2>Employee Management System</h2>
                </Link>
            </div>
        </header>
     );
}
 
export default Navbar;