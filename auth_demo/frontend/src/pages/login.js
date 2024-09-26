import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../redux/slices/authSlice";

export default function Login() {
    // we will use 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // get the dispatcher hook to call the action functions 
    const dispatcher = useDispatch();

    const handleSubmitButton = (e) => {
        e.preventDefault();
        // mock user 
        const user = {
            email: "test@gmail.com",
            token: "hulalalalala"
        };
        //we will convert the user obj to JSON and call the login function from redux.
        // The JSON string will be caught by action and we can access the JSON from action.payload 
        dispatcher(login(JSON.stringify(user)));
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
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                        />
                    </div>
                    <button onClick={handleSubmitButton} type="submit" className="submit-btn">
                        Submit
                    </button>
                    <p>
                        New user? <Link to="/signup">Create an account</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}