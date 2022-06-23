import logo from '../Repo/Logo.png';
import cart from '../Repo/cart.svg'
import { Link } from "react-router-dom";

const Header = () => {

    return(
    <nav>
        <div id="Header">
                <Link to="/"><div id='logo-div'><img style={{height:"15vh"}}src={logo} alt="Logo"></img></div></Link>
                <div id = "shopping-div">
                    <Link style={{color: 'inherit', textDecoration: 'inherit'}} to="/products"><div>Products</div></Link>
                    <Link to="/checkout"><img src={cart} alt="checkout"></img></Link>
                </div>
        </div>
    </nav>
    )
}

export default Header