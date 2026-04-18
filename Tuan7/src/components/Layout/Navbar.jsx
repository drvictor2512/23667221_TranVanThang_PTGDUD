import "./Navbar.css";

const Navbar = ({ setAuthType }) => {
    return (
        <div className="navbar">
            <div className="logo">🍳 Cheffy</div>
            <input className="search" placeholder="What do you like to cook?" />
            <div className="menu">
                <span>What to cook</span>
                <span>Recipes</span>
                <span>Ingredients</span>
                <span>Occasions</span>
                <span>About us</span>
            </div>
            <div className="actions">
                <button
                    className="login-btn"
                    onClick={() => setAuthType("login")}
                >
                    Login
                </button>
                <button
                    className="sub-btn"
                    onClick={() => setAuthType("signup")}
                >
                    Subscribe
                </button>
            </div>
        </div>
    );
};

export default Navbar;