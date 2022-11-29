import React, {useState} from "react"
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import User from "../Assets/User.png"

const Peneliti = () => {

    return (
        <React.Fragment>
        <Navbar />
        <div className='main'>
          <Sidebar/>
          
<div class="box has-text-centered has-background-white">
<div className="peneliti">
<ul>
    <li class="box mb-1 has-background-dark">
        <article class="media">
            <figure class="media-left">
            <img src={User} class="is-rounded "/>
            </figure>
            <div class="media-content">
                <div class="content">
                    <p>
                        <strong class="has-text-white">
                            Andre &nbsp;
                        </strong>
                        <small class="has-text-white-ter">
                            SCCIC
                        </small>
                        <br/>
                        <span class="has-text-white-ter">
                            Travel and work arround the world during 7 years
                        </span>
                    </p>
                </div>
            </div>
        </article>
    </li>
    <li class="box mb-1 has-background-dark">
        <article class="media">
            <figure class="media-left">
                <p class="image is-64x64">
                    
                </p>
            </figure>
            <div class="media-content">
                <div class="content">
                    <p>
                        <strong class="has-text-white">
                            Eric Rikko
                        </strong>
                        <small class="has-text-white-ter">
                            @ericP
                        </small>
                        <br/>
                        <span class="has-text-white-ter">
                            CTO full time, Eric is the master of css 3
                        </span>
                    </p>
                </div>
            </div>
        </article>
    </li>
    <li class="box mb-1 has-background-dark">
        <article class="media">
            <figure class="media-left">
                <p class="image is-64x64">
                    
                </p>
            </figure>
            <div class="media-content">
                <div class="content">
                    <p>
                        <strong class="has-text-white">
                            Yonas Sanchez
                        </strong>
                        <small class="has-text-white-ter">
                            @yonnasan
                        </small>
                        <br/>
                        <span class="has-text-white-ter">
                            Love dogs ans ice cream, Yonas is CEO and happy
                        </span>
                    </p>
                </div>
            </div>
        </article>
    </li>
    <li class="box mb-1 has-background-dark">
        <article class="media">
            <figure class="media-left">
                <p class="image is-64x64">
                    
                </p>
            </figure>
            <div class="media-content">
                <div class="content">
                    <p>
                        <strong class="has-text-white">
                            Maria Sukko
                        </strong>
                        <small class="has-text-white-ter">
                            @mariaDesign
                        </small>
                        <br/>
                        <span class="has-text-white-ter">
                            You say Design ? Call Maria now
                        </span>
                    </p>
                </div>
            </div>
        </article>
    </li>
</ul>
</div>
</div>
    </div>
      </React.Fragment>
    )
}
    
export default Peneliti