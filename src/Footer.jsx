import React from "react";


const Footer = ()=> {

    
    const year = new Date().getUTCFullYear();
    return(
        <footer>
            <p>copyright ©️ {year}</p>
        </footer>
    );
   
};

export default Footer;

