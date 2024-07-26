import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({searched}) => {
    const [inputValue,setInputValue] = useState("");

    const handleClick = () => {
        searched(inputValue);
    }

    return ( 
        <header>
            <div className="container">
                <div>
                    <Link to="/">
                        <img src={require('../assets/rk_logo.jpg')} alt='Logo' className='logo'/>
                        <h2 className='titleMain'>PROJECT 01</h2>
                    </Link>
                </div>
                <div className='search-about-container'>
                    <div className='search-wrapper'>
                        <input className='search-bar' placeholder='Search...' onChange={(e) => setInputValue(e.target.value)} value={inputValue}/>
                        <img src={require('../assets/Search-Logo.png')} alt='Button Logo' className='search-btn' onClick={handleClick}/>
                    </div>
                    <Link to="/about">
                        <p className='about'>About</p>
                    </Link>
                </div>
            </div>
        </header>
     );
}

export default Navbar;