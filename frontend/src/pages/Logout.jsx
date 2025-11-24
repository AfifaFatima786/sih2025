import React from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

export const Logout=()=>{
    
    const navigate=useNavigate()
    // Always pass the string in localstorage methods  not a varibale 
   
    axios.get(`${import.meta.env.VITE_BASE_URL}/api/auth/logout`,{withCredentials:true}).then((response)=>{
        if(response.status==200){
            navigate('/userlogin')
        }
    })



    return(
        <div>Logout</div>
    )
}

export default Logout