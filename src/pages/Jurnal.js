import React, {useState} from "react"
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Logo from "../Assets/Logo.png"

const Jurnal = () => {

    return (
        <React.Fragment>
        <Navbar />
        <div className='main'>
          <Sidebar/>
            <section class="jurnal-style container p-5">
                <div class="columns is-vcentered is-justify-content-space-evenly">
                    <div class="column is-one-third">
                        <div class="card">
                            <header class="card-header">
                                <p class="card-header-title">
                                    New Update
                                </p>
                                <div class="card-header-icon">
                                    <span>
                                        <i class="fas fa-plus"></i>
                                    </span>
                                </div>
                            </header>
                            <div class="card-image">
                                <figure class="image is-4by3">
                                    <img src={Logo}/>
                                </figure>
                            </div>
                            <div class="card-content">
                                Testing...
                                <a>@management</a>
                                <a href="#">#newpost</a>
                                <a href="#">#update</a>
                                <br />                                 
                            </div>
                        </div>
                    </div>
                </div>
            </section>        
        </div>
      </React.Fragment>
    )
}
    
export default Jurnal