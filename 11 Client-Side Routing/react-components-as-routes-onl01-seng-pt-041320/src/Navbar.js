import React, { Component } from 'react';
import {NavLink} from "react-router-dom";

// Add basic styling for NavLinks
const link =
{
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white"
}

// Add the navbar component
class Navbar extends Component
{
    render()
    {
        return (
            <div>
                <NavLink
                to="/" 
                exact // set exact so it knows to only set activeStyle when route is deeply equal to links
                style={link} // add styling to NavLink
                activeStyle={ // add prop for activeStyle
                {
                    background: "darkblue"
                }
                }
                >Home</NavLink>
                <NavLink to="/messages" exact style={link} activeStyle={{background: "darkblue"}}>Messages</NavLink>
                <NavLink to="/about" exact style={link} activeStyle={{background: "darkblue"}}>About</NavLink>
                <NavLink to="/login" exact style={link} activeStyle={{background: "darkblue"}}>Login</NavLink>
                <NavLink to="/signup" exact style={link} activeStyle={{background: "darkblue"}}>Signup</NavLink>

            </div>

        )
    }
}

export default Navbar;
