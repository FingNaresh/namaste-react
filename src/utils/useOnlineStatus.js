import React from 'react'
import { useEffect, useState } from 'react'

const useOnlineStatus = () => {

    const[onlineStatus,setOnlineStaus]=useState(true);

    useEffect(()=>{
        window.addEventListener("offline",()=>{
            setOnlineStaus(false);
        });

        window.addEventListener("online",()=>{
            setOnlineStaus(true);
        });
    },[]);

    // boolean value
    return  onlineStatus;
}

export default useOnlineStatus
