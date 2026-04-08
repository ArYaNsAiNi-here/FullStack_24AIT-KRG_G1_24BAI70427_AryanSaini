import { useState } from "react";

function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const[errors,setErrors] = useState([]);
    const validateForm = () => {
        const errors = [];
        if(email.trim() === ""){
            errors.push("Email is required");
        }
        if(!email.includes("@")){
            errors.push("Email is invalid");
        }
        if(password.trim() === ""){
            errors.push("Password is required");
        }
        if(password.length < 6){
            errors.push("Password must be at least 6 characters");
        }
        setErrors(errors);
        return errors.length === 0;
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(validateForm()){
            try{
                const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ email, password })
                });
                const data = await response.json();
                alert(`Email: ${email}, Password: ${password}`);
                console.log("Response from server:", data); 
            } catch (error) {
                console.error("Error submitting form:", error);

            }
        }
    }
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email: </label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
export default Login;