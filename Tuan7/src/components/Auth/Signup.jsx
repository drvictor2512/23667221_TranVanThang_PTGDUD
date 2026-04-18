import "./Auth.css";

const Signup = () => {
    return (
        <div className="signup-page">
            <div className="signup-card">
                <h2>Sign up</h2>
                <div className="row">
                    <input placeholder="First name" />
                    <input placeholder="Last name" />
                </div>
                <input placeholder="Email" />
                <input type="password" placeholder="Password" />
                <label className="policy">
                    <input type="checkbox" />
                    By signing up, you agree with Terms & Privacy Policy
                </label>
                <button className="main-btn">Sign up</button>
                <p className="login-link">
                    Already have an account? <span>Log in</span>
                </p>
                <div className="socials">
                    <span>G</span>
                    <span>f</span>
                    <span></span>
                </div>
            </div>
        </div>
    );
};

export default Signup;