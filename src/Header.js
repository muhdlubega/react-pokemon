import {useNavigate} from "react-router-dom";
import React from "react";


function Header(){
    const navigate = useNavigate();

    return(
        <div>
            <div className="header">
                <h1 className="title" onClick={()=>{navigate("/")}}>PokeAPI</h1>
            </div>
            <br></br>
        </div>
    )
}

export default Header;