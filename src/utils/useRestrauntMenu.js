import React, { use } from 'react'
import { useEffect, useState } from 'react';
import { MENU_API } from '../utils/constants';

const useRestrauntMenu = (resId) => {
    //fetch data
    const[resInfo, setResInfo]=useState(null);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData= async ()=>{
         try {
            const data = await fetch(MENU_API + resId);
            const json = await data.json();
            console.log(json);
            setResInfo(json?.data);
            } catch (error) {
            console.error("Failed to fetch menu:", error);
            }
            };
  


  return resInfo;
}

export default useRestrauntMenu;
