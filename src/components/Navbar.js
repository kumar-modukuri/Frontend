import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ searched }) => {
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        searched(inputValue);
    }, [inputValue, searched]);

    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return (
        <header>
            <div className="container">
                <div>
                    <Link to="/">
                        <img src={require('../assets/rk_logo.jpg')} alt='Logo' className='logo' />
                        <h2 className='titleMain'>MY PROJECT</h2>
                    </Link>
                </div>
                <div className="search-about-container">
					{isHomePage && (
						<input
							className="search-bar"
							placeholder="Search..."
							onChange={(e) => setInputValue(e.target.value)}
							value={inputValue}
						/>
					)}
					{isHomePage && (
						<Link to="/about">
							<p className="about">About</p>
						</Link>
					)}
				</div>
            </div>
        </header>
    );
}

export default Navbar;