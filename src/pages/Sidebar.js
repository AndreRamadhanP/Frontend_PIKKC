import React from "react";
import "bulma/css/bulma.css";

function Sidebar() {
  return (
    // <div className="sidebar">
      
    //     <button class="button is-medium is-black ml-1">
    //       <span class="icon-text">
    //         <span class="icon">
    //           <i class="fas fa-home"></i>
    //         </span>
    //         <span>Home</span>
    //       </span>
    //     </button>
      
      
    //     <button class="button is-medium is-black ml-4">
    //       <span class="icon-text">
    //         <span class="icon">
    //           <i class="fas fa-user"></i>
    //         </span>
    //         <span>Peneliti</span>
    //       </span>
    //     </button>
     
      
    //     <button class="button is-medium is-black is-left is-widescreen ml-2">
    //       <span class="icon-text">
    //         <span class="icon">
    //           <i class="fas fa-book"></i>
    //         </span>
    //         <span>Jurnal</span>
    //       </span>
    //     </button>
      
    //   <div className="button">
    //         <NavLink to="/login" >
    //           <a>
    //             Log Out
    //           </a>
    //         </NavLink>
    //         </div>
    // </div>
    <div className="sidebar has-background-grey-darker">
    <div class="is-widescreen">
      <div class="columns">
        <aside className="menu">
          <ul class="menu-list">
            <li className="mb-4 "><a href="/dashboard" className="fas fa-home has-text-info"> Dashboard</a></li>
            <li className="mb-4"><a href="/dashboard/peneliti" className="fas fa-user has-text-info">&ensp;Peneliti</a></li>
            <li className="mb-4"><a href="/dashboard/jurnal" className="fas fa-book has-text-info">&ensp;Jurnal</a></li>
          </ul>
        </aside>
      </div>
    </div>
  </div>
  );
}

export default Sidebar;
