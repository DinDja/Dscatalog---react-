import './styles.css'
import 'bootstrap/js/src/collapse.js'
import { Link, NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className="navbar navbar-dark navbar-expand-md bg-primary main-nav">
            <div className='container-fluid'>
                <Link to={"/"} className="nav-logo-text">
                    <h4>DS Catalog</h4>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                    <ul className='navbar-nav offset-md-2 main-menu'>
                        <li>
                            <NavLink to={"/"} className='active'>HOME</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/Products"}>CATÁLOGO</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/Admin"}>ADMIM</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;