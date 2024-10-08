import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../redux/slices/authSlice";
import { authAPI } from "../services/api";

export default function Login() {
    // we will use 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // make a new state constant so that we can show errors
    const [error, setError] = useState(null);

    // get the dispatcher hook to call the action functions 
    const dispatcher = useDispatch();

    // make this function async
    const handleSubmitButton = async (e) => {
        e.preventDefault();

        //lets call the API 
        const response = await authAPI.api_login({ email, password });

        if (!response) {
            setError("Some error occurred. Try again later");
            return;
        }

        console.log(response)

        //check if there is any error
        if (response.error) {
            setError(response.error);
            return;
        }

        //first lets convert the userJSON which is email and JWT token 
        //in case of successful login
        const userJSON = JSON.stringify(response)

        //now lets login the user using dispatcher action function
        dispatcher(login(userJSON))
    }

    return (
        <div>
            <div className="card">
                <h2>Login</h2>
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
                    <button
                        onClick={handleSubmitButton}
                        type="submit"
                        className="submit-btn"
                    >
                        Submit
                    </button>
                    <p>
                        New user? <Link to="/signup">Create an account</Link>
                    </p>

                    {error && <div className="error-message">{error}</div>}
                </form>
            </div>
        </div>
    );
}