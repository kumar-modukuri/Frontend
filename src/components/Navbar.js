import {Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
        <header>
            <div className="container">
                <Link to="/">
                    <img src='https://static.vecteezy.com/system/resources/thumbnails/020/397/532/small/ems-letter-logo-design-on-white-background-ems-creative-circle-letter-logo-concept-ems-letter-design-vector.jpg' alt='Logo'/> 
                    <h2>Employee Management System</h2>
                </Link>
            </div>
        </header>
     );
}
 
export default Navbar;