import React, {useState} from "react"
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import axios from "axios";
import Logo from "../Assets/Logo.png";

const Profil = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    const Profil = async(e) =>{
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
        <React.Fragment>
        <Navbar />
        <div className='main'>
          <Sidebar/>
          
<div class="box has-text-centered has-background-white">
    <div>
        <div class="flex-shrink-0">
            <a href="#" class="image is-64x64 m-auto">
            <img src={Logo} width="150" height="28" alt="logo" class="is-rounded"/>
            </a>
        </div>
        <div class="mb-4">
            <p class="has-text-grey-dark">
                Hafid
            </p>
            <p class="has-text-grey-dark-light is-size-7">
                SCCIC
            </p>
        </div>
        <button class="button is-primary ">
            Add
        </button>
    </div>
</div>

          <div className="profil-style">
    <section className="hero is-fullheight is-fullwidth">
        <div className="hero-body">
            <div className="container">
                <div className="columns is-centered">
                    <div className="column is-4-desktop">
                    <form onSubmit={Profil} className="box has-background-grey-light ">
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
                                    <button className="button is-success is-fullwidth" type='submit'>Update</button>
                                </div>
                            </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
    </div>
      </React.Fragment>
    )
}
    
export default Profil