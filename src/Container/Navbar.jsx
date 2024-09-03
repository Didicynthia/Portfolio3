import { useState } from "react";
import React from "react";
import Images from "../assets/image";


const [isLogin, setIsLogin] =useState(false);
console.log(isLogin);
function Navbar() {
  return (
    <section>
        <header>
            <img src={Images.Pics} alt="random image" />
            <img src={Images.Ret} alt="random image" />
            <img src={Images.fine} alt="random image" />
            <img src={i=Images.can} alt="random image" />
        </header>
        <button onClick={ ()=> setIsLogin(!isLogin)}

        className='inline-flex items-center bg-gray-100 border-0 py-1 px-3' >


          {isLogin ? "LOG IN" : "LOG OUT"}
       
        </button>
    </section>
  )
}

export default Navbar;