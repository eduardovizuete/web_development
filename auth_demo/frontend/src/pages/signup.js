import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../redux/slices/authSlice";
import { authAPI } from "../services/api";

export default function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [retypePassword, setRetypePassword] = useState("");
    const [error, setError] = useState(null);

    // get the dispatcher hook to call the action functions 
    const dispatcher = useDispatch()

    const handleSubmitButton = async (e) => {
        e.preventDefault()

        //local checks
        if (password !== retypePassword) {
            setError('Passwords do not match')
            return
        }

        //call the api 
        const response = await authAPI.api_signup({ email, password })

        //set the error
        if (!response) {
            setError("Some error occurred. Try again later");
            return;
        }

        if (response.error) {
            setError(response.error)
            return
        }

        const userJSON = JSON.stringify(response)

        //login the user once account is created
        dispatcher(login(userJSON))
    }

    return (
        <div>
            <div className="card">
                <h2>Create Account</h2>
                <form method="post">
                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input
                            type="password"
                            name="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Confirm Password:</label>
                        <input
                            type="password"
                            name="password"
                            onChange={(e) => setRetypePassword(e.target.value)}
                            value={retypePassword}
                            required
                        />
                    </div>
                    <button onClick={handleSubmitButton} type="submit" className="submit-btn">
                        Submit
                    </button>
                    <p>
                        Already an account? <Link to="/=">Login</Link>
                    </p>
                    {error && <div className="error-message">{error}</div>}
                </form>
            </div>
        </div>
    );
}