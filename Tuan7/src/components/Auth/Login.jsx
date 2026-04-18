import "./Auth.css";
import i1 from '../../assets/i1.png';

const Login = ({ onClose }) => {
    return (
        <div className="login-modal">
            <div className="login-content">
                <div className="close-btn" onClick={onClose}>×</div>
                <div className="login-left">
                    <img src={i1} alt="Cooking" />
                    <p>"Embrace the art of cooking, where flavors come alive!"</p>
                </div>
                <div className="login-right">
                    <h2>Login</h2>
                    <p className="desc">Enter your email to log in.</p>
                    <input placeholder="Enter your email" />
                    <button className="main-btn">Continue</button>
                    <div className="divider">OR</div>
                    <button className="google">G Continue with Google</button>
                    <button className="facebook">f Continue with Facebook</button>
                    <button className="apple"> Continue with Apple</button>
                </div>
            </div>
        </div>
    );
};

export default Login;