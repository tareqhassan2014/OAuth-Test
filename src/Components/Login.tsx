import { SERVER_URL } from "../config";
import "./login.css";

const Login = () => {
    const loginWithGoogle = () => {
        window.open(`${SERVER_URL}/auth/google`, "_self");
    };

    return (
        <>
            <div className="login-page">
                <h1 style={{ textAlign: "center" }}>Login</h1>
                <div className="form">
                    <form className="login-form">
                        <input
                            type="text"
                            name=""
                            id=""
                            placeholder="username"
                        />
                        <input
                            type="password"
                            name=""
                            id=""
                            placeholder="password"
                        />
                        <button>Login</button>
                        <p className="message">
                            Not Register? <a href="#">Create an account</a>
                        </p>
                    </form>
                    <button
                        className="login-with-google-btn"
                        onClick={loginWithGoogle}
                    >
                        Sign In With Google
                    </button>
                </div>
            </div>
        </>
    );
};

export default Login;
