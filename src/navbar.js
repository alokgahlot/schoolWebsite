/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { changeRouteIndex } from "./action";
import { useDispatch, useSelector } from "react-redux";
const Navbar = () => {
  const [show, setShow] = useState(false);
  const dispatch= useDispatch();
  const state=useSelector(storage=>storage)
  console.log(state,"stststs")
  return (
    <>
      <section className="navbar-bg">
        <nav class="navbar navbar-expand-lg navbar-light ">
          <div class="container">
            <a class="navbar-brand" href="#">
           <p style={{color:'white'}} >Nav Bharti Inter College</p>   
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShow(!show)}>
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class={`collapse navbar-collapse ${show ? "show" : ""}`}>
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <NavLink class="" aria-current="page"
                  onClick={()=>{
                    dispatch(changeRouteIndex(0))
                  }}
                  style={{color:state.reducers.routeIndex===0 ? 'orange' : 'white',
                fontWeight:state.reducers.routeIndex===0 ? 'bold':'lighter'
                }}
                  to="/">
                    Home
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-Navlink" to="/service"
                     onClick={()=>{
                      dispatch(changeRouteIndex(1))
                    }}
                    style={{color:state.reducers.routeIndex===1 ? 'orange' : 'white',
                    fontWeight:state.reducers.routeIndex===1 ? 'bold':'lighter'
                    }}
                  >
                    Rules/Regulations
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-Navlink" to="/about"
                     onClick={()=>{
                      dispatch(changeRouteIndex(2))
                    }}
                    style={{color:state.reducers.routeIndex===2 ? 'orange' : 'white',
                    fontWeight:state.reducers.routeIndex===2 ? 'bold':'lighter'
                    }}
                  >
                    About
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-Navlink" to="/contact"
                     onClick={()=>{
                      dispatch(changeRouteIndex(3))
                    }}
                    style={{color:state.reducers.routeIndex===3 ? 'orange' : 'white',
                    fontWeight:state.reducers.routeIndex===3 ? 'bold':'lighter'
                    }}
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
