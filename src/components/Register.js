import React, {useState} from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    const Register = async(e) =>{
        e.preventDefault();
        try {
            await axios.post("http://localhost:8005/api/v1/register", {
            username : name,
            email : email,
            password : password
            });
            navigate("/login");
        } catch (error) {
            if(error.response){
                console.log(error.response.data);
            }
        }
    } 
   
    
    return (
        <section className="hero has-background-grey-light is-fullheight is-fullwidth">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-4-desktop">
                            <form onSubmit={Register} className="box">
                                <div className="field mt-5">
                                <div class="field">
                                <label class="label">Username</label>
                                    <div class="control has-icons-left has-icons-right">
                                    <input type="text" className="input" placeholder="username" value={name} onChange={(e)=> setName(e.target.value)} />
                                        <span class="icon is-small is-left">
                                            <i class="fas fa-user"></i>
                                        </span>
                                    </div>
                                </div>                                  
                                <label class="label">Email</label>
                                    <div class="control has-icons-left has-icons-right">
                                    <input type="text" className="input" placeholder="email" value={email} onChange={(e)=> setEmail(e.target.value)} />
                                        <span class="icon is-small is-left">
                                            <i class="fas fa-envelope"></i>
                                        </span>
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Password</label>
                                    <div className="controls">
                                        <input type="password" className="input" placeholder="******" value={password} onChange={(e)=> setPassword(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <button className="button is-success is-fullwidth" type='submit'>Register</button>
                                </div>
                                <div className="field mt-5">
                                    <NavLink to="/login">
                                    <button className="button is-success is-fullwidth" type='submit'>Login</button>
                                    </NavLink>
                                </div>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Register